const {
    app,
    BrowserWindow,
    ipcMain
} = require('electron')
const rclnodejs = require('rclnodejs')
const path = require('path')


var current_state = "-1";
var blink_state = false;

function createWindow() {
    const win = new BrowserWindow({
        width: 1920,
        height: 1080,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('index.html')

    rclnodejs.init().then(() => {
        const node = new rclnodejs.Node('goal_status_gui');

        let timer = node.createTimer(1000, () => {
            if (blink_state == false) {
                blink_state = true;
            } else if (blink_state == true) {
                blink_state = false;
            }
            win.webContents.send('blink_state', blink_state)

        });

        node.createSubscription('std_msgs/msg/Int32', 'goal_state', (msg) => {
            //  console.log(`Received message: ${typeof msg}`, msg);
            var num = msg.data;
            var string_num = num.toString();
            if (string_num != current_state) {
                current_state = string_num;
                win.webContents.send('received_state', string_num)
            }
        });
        node.spin();
    });

}


app.whenReady().then(() => {
    createWindow()
})


app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})
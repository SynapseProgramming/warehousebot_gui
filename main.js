const { app, BrowserWindow } = require('electron')
const { resolve } = require('path');
const rclnodejs = require('rclnodejs');
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        // webPreferences: {
        //     preload: path.join(__dirname, 'ros.js')
        // }
    })

    win.loadFile('index.html')
}


app.whenReady().then(() => {
    createWindow()
    rclnodejs.init().then(() => {

        const node = new rclnodejs.Node('publisher_example_node');
        const publisher = node.createPublisher('std_msgs/msg/String', 'topic');

        let counter = 0;
        setInterval(() => {
            console.log(`Publishing message: Hello ROS ${counter}`);
            publisher.publish(`Hello ROS ${counter++}`);
        }, 1000);

        node.spin();

    });
})
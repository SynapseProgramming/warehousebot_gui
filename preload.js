var audio = new Audio();
var curr_state = "-1";

require('electron').ipcRenderer.on('received_state', (event, message) => {
    curr_state = message;
    if (message == "0") {
        audio.pause();
        audio.src = "Rick.mp3"
        audio.play();
        document.getElementById("circle").style.background = "green";

    } else if (message == "1") {
        document.getElementById("circle").style.background = "yellow";
        audio.pause();
        audio.src = "Dejavu.mp3"
        audio.play();

    } else if (message == "2") {

        audio.pause();
        audio.src = "Koala.mp3"
        audio.play();

        document.getElementById("circle").style.background = "red";
    }

});

require('electron').ipcRenderer.on('blink_state', (event, message) => {
    if (message == true && curr_state == "1") {
        console.log("blink state is true")

        document.getElementById("circle").hidden = true;
    } else if (message == false && curr_state == "1") {
        console.log("blink state is false")
        document.getElementById("circle").hidden = false;
    } else {
        document.getElementById("circle").hidden = false;
    }

});
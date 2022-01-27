"use stricts";

var video = document.getElementById("vid");
var playbtn = document.getElementById("playbtn");
var pausebtn = document.getElementById("pausebtn");


function Play() {
    if(video.paused) {
        video.play();
        btn.style.background = "url(play.png) no-repeat";
    }
    else{
        video.pause();
        btn.style.background = "url(pause.png) no-repeat";
    }
}

'use strict';

var time
var output
var button = document.getElementById("play-button")
button.addEventListener("click", play);

function Init(){
    time = 1;
    StartTimer()
};

function convertOutput(){
    var hours = 0
    var mins = 0
    var secs = time
    
    while(secs >= 60){
        secs -= 60;
        mins += 1;
    }
    
    if(secs < 10){
        secs = "0" + secs;
    }
    
    while(mins >= 60){
        mins -= 60;
        hours += 1;
    }
    
    if(mins < 10){
        mins = "0" + mins;
    }
    
    output = hours + ":" + mins + ":" + secs;
}

function StartTimer(){
    time += 1;
    convertOutput();
    document.getElementById("time").innerHTML = output;
    self.setTimeout("StartTimer()", 1000);
}

function play() {
    var myAudio = document.getElementById("audioval");
    if(myAudio.paused) {
        myAudio.play();
        button.setAttribute("value", "🔈");
    } else {
        myAudio.pause();
        button.setAttribute("value", "🔇");
    }
}

Init();
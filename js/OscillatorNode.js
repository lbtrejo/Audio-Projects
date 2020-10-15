"use strict";

// create web audio api context
let audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// create Oscillator node
let oscillator = audioCtx.createOscillator();

function startOscillator(){
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(880, audioCtx.currentTime); // value in hertz
    oscillator.connect(audioCtx.destination);
    oscillator.start();
    console.log("Oscillator Started!")
}

function stopOscillator(){
    oscillator.stop();
    console.log("Oscillator Stopped!");
}

$(document).ready(function() {
    console.log("Document is ready")

    $("#btn-start").click(function(){
        startOscillator();
    })

    $("#btn-stop").click(function(){
        stopOscillator();
    })
})



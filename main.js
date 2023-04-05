x = 0;
y = 0;

drawn_circle = 0;
drawn_rect = 0;

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML = "System Is Listening Please Speak";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The Speech Has Been Recognised As : " + content; 
    if(content =="circle")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started Drawing Circle";
        drawn_circle = "set";
    } 
    if(content =="rectangle")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started Drawing Rectangle";
        drawn_rect = "set";
    } 
}

function setup(){
    canvas = createCanvas(900,600);
}

function draw(){
    if(drawn_circle == "set")
    {
        radius = Math.floor(Math.random() * 100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "Circle Is Drawn";
        drawn_circle = "";
    }

    if(drawn_rect == "set")
    {
        rect(x,y,70,50);
        document.getElementById("status").innerHTML = "Rectangle Is Drawn";
        drawn_rect = "";
    }
}
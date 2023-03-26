x = 0;
y = 0;

draw_apple = "";
screen_width = 0;
screen_height = 0;
speak_data = "";
to_number = 0;
img = "";
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {


  
 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    to_number = Number(content);
    if(Number.isInteger(to_number))
  {
    draw_apple="set";

  }
  else
  {
    document.getElementById("status").innerHTML="The Speech has not recognized a number";
  }
}
function preload(){
  img = loadImage("apple.png");
}
function setup() {
 screen_width = window.innerWidth;
 screen_height = window.innerHeight;
 canvas = createCanvas(screen_width,screen_height-150);
 canvas.position(75,75);
}


function draw() {
  if(draw_apple == "set")
  {
    for(i=0;i<=to_number;i++){
     x= Math.floor(Math.random()*700);
     y=Math.floor(Math.random()*400);
    
    image(img,x,y,50,50);
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    speak()
  }
  }
  }
function speak(){
    var synth = window.speechSynthesis;
  speak_data = "Apples Drawn"+to_number;
    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    
}

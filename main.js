//web speech api
var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

//fun start
function start() {
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

//fun onResult
recognition.onresult=function(event){
console.log(event);
var Content=event.results[0][0].transcript;
document.getElementById("textbox").innerHTML=Content;
console.log(Content);
//if speech is elqual to "take my selfie " 
if (Content == "take my selfie") {
    speak(); 

}
}

//speak fun
function speak() {
    var synth = window.speechSynthesis;
    speak_data ="Taking Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    //time out
    setTimeout(function(){
        takeSnapshot();
        save();
    },5000);
    
}

//camera var
camera=document.getElementById("camera");

//configure web cam 
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});

//fun take snapshot
function takeSnapshot() {
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'"/>';
});
}

//define fun save
function save() {
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
}
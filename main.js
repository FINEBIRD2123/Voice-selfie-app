var SpeechRecognition = window.webkitSpeechRecognition;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
var recognition = new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();

}
recognition.onresult = function run(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log (Content);
    document.getElementById("textbox").innerHTML = Content;
    if (Content == "hello"){
        speak();
    }
    
}
function speak(){
var synth = window.speechSynthesis;
speak_data = "no U R A noob!"
var utterThis = new SpeechSynthesisUtterance(speak_data);
utterThis.pitch = 10;
utterThis.rate = 10;
utterThis.volume = 0.8;
synth.speak(utterThis);
Webcam.attach(camera);
setTimeout(function(){
snapshot();
save();
},5000);
}
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
  });
  camera = document.getElementById("camera");
 function snapshot(){
     Webcam.snap(function(data_uri){
         document.getElementById("result").innerHTML = ' <img src="'+data_uri+'" id="selfie_image"> ';  
     });
 }
 function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
 }
//https://teachablemachine.withgoogle.com/models/tg0Tg7NZN9/ the things are good rock and peace
var predictionone="";
var predictiontwo="";
Webcam.set({
width:400,
height:350,
image_format:"png",
png_quality:90
});
gg=document.getElementById("camra");
Webcam.attach(gg);
function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='thig' src='"+data_uri+"'>";
    });
}
function speak(){
    synth=window.SpeechSynthesis
    speak1="prediction1 is"+predictionone;
    speak2="prediction2 is"+predictiontwo;
    var utterthis=new SpeechSynthesisUtterance(speak1+speak2);
    synth.speak(utterthis);
}
console.log(ml5.version);
var mod=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/tg0Tg7NZN9/model.json",Modelloaded);
function Modelloaded(){
    console.log("model is loaded yipeeeeeeeeee");
}
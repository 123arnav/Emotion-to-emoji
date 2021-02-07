Webcam.set({
    width:300,
    height:300,
    image_format:'png',
    png_quality: 90
});
camera=document.getElementById("camera");
Webcam.attach(camera);
function generate(){
    Webcam.snap(function(data_uri){
document.getElementById("Snapshot").innerHTML="<img id='capture_image'src='"+data_uri+"'>";

    });

}
console.log("ml5varsion",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/fNeg1JOuk/model.json",modelLoaded);
function modelLoaded(){
    console.log("modelLoad")
}
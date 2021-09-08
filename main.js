var SpeechRecognition = window.webkitSpeechRecognition;    // API to convert speech to text
  
var recognition = new SpeechRecognition();                 // creating new API to use it
 
function Start() 
{
    document.getElementById("voice").innerHTML = ""; 
    recognition.start();                              // convert speech to text        
} 
 
recognition.onresult = function(event) {

   console.log(event); 

   var Content = event.results[0][0].transcript;

    document.getElementById("voice").innerHTML = Content;
    console.log(Content);

if(Content=="take my selfie"){
speak();
}}

function speak() {
    var synth = window.speechSynthesis;                //API- Text to Speech

    speak_data = "taking your selfie in 3 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);   //function to convert Text to Speech

    synth.speak(utterThis);

    Webcam.attach("#camera"); 

    setTimeout(function()
    { 
        take_snapshot(); 
        save();
    }, 3000);
    
    }

    function take_snapshot()
    {
        Webcam.snap(function(data_uri) {
            document.getElementById("selfie").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
        });
    }
    function save()
    {
      link = document.getElementById("link");                    //store <a> tag inside link variable
      image = document.getElementById("selfie_image").src ;     //get image link
      link.href = image;                                       // a tag's href = image link
      link.click();                                           //automatically click the a tag
    }


Webcam.set({
   width: 320,
   height: 240,
   image_format: 'jpeg',
   jpeg_quality: 100
});


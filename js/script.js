/* Slider Script */ 

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slideshow");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000);
}

/* Video Script */ 

var video = document.getElementById("videoplayer");
var playButton = document.getElementById("play");
var Rewind;

function Play() {
    if(video.paused) {
        video.play();
        playButton.innerHTML("PLAY");
    } else {
        video.pause();
        playButton.innerHTML("PAUZE");
    }
}

$("#rewind").click(function() { // button function for rewind
    Rewind = setInterval(function(){
        video.playbackRate = 1.0;
        if(video.currentTime == 0){
            clearInterval(Rewind);
            video.pause();
        }
        else{
            video.currentTime += -.1;
        }
                 },30);
 });

/* Accordion Script */

$(document).ready(function () {
    $('.contact-toggle').on('click', function(event){
        event.preventDefault();
        var accordion = $(this);
        var contactNone = accordion.next('.contact-none');
        accordion.toggleClass("slide");
        contactNone.slideToggle(250);
    });
});

/* P5 sketch */

function updateP5() {
	
	kleurRandRood = 10; 
	kleurRandGroen = 200; 
	kleurRandBlauw = 0;
	kleurCirkelsRood = 100;
	kleurCirkelsGroen = 0; 
	kleurCirkelsBlauw = 200; 
	kleurAchtergrond = 255; 
	randDikte = 5; 
	vorm = -3;
}

// updateP5();

var sketch = { 
	offsetDriehoekKleur:0,
	offsetAchtergrondKleur:0,
	offsetY: 0,
	richtingx: 0,
	maxDriehoeken: 0};

$( "#color" ).slider({
  	slide: function( event, ui ) {
	sketch.offsetDriehoekKleur = ui.value;
	updateP5();
  }
});

$( "#background" ).slider({
  	slide: function( event, ui ) {
	sketch.offsetAchtergrondKleur = ui.value;
	updateP5();
  }
});

$( "#speed" ).slider({
 	slide: function( event, ui ) {
	sketch.richtingx = ui.value;
	updateP5();
  }
});
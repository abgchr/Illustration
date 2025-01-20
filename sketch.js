// SLIDEv

/*let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}*/




// Initialisiert die aktuellen Folienindexe
let slideIndex = 1;

// Funktion, um die Slideshow zu starten
function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let descriptions = document.getElementsByClassName("slide-desc");

  // Wenn der Index größer als die Anzahl der Folien ist, zurück zum ersten Bild
  if (n > slides.length) { slideIndex = 1; }
  // Wenn der Index kleiner als 1 ist, zurück zur letzten Folie
  if (n < 1) { slideIndex = slides.length; }

  // Alle Folien unsichtbar machen
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    descriptions[i].style.display = "none"; // Beschreibung ebenfalls ausblenden
  }

  // Die aktuelle Folie und Beschreibung anzeigen
  slides[slideIndex - 1].style.display = "block";
  descriptions[slideIndex - 1].style.display = "block";
}

// Funktion, um zur nächsten Folie zu wechseln
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Initialisiere die Slideshow
showSlides(slideIndex);





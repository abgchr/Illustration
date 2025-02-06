let slideIndex = 1;

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let descriptions = document.getElementsByClassName("slide-desc");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    descriptions[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
  descriptions[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

showSlides(slideIndex);





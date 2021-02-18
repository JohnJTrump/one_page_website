function openModal() {  //Opens the lightbox
    document.getElementById("myModal").style.display = "block";  
}

function closeModal() { //closes the lightbox
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;    //sets variable to slideIndex
showSlides(slideIndex);

function plusSlides(n) {  //moves through slides
    showSlides(slideIndex += n);
}

function currentSlide(n) {  //displays current slide bigger than the rest
    showSlides(slideIndex = n);
}
function showSlides(n) {  //controls the movement through the slides
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i =0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}
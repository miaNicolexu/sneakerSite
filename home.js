var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
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
}
function hideInfo(){
    document.getElementById("scott").style.visibility = "hidden";
}
function hideInfo1(){
    document.getElementById("rust").style.visibility = "hidden";
}
function hideInfo2(){
    document.getElementById("seoul").style.visibility = "hidden";
}
function showInfo(){
    document.getElementById("scott").style.visibility = "visible";
}
function showInfo1(){
    document.getElementById("rust").style.visibility = "visible";
}
function showInfo2(){
    document.getElementById("seoul").style.visibility = "visible";
}

var slideIndex = 1;
var slides = [
  {
      // "path": "images/slider/GreenEarth_1.png",
      "class": "bg-GreenEarth_1",
      "title": "Enjoy our hot summer deals",
      "price": 69.50
  },
  {
      // "path": "images/slider/GreenEarth_2.png",
      "class": "bg-GreenEarth_2",
      "title": "Enjoy our hot summer deals",
      "price": 89.50
  },
  {
      // "path": "images/slider/GreenEarth_3.png",
      "class": "bg-GreenEarth_3",
      "title": "Enjoy our hot summer deals",
      "price": 109.50
  }
];

function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1
  }    
  if (n < 1) {
    slideIndex = slides.length
  }
    
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }    
    slides[slideIndex-1].style.display = "block";  
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

var event = new Event('waitForSliderToLoad');
var slideshow  = document.getElementById('slideshow');
slideshow.addEventListener('waitForSliderToLoad', function (e) { showSlides(slideIndex); }, false);



$(document).ready(function () {
      slides.map(function(slide) {   
  
        var figure = document.createElement('figure');
        var figcaption = document.createElement('figcaption');
        var h1 = document.createElement('h1');
        var p = document.createElement('p');
        var button = document.createElement('button');
        button.innerHTML = 'Book now !';
  
        h1.innerHTML = slide.title;
        p.innerHTML = 'from &#xa3;' + slide.price;
        figcaption.appendChild(h1);
        figcaption.appendChild(p);
        figcaption.appendChild(button);
  
        figure.className = 'mySlides fade';
        figure.appendChild(figcaption);

          var image = document.createElement('div');
          image.classList.add(slide.class);
        figure.appendChild(image);
  
        slideshow.appendChild(figure);
        slideshow.dispatchEvent(event);
      });
});
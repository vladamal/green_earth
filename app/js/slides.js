var slideIndex = 1;
var slides = [
  {
      "class": "greenearth-1",
      "path": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABdwAAAImAQMAAABzVdrWAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAHtJREFUeNrtwQEBAAAAgiD/r25IQAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAiwGWHQABdinOswAAAABJRU5ErkJggg==",
      "title": "Enjoy our hot summer deals",
      "price": 69.50
  },
  {
      "class": "greenearth-2",
      "path": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABdwAAAImAQMAAABzVdrWAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAHtJREFUeNrtwQEBAAAAgiD/r25IQAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAiwGWHQABdinOswAAAABJRU5ErkJggg==",
      "title": "Enjoy our hot summer deals",
      "price": 89.50
  },
  {
      "class": "greenearth-3",
      "path": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABdwAAAImAQMAAABzVdrWAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAHtJREFUeNrtwQEBAAAAgiD/r25IQAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAiwGWHQABdinOswAAAABJRU5ErkJggg==",
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

          var image = new Image();
          image.src = slide.path;
          image.alt = slide.title + ' Slide';
          image.classList.add(slide.class);
        figure.appendChild(image);
  
        slideshow.appendChild(figure);
        slideshow.dispatchEvent(event);
      });
      showSlides(1);
});
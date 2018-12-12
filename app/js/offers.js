
var offers_json = [
  {
      "path": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjEAAAGNAQMAAADaQbIkAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAADJJREFUeNrtwQENAAAAwqD3T20PBxQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8GG+oAAGTvzxoAAAAAElFTkSuQmCC",
      "class": "bg-london",
      "title": "London",
      "price": 59
  },
  {
      "path": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjEAAAGOAQMAAABc1cCKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAADJJREFUeNrtwTEBAAAAwqD1T+1vBqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAN2/wAAGMUSHZAAAAAElFTkSuQmCC",
      "class": "bg-hamburg",
      "title": "Hamburg",
      "price": 79
  },
  {
      "path": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjEAAAGNAQMAAADaQbIkAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAADJJREFUeNrtwQENAAAAwqD3T20PBxQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8GG+oAAGTvzxoAAAAAElFTkSuQmCC",
      "class": "bg-landungsbrucken",
      "title": "Alicante",
      "price": 89
  },
  {
      "path": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjEAAAGNAQMAAADaQbIkAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAADJJREFUeNrtwQENAAAAwqD3T20PBxQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8GG+oAAGTvzxoAAAAAElFTkSuQmCC",
      "class": "bg-milano",
      "title": "Milano",
      "price": 119
  }
];

$(document).ready(function () {
  // Offers
    var offers  = document.getElementById('offers_wrapper');

    offers_json.map(function(img) {
      var figure = document.createElement('figure');

        var image = new Image();
        image.src = img.path;
        image.alt = img.title + ' Offer';
      image.classList.add(img.class);
      figure.appendChild(image);

      var figcaption = document.createElement('figcaption');      
      var h3 = document.createElement('h3');
      h3.innerHTML = img.title;
      figcaption.appendChild(h3);
      
      var p = document.createElement('p');
      p.innerHTML = 'from &#xa3;' + img.price;
      figcaption.appendChild(p);
      figure.appendChild(figcaption);

      var button = document.createElement('a');
      button.href = '#';
      var h3_button = document.createElement('h3');
      h3_button.innerHTML = 'Book now >';
      button.appendChild(h3_button);

      var article = document.createElement('article');
      article.className = 'col-12 col-sm-6 col-md-5 col-lg-2';
      article.appendChild(figure);
      article.appendChild(button);

      offers.appendChild(article);
      return offers;
    });
});
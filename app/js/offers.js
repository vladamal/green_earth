
var offers_json = [
  {
      "path": "images/offers/london.png",
      "title": "London",
      "price": 59
  },
  {
      "path": "images/offers/hamburg.png",
      "title": "Hamburg",
      "price": 79
  },
  {
      "path": "images/offers/alicante.png",
      "title": "Alicante",
      "price": 89
  },
  {
      "path": "images/offers/milano.png",
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
      article.className = 'col-2 col-td-3 col-t-6 col-m-12';
      article.appendChild(figure);
      article.appendChild(button);

      offers.appendChild(article);
      return offers;
    });
});
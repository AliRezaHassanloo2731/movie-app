'use strict';
const movie = {
  id: 1,
  title: 'Interstellar',
  description:
    'The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.',
  movie_year: 2014,
  director: 'Christopher Nolan',
  actors: [
    'Matthew McConaughey',
    'Anne Hathaway',
    'Jessica Chastain',
    'Michael Caine',
    'Casey Affleck',
    'Mackenzie Foy',
    'John Lithgow',
    'Ellen Burstyn',
    'Matt Damon',
  ],
  poster_url:
    'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
  price: '120.00',
  genre: 'science fiction',
  rating: 7.4,
};

/* variables */
const header = document.getElementById('header');
const menu = document.getElementById('menu');
const main = document.getElementById('main');

const cardMarkup = `
<img src="${movie.poster_url}" alt="movie-${movie.id}">
<a href="#" class="trailer-btn">see trailer<i class="fa-solid fa-play"></i></a>
<div class="movie-directors">
  <h5>${movie.director}</h5>
  <h5>${movie.movie_year}</h5>
</div>
<div class="movie-rating hidden">
  <form>
    <input
      type="text"
      id="inputValue"
      placeholder="share your opinion"
    />
    <button class="comment-btn">submit</button>
  </form>
  <div class="comment-output"></div>
  <div class="movie-rating-star">
    <div class="star-rating">
      <span class="star" data-rating="5">&#9733</span>
      <span class="star" data-rating="4">&#9733</span>
      <span class="star" data-rating="3">&#9733</span>
      <span class="star" data-rating="2">&#9733</span>
      <span class="star" data-rating="1">&#9733</span>
    </div>
    <div class="star-output" id="output">
      <h5></h5>
    </div>  
  </div>
</div>
`;

const headerMarkup = `
<div class="about-movie hidden" id="about-movie">
  <div>
  <div class="movie-title">
    <h3>${movie.title}</h3>
    <h5>${movie.genre}</h5>
  </div>

  <div class="buy-movie">
    <h5 class="buy-movie__price">${movie.price}</h5>
    <a href="#" class="buy-movie__btn">Buy</a>
  </div>
  </div>
  <div class="movie-description">
    <p>
      actors: ${movie.actors}
    </p>
    <p>
      ${movie.description}
     </p>
  </div>
     <div class="movie-photo"></div>  
</div>
  `;

function createElements(parent, elType, myClass) {
  const element = document.createElement(elType);
  element.classList.add(myClass);
  parent.appendChild(element);
  return element;
}
// design and implement the layout of the movie card via DOM manipulation{}
function showMovieCard() {
  const cardElement = createElements(main, 'div', 'card');

  cardElement.insertAdjacentHTML('afterbegin', cardMarkup);
  //  a. submitting and displaying a comment about the movie. Implement an imput under the movie and a functionality to display the submitted comment.
  const clientMovieRate = document.querySelector('.movie-rating');
  const inputElement = document.getElementById('inputValue');
  const commentBtn = document.querySelector('.comment-btn');
  const commentOutput = document.querySelector('.comment-output');

  const stars = document.querySelectorAll('.star');
  const starsOutput = document.getElementById('output');

  cardElement.addEventListener('mouseover', function (e) {
    clientMovieRate.classList.remove('hidden');
  });

  cardElement.addEventListener('mouseleave', function () {
    clientMovieRate.classList.add('hidden');
  });

  commentBtn.addEventListener('click', function (e) {
    e.preventDefault();

    const value = inputElement.value;
    commentOutput.innerHTML = '';
    commentOutput.innerHTML = `" ${value} "`;
  });

  //  b. rating the movie in a star-rating format and displaying the submitted rating.

  for (const star of stars) {
    star.addEventListener('click', function () {
      star.setAttribute('data-clicked', 'true');
      const rating = this.dataset.rating;
      console.log(rating);
      starsOutput.innerHTML = `<h5>Your rating is: ${rating}/5</h5>`;
    });
  }

  header.insertAdjacentHTML('beforeend', headerMarkup);
  const aboutMovie = document.getElementById('about-movie');
  const moviePhoto = document.querySelector('.movie-photo');

  cardElement.addEventListener('mouseover', function (e) {
    aboutMovie.classList.remove('hidden');
    moviePhoto.style.backgroundImage = `url(${movie.poster_url})`;
  });

  cardElement.addEventListener('mouseleave', function () {
    aboutMovie.classList.add('hidden');
  });
}
showMovieCard();

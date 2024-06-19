/* VARIABLES */
const apiUrl =
  'https://raw.githubusercontent.com/AliRezaHassanloo2731/AliRezaHassanloo2731.github.io/main/data/movie.api';

const header = document.getElementById('header');
const main = document.getElementById('main');
const menu = document.getElementById('menu');

/*---- Menu variable ========*/
const menuBar = document.querySelector('.menu-bars');
const menuOverlay = document.querySelector('.menu-overlay');
const navLink1 = document.querySelector('.nav-link-1');
const navLink2 = document.querySelector('.nav-link-2');
const navLink3 = document.querySelector('.nav-link-3');
const navLink4 = document.querySelector('.nav-link-4');

/*---- Card variable ========*/

/* MARKUPS__________________----------- */
const cardMarkup = movie => `
    <img src="${movie.poster_url}" alt="movie-${movie.id}">
    <a href="#stream" class="trailer-btn">see trailer<i class="fa-solid fa-play"></i></a>
    <div class="movie-directors">
      <h5>${movie.director}</h5>
      <h5>${movie.movie_year}</h5>
    </div>
`;

const headerMarkup = movie => `
<div class="about-movie hidden">
  <div class="movie-title">
    <h3>${movie.title}</h3>
    <h5>${movie.genre}</h5>
  <div class="movie-description">
    <p>
       ${movie.actors.slice(0, 2).join(' , ')} , . . .
    </p>
    <p>
      ${movie.description.split(' ').slice(0, 22).join(' ')} . . .
     </p>
  </div>
    <div class="buy-movie">
      <h5 class="buy-movie__price">$${movie.price} </h5>
      <a href="#" class="buy-movie__btn">Buy</a>
    </div>
  </div>
     <div class="movie-trailer" id="stream">
     <iframe src=${
       movie.trailer
     } title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
     </div>
</div>
  `;

const cardBarMarkup = movie => `
      <p>rate this movie</p>
      <div class="card-bar1"></div>
      <div class="card-bar2"></div>
      <div class="card-bar3"></div>`;

let cards;

/* --- function to create new element */
function createElements(parent, elType, myClass) {
  const element = document.createElement(elType);
  element.classList.add(myClass);
  parent.appendChild(element);

  return element;
}

async function getMovies() {
  const response = await fetch(apiUrl);
  const data = await response.json();

  displayMovie(data);
}

const displayMovie = function (movies) {
  cards = movies.map(movie => moviesCard(movie));
  return cards;
};
getMovies();

const movieHeader = function (movie) {
  header.innerHTML = '';

  header.insertAdjacentHTML('beforeend', headerMarkup(movie));
  const aboutMovie = document.querySelector(`.about-movie`);
  const moviePhoto = document.querySelector('.movie-photo');
  aboutMovie.classList.remove('hidden');
  aboutMovie.classList.add(`about-movie-${movie.id}`);

  moviePhoto.style.backgroundImage = `url(${movie.poster_url})`;
};

/* ---create card and card functionality */
function moviesCard(movie) {
  //----------card element---------------
  const cardEl = createElements(main, 'div', 'card');
  cardEl.insertAdjacentHTML('afterbegin', cardMarkup(movie));

  // pass movieHeader function with mouseover
  cardEl.addEventListener('mouseover', () => movieHeader(movie));

  // Attach toggleCardRate functionality to cardBars
  const cardBar = createElements(cardEl, 'div', 'card-bars');
  cardBar.classList.add('card-bars-down');
  cardBar.insertAdjacentHTML('afterbegin', cardBarMarkup(movie));

  const cardOverlay = createElements(cardEl, 'div', 'card-overlay');
  cardOverlay.classList.add('hide');

  cardBar.addEventListener('click', function () {
    cardOverlay.classList.toggle('card-overlay-active'); // Corrected class name
    if (cardOverlay.classList.contains('card-overlay-active')) {
      cardBar.classList.replace('card-bars-down', 'card-bars-up');
      cardOverlay.classList.remove('hide');
      cardOverlay.style.opacity = '1';
    } else {
      cardBar.classList.replace('card-bars-up', 'card-bars-down');
      cardOverlay.classList.add('hide');
    }
  });

  //?Attach ratingComment functionality to

  const movieRating = createElements(cardOverlay, 'div', 'movie-rating');
  const form = createElements(movieRating, 'form');
  // form.insertAdjacentHTML("afterbegin", movieCommentRateMarkup(movie));
  const cardInputValue = createElements(form, 'input', '.card__input-value');
  const commentBtn = createElements(form, 'button', 'comment-btn');
  commentBtn.innerHTML = `<i class="fa-solid fa-right-long"></i>`;
  const commentOutput = createElements(movieRating, 'div', 'comment-output');

  commentBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const value = cardInputValue.value;
    commentOutput.innerHTML = `" ${value} "`;
  });

  // ?Populate starsContainer with stars and attach ratingStar functionality

  const movieStarRating = createElements(
    cardOverlay,
    'div',
    'movie-rating-star'
  );
  const starsContainer = createElements(cardOverlay, 'div', 'star-rating');

  const starsOutput = createElements(cardOverlay, 'div', 'stars-output');

  const starNum = ['5', '4', '3', '2', '1'];
  starNum.forEach(rating => {
    const star = createElements(starsContainer, 'span', `star`);
    star.dataset.rating = rating;
    star.innerHTML = `<i class="fa-regular fa-star"></i>`;
    // star.textContent = "#10025";
    star.addEventListener('click', ratingStar);
  });

  // Additional setup for ratingStar functionality
  function ratingStar() {
    const clickedStar = this;
    clickedStar.setAttribute('data-clicked', 'true');
    const rating = clickedStar.dataset.rating;

    starsOutput.innerHTML = `<h5>Your rating is: ${rating}/5</h5>`;
  }

  return {
    title: movie.title,
    genre: movie.genre,
    year: movie.movie_year,
    cardEl: cardEl,
  };
}

/* --nav animation start here------------------ */
const navlinksArr = [navLink1, navLink2, navLink3, navLink4];

function navAnimate(dir1, dir2) {
  navlinksArr.forEach((nav, i) => {
    nav.classList.replace(`slide-${dir1}-${i + 1}`, `slide-${dir2}-${i + 1}`);
  });
}

function toggleMenu() {
  menuBar.classList.toggle('change');

  menuOverlay.classList.toggle('menu-overlay-active');

  if (menuOverlay.classList.contains('menu-overlay-active')) {
    menuOverlay.classList.replace('overlay-slide-left', 'overlay-slide-right');

    navAnimate('out', 'in');
  } else {
    menuOverlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
    navAnimate('in', 'out');
    cards.forEach(card => {
      card.cardEl.classList.remove('hide');
    });
  }
}
menuBar.addEventListener('click', toggleMenu);
/* --nav animation ends here------------------ */
const navInput = document.querySelector('.menu__input-value');
navInput.addEventListener('input', function (e) {
  e.preventDefault();
  const value = e.target.value.toLowerCase();
  cards.forEach(card => {
    const isVisible = card.title.toLowerCase().includes(value);
    card.cardEl.classList.toggle('hide', !isVisible);
  });
});

const scienceFiction = document.querySelector('.science-fiction');
scienceFiction.addEventListener('click', function () {
  cards.forEach(card => {
    const isVisible = card.genre.toLowerCase().includes('science fiction');

    card.cardEl.classList.toggle('hide', !isVisible);
  });
});

const action = document.querySelector('.action');

action.addEventListener('click', function () {
  cards.forEach(card => {
    const isVisible = card.genre.toLowerCase().includes('action');

    card.cardEl.classList.toggle('hide', !isVisible);
  });
});

const recently = document.querySelector('.recently');
// cards.forEachrecently(card => {
//   console.log(card.year);
// });
recently.addEventListener('click', function () {
  cards.forEach(card => {
    if (card.year > 2011) {
      const isVisible = card.year;
      card.cardEl.classList.toggle('hide', !isVisible);
    }
  });
});
/* FOOTER */

const timer = document.querySelector('.timer');

function logOutTimer() {
  let time = 100;

  const tick = setInterval(function () {
    const min = Math.trunc(time / 60)
      .toString()
      .padStart(2, '0');
    const sec = String(Math.floor(time % 60)).padStart(2, '0');

    if (time === 0) {
      clearInterval(tick);
    }
    time--;

    timer.textContent = `You will logout in ${min}:${sec}`;
  }, 1000);
}

logOutTimer();

const footerInput = document.querySelector('.footer-input');
const footerBtn = document.querySelector('.footer-btn');

footerBtn.addEventListener('click', function (e) {
  e.preventDefault();

  const value = footerInput.value;

  setTimeout(function (e) {
    alert('time to go');
  }, value * 60 * 1000);
});

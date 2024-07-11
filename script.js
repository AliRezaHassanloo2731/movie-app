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

let cards;

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

/* --- function to create new element */
function createElements(parent, elType, myClass) {
  const element = document.createElement(elType);
  element.classList.add(myClass);
  parent.appendChild(element);

  return element;
}

/* -----create header------------------------ */
const displayHeader = function (movie) {
  header.innerHTML = '';

  header.insertAdjacentHTML('beforeend', headerMarkup(movie));
  const aboutMovie = document.querySelector(`.about-movie`);

  aboutMovie.classList.replace('hidden', `about-movie-${movie.id}`);
};

async function getMovies() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    displayMovie(data);
  } catch (error) {
    console.log('somthing went wrong');
  }
}

const displayMovie = function (movies) {
  cards = movies.map(movie => moviesCard(movie));
  return cards;
};
getMovies();

/* ------show each card------------------- */
function moviesCard(movie) {
  /* VARIABLES */
  const cardEl = createElements(main, 'div', 'card');
  cardEl.insertAdjacentHTML('afterbegin', cardMarkup(movie));

  const cardBar = createElements(cardEl, 'div', 'card-bars');

  cardBar.insertAdjacentHTML('afterbegin', cardBarMarkup(movie));

  const cardOverlay = createElements(cardEl, 'div', 'card-overlay');

  const movieRating = createElements(cardOverlay, 'div', 'movie-rating');
  const form = createElements(movieRating, 'form');
  const cardInputValue = createElements(form, 'input', '.card__input-value');
  const commentBtn = createElements(form, 'button', 'comment-btn');
  commentBtn.innerHTML = `<i class="fa-solid fa-right-long"></i>`;
  const commentOutput = createElements(movieRating, 'div', 'comment-output');
  const starsContainer = createElements(cardOverlay, 'div', 'star-rating');

  const starsOutput = createElements(cardOverlay, 'div', 'stars-output');
  const starNumbers = ['1', '2', '3', '4', '5'];
  starNumbers.forEach(starNumber => {
    const star = createElements(starsContainer, 'span', `star`);
    star.setAttribute('data-rating', starNumber);
    star.innerHTML = `&#9734;`;
  });

  cardOverlay.classList.add('hide');

  function showOverlay() {
    cardOverlay.classList.toggle('card-overlay-active'); //

    if (cardOverlay.classList.contains('card-overlay-active')) {
      cardBar.classList.toggle('card-bars-up');
      cardOverlay.classList.replace('hide', 'card-overlay-active');
      cardOverlay.style.opacity = '1';
    } else {
      cardBar.classList.toggle('card-bars-up');

      cardOverlay.classList.toggle('card-overlay-active');

      cardOverlay.classList.replace('card-overlay-active', 'hide');
    }
  }

  cardEl.addEventListener('mouseover', () => displayHeader(movie));

  cardBar.addEventListener('click', showOverlay);

  commentBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const value = cardInputValue.value;
    commentOutput.innerHTML = `" ${value} "`;
  });

  starsContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('.star');
    if (!clicked) return;

    const clickedRating = parseInt(clicked.dataset.rating);

    starsContainer.querySelectorAll('.star').forEach(star => {
      const starRating = parseInt(star.dataset.rating);
      if (starRating <= clickedRating) {
        star.innerHTML = `&#9733;`;
      } else {
        star.innerHTML = `&#9734;`;
      }
    });

    starsOutput.innerHTML = `<h5>Your rating is: ${clicked.dataset.rating}/5</h5>`;
  });

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
  let time = 185;

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

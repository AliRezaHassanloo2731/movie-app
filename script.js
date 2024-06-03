/* VARIABLES */
const movies = [
  {
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
  },

  {
    id: 2,
    title: 'The Dark Knight',
    description:
      'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    movie_year: 2008,
    director: 'Christopher Nolan',
    actors: [
      'Christian Bale',
      'Heath Ledger',
      'Aaron Eckhart',
      'Michael Caine',
      'Maggie Gyllenhaal',
      'Gary Oldman',
      'Morgan Freeman',
    ],
    poster_url:
      'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    price: '140.00',
    genre: 'action',
    rating: 9.0,
  },

  {
    id: 3,
    title: 'Avatar',
    description:
      'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
    movie_year: 2009,
    director: 'James Cameron',
    actors: [
      'Sam Worthington',
      'Zoe Saldana',
      'Sigourney Weaver',
      'Stephen Lang',
      'Michelle Rodriguez',
      'Giovanni Ribisi',
    ],
    poster_url:
      'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg',
    price: '130.00',
    genre: 'science fiction',
    rating: 7.8,
  },
  {
    id: 4,
    title: 'The Matrix',
    description:
      'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    movie_year: 1999,
    director: 'Lana Wachowski, Lilly Wachowski',
    actors: [
      'Keanu Reeves',
      'Laurence Fishburne',
      'Carrie-Anne Moss',
      'Hugo Weaving',
      'Joe Pantoliano',
    ],
    poster_url:
      'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    price: '120.00',
    genre: 'science fiction',
    rating: 8.7,
  },
  {
    id: 5,
    title: 'The Godfather',
    description:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    movie_year: 1972,
    director: 'Francis Ford Coppola',
    actors: [
      'Marlon Brando',
      'Al Pacino',
      'James Caan',
      'Diane Keaton',
      'Robert Duvall',
      'Sterling Hayden',
      'John Marley',
      'Richard Conte',
      'Al Lettieri',
    ],
    poster_url:
      'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
    price: '160.00',
    genre: 'crime',
    rating: 9.2,
  },
  {
    id: 6,
    title: 'Fight Club',
    description:
      'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much, much more.',
    movie_year: 1999,
    director: 'David Fincher',
    actors: [
      'Brad Pitt',
      'Edward Norton',
      'Helena Bonham Carter',
      'Meat Loaf',
      'Jared Leto',
    ],
    poster_url:
      'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg',
    price: '125.00',
    genre: 'drama',
    rating: 8.8,
  },

  {
    id: 7,
    title: 'The Shawshank Redemption',
    description:
      'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    movie_year: 1994,
    director: 'Frank Darabont',
    actors: [
      'Tim Robbins',
      'Morgan Freeman',
      'Bob Gunton',
      'William Sadler',
      'Clancy Brown',
      'Gil Bellows',
      'James Whitmore',
    ],
    poster_url:
      'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
    price: '135.00',
    genre: 'drama',
    rating: 9.3,
  },
  {
    id: 8,
    title: "Schindler's List",
    description:
      'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
    movie_year: 1993,
    director: 'Steven Spielberg',
    actors: [
      'Liam Neeson',
      'Ralph Fiennes',
      'Ben Kingsley',
      'Caroline Goodall',
      'Jonathan Sagall',
      'Embeth Davidtz',
    ],
    poster_url:
      'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/c8Ass7acuOe4za6DhSattE359gr.jpg',
    price: '150.00',
    genre: 'history',
    rating: 8,
  },
  {
    id: 9,
    title: 'Gladiator',
    description:
      'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
    movie_year: 2000,
    director: 'Ridley Scott',
    actors: [
      'Russell Crowe',
      'Joaquin Phoenix',
      'Connie Nielsen',
      'Oliver Reed',
      'Richard Harris',
      'Derek Jacobi',
      'Djimon Hounsou',
    ],
    poster_url:
      'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg',
    price: '125.00',
    genre: 'action',
    rating: 8.5,
  },
  {
    id: 10,
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    description:
      'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
    movie_year: 2001,
    director: 'Peter Jackson',
    actors: [
      'Elijah Wood',
      'Ian McKellen',
      'Orlando Bloom',
      'Sean Bean',
      'Viggo Mortensen',
      'Sean Astin',
      'Cate Blanchett',
      'Liv Tyler',
    ],
    poster_url:
      'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg',
    price: '140.00',
    genre: 'fantasy',
    rating: 8.8,
  },
  {
    id: 11,
    title: 'The Lion King',
    description:
      'Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.',
    movie_year: 1994,
    director: 'Roger Allers, Rob Minkoff',
    actors: [
      'Matthew Broderick',
      'Jeremy Irons',
      'James Earl Jones',
      'Whoopi Goldberg',
      'Rowan Atkinson',
      'Moira Kelly',
      'Nathan Lane',
      'Ernie Sabella',
    ],
    poster_url:
      'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg',
    price: '100.00',
    genre: 'animation',
    rating: 8.5,
  },
  {
    id: 12,
    title: 'Star Wars: Episode IV - A New Hope',
    description:
      "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee, and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
    movie_year: 1977,
    director: 'George Lucas',
    actors: [
      'Mark Hamill',
      'Harrison Ford',
      'Carrie Fisher',
      'Peter Cushing',
      'Alec Guinness',
      'David Prowse',
      'James Earl Jones',
      'Anthony Daniels',
      'Kenny Baker',
    ],
    poster_url:
      'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg',
    price: '130.00',
    genre: 'science fiction',
    rating: 8.6,
  },
];

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
    <a href="#" class="trailer-btn">see trailer<i class="fa-solid fa-play"></i></a>
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
     <div class="movie-photo"></div>  
</div>
  `;

const cardBarMarkup = movie => `
      <p>rate this movie</p>
      <div class="card-bar1"></div>
      <div class="card-bar2"></div>
      <div class="card-bar3"></div>`;

// <div class="comment-output"></div>

/* --- function to create new element */
function createElements(parent, elType, myClass) {
  const element = document.createElement(elType);
  element.classList.add(myClass);
  parent.appendChild(element);

  return element;
}

const movieHeader = function (movie) {
  header.innerHTML = '';

  header.insertAdjacentHTML('beforeend', headerMarkup(movie));
  const aboutMovie = document.querySelector(`.about-movie`);
  const moviePhoto = document.querySelector('.movie-photo');
  aboutMovie.classList.remove('hidden');
  aboutMovie.classList.add(`about-movie-${movie.id}`);

  moviePhoto.style.backgroundImage = `url(${movie.poster_url})`;
};
/* ------show each card------------------- */

const cards = movies.map(movie => moviesCard(movie));

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
    } else {
      cardBar.classList.replace('card-bars-up', 'card-bars-down');
      cardOverlay.classList.add('hide');
    }
  });

  //?Attach ratingComment functionality to
  // <form>
  //       <input type="text" class="card__input-value" placeholder="share your opinion" />
  //       <button class="comment-btn">submit</button>
  //     </form>
  //     <div class="comment-output"></div>
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

  return { title: movie.title, genre: movie.genre, cardEl: cardEl };
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

/* FOOTER */

const timer = document.querySelector('.timer');

function logOutTimer() {
  let time = 100;

  const tick = setInterval(function () {
    let time = 100;

    const min = Math.trunc(time / 60)
      .toString()
      .padStart(2, '0');

    const sec = String(Math.floor(time % 60)).padStart(2, '0');

    if (time === 0) {
      clearInterval(tick);
    }
    time--;

    timer.innerHTML = `You will logout in ${min}:${sec}`;
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

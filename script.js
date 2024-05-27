'use strict';
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

/* variables */
const header = document.getElementById('header');
const menu = document.getElementById('menu');
const main = document.getElementById('main');

const cardMarkup = movie => `
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
      class="input-value"
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
    <div class="star-output">
      <h5></h5>
    </div>  
  </div>
</div>
`;

// const rateMarkup = movie => `
// <div class="movie-rating hidden">
//   <form>
//     <input
//       type="text"
//       class="input-value"
//       placeholder="share your opinion"
//     />
//     <button class="comment-btn">submit</button>
//   </form>
//   <div class="comment-output"></div>
//   <div class="movie-rating-star">
//     <div class="star-rating">
//       <span class="star" data-rating="5">&#9733</span>
//       <span class="star" data-rating="4">&#9733</span>
//       <span class="star" data-rating="3">&#9733</span>
//       <span class="star" data-rating="2">&#9733</span>
//       <span class="star" data-rating="1">&#9733</span>
//     </div>
//     <div class="star-output">
//       <h5></h5>
//     </div>
//   </div>
// </div>
// `;

const headerMarkup = movie => `
<div class="about-movie">
  
  <div class="movie-title">
    <h3>${movie.title}</h3>
    <h5>${movie.genre}</h5>
 
  <div class="movie-description">
    <p>
       ${movie.actors.slice(0, 2).join(' , ')} , . . .
    </p>
    <p>
      ${movie.description.split(' ').slice(0, 25).join(' ')} . . .
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

function createElements(parent, elType, myClass) {
  const element = document.createElement(elType);
  element.classList.add(myClass);
  parent.appendChild(element);
  return element;
}
//week 2
// JS2 week2 - Array functions, Arrow function
// Start with creating an array of movie objects. Even a small one is perfectly enough, but go as big as you want! Continue with the format of the movie object you used last week or improve it and refactor!

//  traverse the movie array and display all the movies on the page in a grid via DOM manipulation.

//  manipulate the movie array, implementing these functions:
// a function for searching for a provided keyword in the movie title;
// a function for sorting the movie array by one or a few selected properties.
//  optional: as you might guess, you will later use these functions to implement searching and sorting functionality, so feel free to add any other array-manipulation functions of your choice!
movies.map(movie => showMovieCard(movie));

function showMovieCard(movie) {
  const cardElement = createElements(main, 'div', 'card');
  cardElement.insertAdjacentHTML('afterbegin', cardMarkup(movie));

  cardElement.addEventListener('mouseover', function (e) {
    // createCardHeader
    //submitting and displaying a comment about the movie.

    header.innerHTML = '';
    // cardElement.innerHTML = '';
    // cardElement.insertAdjacentHTML('afterbegin', cardMarkup(movie));
    header.insertAdjacentHTML('beforeend', headerMarkup(movie));
    const aboutMovie = document.querySelector(`.about-movie`);

    const moviePhoto = document.querySelector('.movie-photo');

    const movieRate = document.querySelector('.movie-rating');
    // movieRate.innerHTML = '';
    // cardElement.insertAdjacentHTML('beforeend', rateMarkup(movie));

    const inputElement = document.querySelector('.input-value');
    const commentBtn = document.querySelector('.comment-btn');
    const commentOutput = document.querySelector('.comment-output');

    const stars = document.querySelectorAll('.star');
    const starsOutput = document.querySelector('.star-output');

    movieRate.classList.remove('hidden');

    commentBtn.addEventListener('click', function (e) {
      e.preventDefault();

      const value = inputElement.value;
      // commentOutput.innerHTML = '';
      commentOutput.innerHTML = `" ${value} "`;
    });

    //  b. rating the movie in a star-rating format and displaying the submitted rating.

    for (const star of stars) {
      star.addEventListener('click', function () {
        star.setAttribute('data-clicked', 'true');
        const rating = this.dataset.rating;

        starsOutput.innerHTML = `<h5>Your rating is: ${rating}/5</h5>`;
      });
    }
    /* SHOW about movie inside header */
    aboutMovie.classList.remove('hidden');
    aboutMovie.classList.add('about-movie-${movie.id}');

    moviePhoto.style.backgroundImage = `url(${movie.poster_url})`;
  });
}

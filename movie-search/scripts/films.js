let page;
if (page === undefined || page === 'NaN') { page = 1; }

let search;
if (search === undefined || search === 'NaN') { search = 'Man'; }
const key = '2ebab628';

const c = document.getElementById('hide').classList;

/* ///////////////////// Show on slider //////////////// */

function render(data) {
  data.Search.forEach((item) => {
    const img = document.createElement('img');
    if (item.Poster === 'N/A') {
      img.src = 'https://www.aviastore.in/assets/default/image-placeholder.svg';
    } else { img.src = item.Poster; }
    img.alt = item.Title;
    img.reit = item.imdbRating;
    img.id = item.imdbID;
    img.year = item.Year;
    function check() {
      swiper.appendSlide([
        `<div id="swip" class="swiper-slide visibl"><a class="onecard" href = "https://www.imdb.com/title/${img.id}">${img.alt}</a><img class = "poster" alt="oops" src ="${img.src}"></img><div class="year">${img.year}</div><div class ="reit"><img class = "mark" alt="" src ="resources/star.png"></img><span class = "reit">${img.reit}</span></div></div>`,
      ]);
    }
    setTimeout(check, 1000);
  });
}

/* ///////////////////// Films //////////////// */

async function getRating(prop) {
  const { imdbID } = prop;
  const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=${key}`;
  const res = await fetch(url);
  const data = await res.json();
  Object.assign(prop, data);
  return data;
}

let count1 = 0;
async function getMovieTitle(page) {
  const url = `https://www.omdbapi.com/?s=${search}&page=${page}&apikey=${key}`;
  const res = await fetch(url);
  const data = await res.json();
  if (data.Response === 'False') {
    c.add('fade');
    document.getElementById('vivod').innerHTML = `<div id="str">No result for "${search}"<br>Enter the correct movie name!</div>`;
  } else {
    const promises = data.Search.map(getRating);
    await Promise.all(promises);
    if (count1 === 1) {
      c.add('fade');
      const len = document.querySelectorAll('.swiper-slide');
      if (len.length > 0) {
        for (let i = 0; i < len.length; i += 1) {
          document.querySelector('.swiper-slide').remove();
        }
      }
    }
    count1 = 0;
    render(data);
  }
}

const isCyrillic = function valid(text) {
  return /[а-я]/i.test(text);
};

/* ///////////////////// Search //////////////// */

function ShowSelection() {
  const input = document.querySelector('input');

  if (input.value.length === 0) { document.getElementById('vivod').innerHTML = '<div id="str1">Enter movie!</div>'; } else if (isCyrillic(input.value) === true) {
    const request = new XMLHttpRequest();
    const yandex = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200508T154724Z.4134a073e1a23924.bbd86509741c39b4b85fa584bacbd660016228e7&text=${input.value}&lang=ru-en`;
    request.open('GET', yandex, true);

    request.onload = function load() {
      if (request.status >= 200 && request.status < 400) {
        const zapros = JSON.parse(request.responseText);
        c.remove('fade');
        search = zapros.text;
        count1 = 1;
        page = 1;
        getMovieTitle(page);
        document.getElementById('vivod').innerHTML = `<div id="str1">Showing results for "${search}/${input.value}"`;
      }
    };
    request.send();
  } else {
    c.remove('fade');
    count1 = 1;
    search = input.value;
    page = 1;
    getMovieTitle(page);
    document.getElementById('vivod').innerHTML = '';
  }
}

/* ///////////////////// Slider //////////////// */

let count = 4;
function prev() {
  count -= 1;
}

const slide = document.getElementById('slider');
slide.addEventListener('mousedown', (e) => {
  count += 1;
  if (count % 3 === 0) {
    page += 1;
    getMovieTitle(page)
      .catch((e) => console.log(e));
  }
});

document.addEventListener('touchstart', (event) => {
  event.stopPropagation();
  count += 1;
  if (count % 3 === 0) {
    page += 1;
    getMovieTitle(page)
      .catch((e) => console.log(e));
  }
}, false);


function pages() {
  count += 1;
  if (count % 5 === 0) {
    page += 1;
    getMovieTitle(page)
      .catch((e) => console.log(e));
  }
}


getMovieTitle(page)
  .catch((e) => console.log(e));

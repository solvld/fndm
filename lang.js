const langArr = {
  "unit": {
    "ru": "FNDM - Страница на Русском ",
    "en": "FNDM - Page in English"
  }
}

const select = document.querySelectorAll('.lang-li');

const changeUrl = select.forEach(item => {
  item.addEventListener('click', () => {
    let lang = item.id;
    location.href = window.location.pathname + "#" + lang;
    changeLang();
  })
});

const changeLang = () => {
  let hash = window.location.hash;
  hash = hash.substr(1);
  document.querySelector('title').innerHTML = langArr['unit'][hash]

  console.log(document.querySelector('title'))
}


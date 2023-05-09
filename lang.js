const langArr = {
  "unit": {
    "ru": "FNDM - Страница на Русском ",
    "en": "FNDM - Page in English"
  },
  "info": {
    "ru": "Проект основанный на библиотеке P5.js. <br> Демонстрирует поток рандомного поля",
    "en": "A project based on the P5.js library. <br> Demonstrates the flow of a random field."
  },
  "menu-info": {
    "ru": "о проекте",
    "en": "info"
  },
  "menu-contact": {
    "ru": "контанкты",
    "en": "contact"
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
  document.querySelector('title').innerHTML = langArr['unit'][hash];
  document.getElementById('infoText').innerHTML = langArr['info'][hash];
  document.getElementById('info').innerHTML = langArr['menu-info'][hash];
  document.getElementById('contact').innerHTML = langArr['menu-contact'][hash];

  console.log(document.querySelector('title'))

}


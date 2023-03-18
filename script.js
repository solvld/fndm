const videoElement = document.querySelector('.back-video');
const infoBtn = document.getElementById('info');
const popUp = document.getElementById('popup');
const closeBtn = document.querySelector('.close-btn');

infoBtn.addEventListener('click', function(){
  popUp.classList.add('active');
});

closeBtn.addEventListener('click', function(){
  popUp.classList.remove('active');
})

videoElement.playbackRate = 0.5;
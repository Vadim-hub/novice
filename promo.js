var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);
 
function nextSlide() {
    goToSlide(currentSlide+1);
}
 
function previousSlide() {
    goToSlide(currentSlide-1);
}
 
function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

var playing = true;
var pauseButton = document.getElementById('pause');
 
function pauseSlideshow() {
    pauseButton.innerHTML = 'Далее';
    playing = false;
    clearInterval(slideInterval);
}
 
function playSlideshow() {
    pauseButton.innerHTML = 'Стоп';
    playing = true;
    slideInterval = setInterval(nextSlide,2000);
}
 
pauseButton.onclick = function() {
    if(playing) {
    pauseSlideshow();
  } else {
    playSlideshow();
  }
};

var previous = document.getElementById('previous');

var next = document.getElementById('next');
next.onclick = function() {
    pauseSlideshow();
    nextSlide();
};
previous.onclick = function() {
    pauseSlideshow();
    previousSlide();
};

var carousels = document.querySelectorAll('#carousels .carousel');
var currentCarousel = 0;
var carouselInterval = setInterval(nextCarousel, 2000);

function nextCarousel(){
carousels[currentCarousel].className = 'carousel';
currentCarousel = (currentCarousel+1)%carousels.length;
carousels[currentCarousel].className = 'carousel demonstration';
}

   function Timer (date) {
    var obj=document.getElementById('timer_inp');
    obj.innerHTML--;

    var s = (new Date(date)).getTime() - (new Date()).getTime();
    s = parseInt(s / 1000);

    var h = parseInt(s / 3600);
    s -= h * 3600;
    var m = parseInt(s / 60);
    s -= m * 60;

    obj.innerHTML = h + ':' + m + ':' + s
    if ((new Date(date)).getTime() >= (new Date()).getTime()) setTimeout('Timer(\'' + date + '\');', 1000);
}

Timer('June 20, 2020');

  function getSecondsToTomorrow() {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
    let totalSecondsInADay = 86400;
  
    return totalSecondsInADay - totalSecondsToday;
  }

  let w = getSecondsToTomorrow();
  console.log(w);
  

// Get the button
let mybutton = document.getElementById("Btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $('body');
    offset = element.offset();
    offsetTop = offset.top;
    $('html, body').animate({scrollTop: offsetTop}, 600, 'linear').animate({scrollTop:25},200).animate({scrollTop:0},150) .animate({scrollTop:0},50);
}

// Define a data alvo para o contador regressivo
var countDownDate = new Date("Jan 25, 2024 7:33:00").getTime();

function updateCountdown() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  if (distance > 0) {
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = formatTime(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    var minutes = formatTime(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    var seconds = formatTime(Math.floor((distance % (1000 * 60)) / 1000));

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
  } else {
    document.getElementById('countdown').innerHTML = '';
    clearInterval(interval);
    document.getElementById('Btn-phone').style.display = 'block';
  }
}

function formatTime(time) {
  return time < 10 ? '0' + time : time;
}

// Atualiza o contador a cada segundo
var interval = setInterval(updateCountdown, 1000);

// Chama a função para garantir que o contador é exibido corretamente ao carregar a página
updateCountdown();


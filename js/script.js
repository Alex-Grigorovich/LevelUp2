var myCarousel = document.querySelector('.carousel')
var carousel = new bootstrap.Carousel(myCarousel, {
   wrap: false,
   keyboard: true
})

let time = 1800
const countDownElement = document.getElementById('clock')

setInterval(updateCountDown, 1000);

function updateCountDown() {
   const minutes = Math.floor(time / 60);
   let second = time % 60;
   second = second < 10 ? "0" + second : second;
   countDownElement.innerHTML = `До окончания осталось ${minutes}:${second}`;
   time--;
}

document.oninput = function () {
   var input = document.querySelector('.form-number');
   input.value = input.value.replace(/\D/g, '');
}

jQuery(document).ready(function () {
   $('.form-newprice').mousemove(function (e) {
      var rXP = (e.pageX - this.offsetLeft - $(this).width() / 2);
      var rYP = (e.pageY - this.offsetTop - $(this).height() / 2);
      $('.form-newprice').css('text-shadow', +rYP / 10 + 'px ' + rXP / 80 + 'px  #d0a912, ' + rYP / 8 + 'px ' + rXP / 60 + 'px #d0a912, ' + rXP / 70 + 'px ' + rYP / 12 + 'px rgba(0,159,227,.7)');
   });
});

$(function () {
   $('[data-toggle="tooltip"]').tooltip()
})
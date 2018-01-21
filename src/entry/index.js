import '@scss/index.scss';
import $ from 'jquery';
import '@lib/animateNumber'
import 'materialize-css'

console.log(moment().format());

$('#mmm').prop('number', 0).animateNumber({
    number: 9567,
    easing: 'easeOut'
}, 4000)

$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
});

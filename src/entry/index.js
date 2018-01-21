import $ from 'jquery';
import '@lib/animateNumber'
// materialize
import 'materialize-css'
import 'materialize-css/sass/materialize.scss'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import '@scss/index.scss';

$('.animateNumber').prop('number', 0).animateNumber({
    number: 9567,
    easing: 'easeOut'
}, 4000)

$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
});

videojs('video', {
    controls: true,
    autoplay: false,
    preload: 'auto'
});

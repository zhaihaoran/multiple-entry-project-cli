import '@scss/index.scss';
import $ from 'jquery';
import '@lib/animateNumber'

console.log(moment().format());

$('#mmm').prop('number', 0).animateNumber({
    number: 9567,
    easing: 'easeOut'
}, 4000)

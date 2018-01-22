import $ from 'jquery';
import '@lib/animateNumber'
// materialize
import M from 'materialize-css'
import 'materialize-css/sass/materialize.scss'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import '@scss/index.scss';

//
import '@lib/jquery.scrollfire'

class Index {

    constructor() {
        this.initEvent();
    }

    initEvent() {
        this.declareVar()
        this.pluginsInit()
        this.videoPlay()
    }

    declareVar() {
        this.$animateNumber = $('.animateNumber');
        this.$carousel = $('.carousel.carousel-slider');
        this.$videoPlay = $('#videoPlay');
    }

    videoPlay() {
        let that = this;
        this.$videoPlay.on('click', e => {
            this.$videoPlay.addClass('hide').siblings('.index-mask').addClass('hide');
            that.videoPlayer.play();
        })
    }

    pluginsInit() {
        this.$animateNumber.prop('number', 0).animateNumber({
            number: 9567,
            easing: 'easeOut'
        }, 4000)
        this.$carousel.carousel({
            fullWidth: true,
            indicators: true
        });
        this.videoPlayer = videojs('video', {
            controls: true,
            autoplay: false,
            preload: 'auto'
        });

        $('.scrollfire').scrollfire({
            parallax: {
                active: true,
                parent: $('.scrollfire').parent()
            }
        })
    }
}

new Index();

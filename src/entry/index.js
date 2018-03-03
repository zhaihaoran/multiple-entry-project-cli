import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import '@scss/index.scss';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

//
import '@lib/jquery.scrollfire'
import '@lib/animateNumber'

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
        this.$carousel = $('.carousel');
        this.$videoPlay = $('.in-mask');
        this.$header = $('nav.tum-header');
    }

    videoPlay() {
        let me = this;
        this.$videoPlay.on('click', e => {
            this.$videoPlay.addClass('d-none').siblings('.index-mask').addClass('d-none');
            $('.video-player').removeClass('d-none');
            $('.video-player').find('#video').css('height', $('.index-video').height())
            me.videoPlayer.play();
        })
        const box = 3;
    }

    pluginsInit() {

        this.$animateNumber.each((i, el) => {
            const aa = $(el).data('number');
            $(el).prop('number', 0).animateNumber({
                number: aa,
                easing: 'easeOut'
            }, 3000)
        })

        this.$carousel.carousel()
        this.videoPlayer = videojs('video', {
            controls: true,
            autoplay: false,
            preload: 'auto'
        });

    }
}

new Index();

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import '@scss/video.scss';

import Tm_Video from '@lib/video'

class Video {
    constructor() {
        this.initEvent();
    }

    initEvent() {
        this.declareVar()
        new Tm_Video();
        // this.pluginsInit()
        // this.videoPlay()
    }

    declareVar() {
        this.$videoPlay = $('.in-mask');
    }

    videoPlay() {
        let me = this;
        this.$videoPlay.on('click', e => {
            this.$videoPlay.addClass('d-none').siblings('.index-mask').addClass('d-none');
            $('.video-player').removeClass('d-none');
            $('.video-player').find('#video').css('height', $('.index-video').height())
            me.videoPlayer.play();
        })
    }

    pluginsInit() {
        this.videoPlayer = videojs('video', {
            controls: true,
            autoplay: false,
            preload: 'auto'
        });
    }
}

new Video()

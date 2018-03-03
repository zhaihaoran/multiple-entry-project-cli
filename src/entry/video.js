import videojs from 'video.js'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import 'video.js/dist/video-js.css'
import '@scss/video.scss';

class Video {
    constructor() {
        this.initEvent();
    }

    initEvent() {
        this.declareVar()
        this.pluginsInit()
        this.videoPlay()
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

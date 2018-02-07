import M from 'materialize-css'
import 'materialize-css/sass/materialize.scss'
import _ from 'lodash'
import videojs from 'video.js'
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
        this.$tabs = $('ul.tabs');
    }

    videoPlay() {
        let me = this;
        this.$videoPlay.on('click', e => {
            this.$videoPlay.addClass('hide').siblings('.index-mask').addClass('hide');
            $('.video-player').removeClass('hide');
            $('.video-player').find('#video').css('height', $('.index-video').height())
            me.videoPlayer.play();
        })
    }

    pluginsInit() {
        this.$tabs.tabs();
        this.videoPlayer = videojs('video', {
            controls: true,
            autoplay: false,
            preload: 'auto'
        });
    }
}

new Video()

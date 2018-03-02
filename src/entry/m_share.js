// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// video
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
//

import '@scss/m_common.scss'

class Main {
    constructor() {
        this.initEvent();
    }
    initEvent() {
        this.define()
        this.videoPlay()
    }
    define() {

    }
    videoPlay() {
        this.videoPlayer = videojs('video', {
            controls: true,
            autoplay: false,
            preload: 'auto'
        });
    }
}

new Main();

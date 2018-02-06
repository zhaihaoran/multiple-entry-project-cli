import M from 'materialize-css'
import 'materialize-css/sass/materialize.scss'
import _ from 'lodash'
import '@scss/video.scss';

class Video {
    constructor() {
        this.initEvent();
    }

    initEvent() {
        this.windowListenEvents();
    }

    windowListenEvents() {
    }
}

new Video()

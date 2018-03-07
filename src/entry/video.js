import Common from '@lib/common'

import '@scss/video.scss';

import Tm_Video from '@lib/video'

class Video {
    constructor() {
        this.initEvent();
    }

    initEvent() {
        new Common();
        new Tm_Video();

    }
}

new Video()

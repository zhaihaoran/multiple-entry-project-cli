import Common from '@lib/common'
import '@lib/velocity.min'
import '@lib/materialbox'

import '@scss/home.scss';

import Tm_Video from '@lib/video'

class Main {
    constructor() {
        this.initEvent();
        $('.img-fluid').materialbox();
    }

    initEvent() {
        new Tm_Video();
        new Common();
    }
}

new Main()

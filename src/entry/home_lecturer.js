// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import '@scss/home.scss';

import Tm_Video from '@lib/video'

class Main {
    constructor() {
        this.initEvent();
    }

    initEvent() {
        new Tm_Video();
    }
}

new Main()

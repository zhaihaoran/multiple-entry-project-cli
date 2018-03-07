// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import '@lib/jquery.scrollfire'
import '@lib/animateNumber'

import '@scss/index.scss';

import Common from '@lib/common'

import Tm_Video from '@lib/video'

class Index {

    constructor() {
        this.initEvent();
    }

    initEvent() {
        new Tm_Video();
        new Common();
        this.declareVar()
        this.pluginsInit()
    }

    declareVar() {
        this.$animateNumber = $('.animateNumber');
        this.$carousel = $('.carousel');
        this.$videoPlay = $('.in-mask');
        this.$header = $('nav.tum-header');
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
    }
}

new Index();

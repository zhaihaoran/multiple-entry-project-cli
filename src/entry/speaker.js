import Common from '@lib/common'
import '@lib/velocity.min'
import '@lib/materialbox'

import '@scss/home.scss';

import Tm_Video from '@lib/video'

class Main {
    constructor() {
        this.initEvent();
        $('.img-height').materialbox();
    }

    initEvent() {
        this.$cubes = $('.pw-wrapper').find('.pw-cube');
        new Tm_Video();
        new Common();
        this.renderPicCube();
        $(window).on('resize', e => {
            this.renderPicCube();
        })
    }

    renderPicCube() {
        this.$cubes.each((index, el) => {
            $(el).css("height",$(el).width());
        })
    }
}

new Main()

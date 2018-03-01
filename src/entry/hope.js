import _ from 'lodash'
import '@scss/hope.scss';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import 'slick-carousel'
import '@scss/lib.scss';

class Main {
    constructor() {
        this.initEvent();
    }

    initEvent() {
        this.render();
        this.windowListenEvents();
        this.carouselInit();
    }

    render() {
        this.$slick = $('.tm-slick')
        this.$indexImage = $('.index-image-wrapper')
    }

    windowListenEvents() {
        let me = this;
        me.isPhone = false;
        $(window).on('resize', _.debounce(e => {
            let width = document.body.clientWidth;
            console.log(width);
            if (width < 660 && !me.isPhone) {
                me.loadCarouselImage(340, 'smpic')
                me.isPhone = true;
            } else if (width > 660 && me.isPhone) {
                me.loadCarouselImage(340, 'bgpic')
                me.isPhone = false;
            }
        }, 150))

        $(document).ready(e => {
            let width = document.body.clientWidth;
            if (width < 660) {
                me.isPhone = true;
                me.loadCarouselImage(340, 'smpic')
            } else {
                me.isPhone = false;
                me.loadCarouselImage(340, 'bgpic')
            }
        })
    }

    carouselInit() {
        this.$slick.slick({
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            speed: 300,
        });
    }

    loadCarouselImage(carouselHeight, imageAttr) {
        this.$indexImage.css("height", carouselHeight)
        this.$indexImage.children('.image-box').each((i, el) => {
            $(el).css({
                "background-image": $(el).data(imageAttr)
            })
        })
    }
}

new Main();

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
        this.carouselInit();
    }

    render() {
        this.$slick = $('.tm-slick')
        this.$indexImage = $('.index-image-wrapper')
    }

    carouselInit() {
        this.$slick.slick({
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            speed: 300,
        });
    }

}

new Main();

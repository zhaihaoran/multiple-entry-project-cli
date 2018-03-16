import '@scss/hope.scss';
import Common from '@lib/common'
import 'slick-carousel'

class Main {
    constructor() {
        this.initEvent();
    }

    initEvent() {
        new Common();
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

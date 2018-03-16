import '@scss/hope.scss';
import Common from '@lib/common'
import '@lib/float_carousel'

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

    }

    carouselInit() {
        this.$carousel = $('#carousel')
        this.$carousel.floatingCarousel({
            autoScroll : true,
            autoScrollSpeed : 20000,
        });
    }

}

new Main();

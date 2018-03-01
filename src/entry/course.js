import _ from 'lodash'
import '@scss/course.scss';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

class Course {
    constructor() {
        this.initEvent();
    }

    initEvent() {
        this.$indexImage = $('.index-image-wrapper')
        this.windowListenEvents();
    }

    windowListenEvents() {
        let me = this;
        me.isPhone = false;
        $(window).on('resize', _.debounce(e => {
            let width = document.body.clientWidth;
            console.log(width);
            if (width < 660 && !me.isPhone) {
                me.loadCarouselImage(270, 'smpic')
                me.isPhone = true;
            } else if (width > 660 && me.isPhone) {
                me.loadCarouselImage(500, 'bgpic')
                me.isPhone = false;
            }
        }, 150))

        $(document).ready(e => {
            let width = document.body.clientWidth;
            if (width < 660) {
                me.isPhone = true;
                me.loadCarouselImage(270, 'smpic')
            } else {
                me.isPhone = false;
                me.loadCarouselImage(500, 'bgpic')
            }
        })

        $(window).on('scroll', _.throttle(e => {
            let height = $(window).scrollTop();
            console.log(height);
        }, 500))
    }

    loadCarouselImage(carouselHeight, imageAttr) {
        this.$indexImage.css("height", carouselHeight)
        this.$indexImage.children('a').each((i, el) => {
            $(el).css({
                "background-image": $(el).data(imageAttr)
            })
        })
    }
}

new Course()

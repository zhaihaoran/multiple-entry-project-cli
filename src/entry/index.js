// materialize
import M from 'materialize-css'
import 'materialize-css/sass/materialize.scss'
import _ from 'lodash'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import '@scss/index.scss';
//
import '@lib/jquery.scrollfire'
import '@lib/animateNumber'

class Index {

    constructor() {
        this.initEvent();
    }

    initEvent() {
        this.declareVar()
        this.pluginsInit()
        this.videoPlay()

        var elem1 = document.querySelector('.fixed-action-btn');
        $('.tooltip').tooltip();
        M.FloatingActionButton.init(elem1);
        this.windowListenEvents();
    }

    declareVar() {
        this.$animateNumber = $('.animateNumber');
        this.$carousel = $('.carousel.carousel-slider');
        this.$videoPlay = $('.in-mask');
        this.$header = $('nav.tum-header');
    }

    videoPlay() {
        let me = this;
        this.$videoPlay.on('click', e => {
            this.$videoPlay.addClass('hide').siblings('.index-mask').addClass('hide');
            $('.video-player').removeClass('hide');
            $('.video-player').find('#video').css('height', $('.index-video').height())
            me.videoPlayer.play();
        })
        const box = 3;
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
    /**
     * loadCarouselImage
     *
     * @param {any} carouselHeight 轮播图 固定高度
     * @param {any} imageAttr 图片data属性
     * @memberof Index
     */
    loadCarouselImage(carouselHeight, imageAttr) {
        this.$carousel.css("height", carouselHeight)
        this.$carousel.children('a').each((i, el) => {
            $(el).css({
                "background-image": $(el).data(imageAttr)
            })
        })
    }

    pluginsInit() {

        this.$animateNumber.each((i, el) => {
            const aa = $(el).data('number');
            $(el).prop('number', 0).animateNumber({
                number: aa,
                easing: 'easeOut'
            }, 3000)
        })

        M.Carousel.init(this.$carousel, {
            fullWidth: true,
            indicators: true,
            duration: 300
        })
        this.videoPlayer = videojs('video', {
            controls: true,
            autoplay: false,
            preload: 'auto'
        });

    }
}

new Index();

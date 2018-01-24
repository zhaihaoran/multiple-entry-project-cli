import $ from 'jquery';
import '@lib/animateNumber'
// materialize
import M from 'materialize-css'
import 'materialize-css/sass/materialize.scss'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import '@scss/index.scss';
//
import '@lib/jquery.scrollfire'

class Index {

    constructor() {
        this.initEvent();
    }

    initEvent() {
        this.declareVar()
        this.pluginsInit()
        this.videoPlay()

        // var onScroll = (timestamp) => {
        //     console.log("11");
        //     var scrollTop = $(document).scrollTop()
        //     console.log(scrollTop);
        //     console.log(this);
        //     window.requestAnimationFrame(onScroll)
        // }

        // window.requestAnimationFrame(onScroll)
    }

    declareVar() {
        this.$animateNumber = $('.animateNumber');
        this.$carousel = $('.carousel.carousel-slider');
        this.$videoPlay = $('#videoPlay');
        this.$header = $('nav.tum-header');
    }

    videoPlay() {
        let that = this;
        this.$videoPlay.on('click', e => {
            this.$videoPlay.addClass('hide').siblings('.index-mask').addClass('hide');
            that.videoPlayer.play();
        })
        const box = 3;
    }

    pluginsInit() {

        this.$animateNumber.each((i,el)=>{
            const aa = $(el).data('number');
            $(el).prop('number', 0).animateNumber({
                number: aa,
                easing: 'easeOut'
            }, 3000)
        })

        M.Carousel.init(this.$carousel,{
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

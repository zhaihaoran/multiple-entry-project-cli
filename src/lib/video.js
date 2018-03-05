import $ from 'jquery'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'


const default_config = {
    dom: '#tm_video',
}


class Tm_Video {
    constructor(config) {
        this.config = $.extend(default_config, config || {})
        // variable
        this.render();
        this.init();
    }

    render() {
        this.$video = $(this.config.dom);
        this.$video_info = $('.tm_video_info');
        this.$video_share = $('.tm_video_share');
        this.$video_image = $('.tm_video_image');
    }

    init() {

        this._video = videojs(this.config.dom, {
            controls: true,
            autoplay: false,
            preload: 'auto'
        })

        // 创建遮罩
        this.$mask = $('<div class="vd-mask">');

        // videojs style fixed
        this.$video.parent().after(this.$mask).addClass('vjs-has-started')

        this.videoTitle();
        this.shareSide();
    }

    /**
     * 增加视频标题及悬浮栏
     *
     * @memberof Tm_Video
     */
    videoTitle() {
        let me = this

        this._video.on('play', function() {
            me.$video_info.addClass('d-none');
            me.$video_share.addClass('d-none');
            me.$video_image.addClass('d-none');
            me.$mask.removeClass('d-block')
        })
        this._video.on('pause', function() {
            me.$video_info.removeClass('d-none');
            me.$video_share.removeClass('d-none');
            me.$mask.addClass('d-block')
        })
        me.$video_image.on('click',function(){
            me._video.trigger('play')
            me._video.play();
        })
    }

    /**
     *
     * 侧边栏分享
     * @memberof Tm_Video
     */
    shareSide() {
        this.$shareBtn = $('#share');
        const box_id = this.$shareBtn.data('target')
        console.log(box_id);
        const $box = $(box_id);

        this.$shareBtn.on('click',function(){
            $box.toggleClass('d-none');
        })
    }

}

export default Tm_Video

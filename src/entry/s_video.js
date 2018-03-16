import Common from '@lib/common'

import '@scss/m_common.scss'
import Tm_Video from '@lib/video'
class Main {
    constructor() {
        this.initEvent();
    }
    initEvent() {
        new Tm_Video();
        new Common();
        this.share();
    }

    share() {
        const me = this;
        this.$shareTrigger = $('.share-btn');
        this.$shareTrigger.on('click', e => {
            var id = $(e.target).data('target');
            me.$target = $(id);
            if (me.$target.length < 1) {
                return false;
            }

            me.$target.addClass('init');
            me.bindEvent();
            me.modalInit();
        })
    }

    bindEvent() {
        var me = this;
        const $box = me.$target.find('.mobile-share-box');
        const $closebtn = me.$target.find('[data-modal="close"]');

        me.$target.on('click', e => {
            console.log(e.target);
            // 必须是dom元素
            if ($.contains($box[0], e.target) && e.target !== $closebtn[0]) {
                return false;
            } else {
                me.modalClose();
            }
        })
    }


    modalClose() {
        var me = this;

        me.$target.css('display', 'none');
        me.$target.find('.mobile-share-box').animate({
            "bottom": "-140px"
        }, 300, "linear")
        me.$target.off();
    }

    modalInit() {
        var me = this;
        me.$target.css('display', 'block');

        me.$target.find('.mobile-share-box').animate({
            "bottom": "0"
        }, 300, "linear")

    }

}

new Main();

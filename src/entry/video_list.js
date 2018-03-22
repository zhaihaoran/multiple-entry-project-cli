import Common from '@lib/common'
import '@scss/video_list.scss';

import '@lib/pagination.js'

const attrs = {
    "add-time": "3",
    "type": "2"
}


class VideoList {

    constructor() {
        this.initEvent();
    }

    getUrlParam(url) {
        let array = url.split('/');
        let obj = {};

        for (var i = 0; i < array.length; i += 2) {
            obj[array[i]] = array[i + 1]
        }

        return obj
    }

    initEvent() {
        let me = this;
        new Common();
        this.render();

        $(window).ready(function() {
            me.params = window.location.pathname.replace(/\/$/, '');
            me.concatButtonhref(me.params);
            me.renderFormStyle(me.params);
            me.initPagination();
        })
    }

    initPagination() {
        let me = this;
        const total = 100;
        const RegAry = me.params.match(/\/page\/\d/);
        let current = !!RegAry ? +RegAry[0].replace(/\/page\//, '') : 1;
        let link_to = me.params.replace(/\/page\/\d/, '');
        console.log(current);
        $('#pagination').pagination(total, {
            num_edge_entries: 2,
            current_page: current,
            num_display_entries: 4,
            items_per_page: 20,
            link_to: link_to + "/page/__id__",
            callback: function(a) {

            }
        })
    }

    render() {
        const me = this;

        this.$sr_wrapper = $('.sr-wrapper')
        this.$form = $('#video_search', this.$sr_wrapper);
        this.$v_type = $('[name="type"]', this.$form);
        this.$v_duration = $('[name="duration"]', this.$form);
        this.$v_time = $('[name="add-time"]', this.$form);
        this.$v_text = $('[name="text"]', this.$form);

        this.$button = $('.sr-button', this.$sr_wrapper)

        this.$form.on('submit', function(e) {
            e.preventDefault();

            // 防止参数重复
            const v_duration = me.$v_duration.val();
            const v_type = me.$v_type.val();
            const v_time = me.$v_time.val();
            const v_text = me.$v_text.val();
            console.log(v_duration, v_type, v_time, v_text);
            const route = `/type/${v_type}/duration/${v_duration}/add-time/${v_time}/text/${v_text}`;
            // 将原先数据清空掉，重新拼接
            const root = me.params.replace(/\/type\S+$/, '')
            me.params += route;
            window.location.href = root + route;
        })
    }

    concatButtonhref(url) {
        let me = this;
        // 过滤原先地址上的order-by属性，真是麻烦。。。。
        url = url.replace(/\/video-list/, '').replace(/\/order-by\/\d/g, '')
        console.log(url);
        this.$button.each((index, el) => {
            const href = $(el).attr('href') + url;
            $(el).attr('href', href)
        })
    }

    renderFormStyle(url) {
        url = url.replace(/\/video-list\//, '')
        const str = "order-by/1/type/2/duration/1/add-time/2/text/12"
        const obj = this.getUrlParam(url);
        console.log(obj);
        this.$button.eq(obj['order-by']).addClass('active').siblings().removeClass('active')
        this.$v_text.val(obj['text']).trigger('change');
        this.$v_type.val(obj['type'] || 0).trigger('change');
        this.$v_time.val(obj['add-time'] || 0).trigger('change');
        this.$v_duration.val(obj['duration'] || 0).trigger('change');
    }

}

new VideoList()

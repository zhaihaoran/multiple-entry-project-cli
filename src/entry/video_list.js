import Common from '@lib/common'
import '@scss/video_list.scss';

import '@lib/pagination.js'

const vSearchParams = {
    "order-by": 1,
    "type": 1,
    "duration": 1,
    "add-time": 1,
    "text": "",
}

const vPaging = {
    "page": 1,
    "totalPage": 111
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

    ObjToUrl(obj) {
        let str = [];
        for (let i in obj) {
            str.push(`${i}/${obj[i]}/`)
        }
        return str.join('')
    }

    initEvent() {
        let me = this;
        new Common();
        this.render();

        $(window).ready(function() {
            me.route = me.ObjToUrl(vSearchParams)
            console.log(me.route, 'me.route');
            me.concatButtonhref();
            me.renderFormStyle();
            me.bindEvent();
            me.initPagination();
        })
    }

    initPagination() {
        let me = this;

        $('#pagination').pagination(vPaging.totalPage, {
            num_edge_entries: 2,
            current_page: vPaging.page,
            num_display_entries: 4,
            items_per_page: 20,
            link_to: '/video-list/' + me.route.replace(/\/page\/\d/, '') + "/page/__id__",
            callback: function(a) {}
        })
    }

    bindEvent() {
        let me = this;
        // change 事件
        this.$v_type.on('change', function() {
            me.changeValue('type', this);
        })
        this.$v_time.on('change', function() {
            me.changeValue('add-time', this);
        })
        this.$v_duration.on('change', function() {
            me.changeValue('duration', this);
        })
        // text
        this.$form.on('submit', function(e) {
            e.preventDefault();
            me.changeValue('text', me.$v_text[0]);
        })
        this.$sr_icon.on('click', function() {
            me.$form.trigger('submit')
        })
    }

    render() {
        const me = this;

        this.$sr_wrapper = $('.sr-wrapper')
        this.$button = $('.sr-button', this.$sr_wrapper)
        this.$v_type = $('[name="type"]', this.$sr_wrapper);
        this.$v_duration = $('[name="duration"]', this.$sr_wrapper);
        this.$v_time = $('[name="add-time"]', this.$sr_wrapper);

        this.$form = $('#video_search', this.$sr_wrapper);
        this.$v_text = $('[name="text"]', this.$form);
        this.$sr_icon = $('.search-icon', this.$form);

    }

    changeValue(attr, context) {
        let me = this;
        vSearchParams[attr] = $(context).val();
        const url = me.ObjToUrl(vSearchParams);
        window.location.href = '/video-list/' + url;
    }

    concatButtonhref() {
        let me = this;

        const str = me.route.replace(/order-by\/\d\//, '');

        this.$button.each((index, el) => {
            const href = $(el).attr('href') + '/' + str;
            $(el).attr('href', href)
        })
    }

    renderFormStyle() {
        this.$button.eq(vSearchParams["order-by"]).addClass('active').siblings().removeClass('active')
        this.$v_text.val(vSearchParams["text"]).trigger('change');
        this.$v_type.val(vSearchParams["type"]).trigger('change');
        this.$v_time.val(vSearchParams["add-time"]).trigger('change');
        this.$v_duration.val(vSearchParams["duration"]).trigger('change');
    }

}

new VideoList()

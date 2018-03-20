import $ from 'jquery'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import '../assets/icon/iconfont.css';


import Sign from '@lib/sign'

const setting = {
    headerDom: (config) => [
        `<img data-toggle="dropdown" data-trigger="hover" src="${config.priewUrl}" class="img-fluid" alt="avatar">`,
        '<div class="dropdown-menu dropdown-menu-right">',
        `<a class="dropdown-item">${config.name}</a>`,
        `<a class="dropdown-item" href="#">管理中心</a>`,
        `<a class="dropdown-item" href="#">个人主页</a>`,
        `<a class="dropdown-item" id="signout" href="#">退出</a>`,
        `</div>`
    ].join('')
}

class Common {
    constructor(config) {
        this.config = $.extend(setting, config || {})

        // variable
        this.render();
        this.init();
    }

    render() {
        this.$images = $('.img-background');
        this.$headerAvatar = $('nav .tm-sign');
    }

    init() {
        this.modalFixed();
        $(window).on('load', e => {
            this.setImageHeight();
            this.rendorHeader();
            new Sign();
        })
        $(window).on('resize', e => {
            this.setImageHeight();
        })
    }

    setImageHeight() {
        this.$images.each((i, el) => {
            const height = $(el).height()
            $(el).parent().css('min-height', height);
        })
    }

    modalFixed() {
        const $modals = $('.modal');
        $modals.on('show.bs.modal', function(e) {
            $modals.modal('hide');
        })
    }

    rendorHeader() {
        const {
            isLogin
        } = sessionStorage;
        const data = {
            name: "哇哈哈",
            priewUrl: "/static/image/logo/tsinghua.png"
        }
        if (isLogin) {
            this.$headerAvatar.html(this.config.headerDom(data))
        }
    }
}

export default Common

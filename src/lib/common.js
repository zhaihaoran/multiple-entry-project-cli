import $ from 'jquery'
// Bootstrap
import '@lib/bootstrap.min'
import '@scss/bootstrap.min.css'

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

const headerItem = {
    "/": 0,
    "/video": 1,
    "/video-list": 1,
    "/school": 2,
    "/school-join": 2,
    "/speaker": 3,
    "/speaker-join": 3,
    "/about": 4,
    "/donate": 5,
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
        this.$header = $('nav.tum-header')
        this.$headerAvatar = $('.tm-sign',this.$header);
        this.$headerItem = $('.tm-list>li.nav-item',this.$header);
    }

    init() {
        this.modalFixed();
        $(window).on('load', e => {
            this.setImageHeight();
            this.setHeaderActive();
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

    setHeaderActive() {
        const route = window.location.pathname.replace(/html\//,"").replace(/.html$/,"")
        const index = headerItem[route]
        this.$headerItem.eq(index).addClass('active').siblings().removeClass('active')
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

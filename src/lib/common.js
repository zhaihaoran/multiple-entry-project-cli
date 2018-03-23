// Bootstrap
import '@lib/bootstrap.min'
import '@scss/bootstrap.min.css'

import '../assets/icon/iconfont.css';

import Sign from '@lib/sign'

const setting = {
    headerDom: ({
        priewUrl,
        name
    }) => [
        `<img data-toggle="dropdown" data-trigger="hover" src="${priewUrl}" class="img-fluid" alt="avatar">`,
        '<div class="dropdown-menu dropdown-menu-right">',
        `<a class="dropdown-item">${name}</a>`,
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
        this.$headerAvatar = $('.tm-sign', this.$header);
        this.$headerItem = $('.tm-list>li.nav-item', this.$header);
    }

    init() {
        this.modalFixed();
        $(window).on('load', e => {
            this.getUserState();
            this.setImageHeight();
            this.setHeaderActive();

        })
        $(window).on('resize', e => {
            this.setImageHeight();
        })

        this.userConfig = {
            "isLogin": 1,
            "userType": 1,
            "profilePhotoUrl": "http://domain.com/src/abc.jpg",
            "account": 123,
            "suspend": 0,
            "suspendDesc": "",
        }
    }

    getUserState() {
        let me = this;
        // ajax
        $.ajax({
            url: '/api/common/?act=getUserLogin',
        }).then(function(string) {
            const data = JSON.parse(string);
            // 后面覆盖前面的
            me.userConfig = Object.assign(me.userConfig, data.data)
            me.renderHeader();
        })
    }

    setImageHeight() {
        this.$images.each((i, el) => {
            const height = $(el).height()
            $(el).parent().css('min-height', height);
        })
    }

    setHeaderActive() {
        const route = window.location.pathname.replace(/html\//, "").replace(/.html$/, "")
        const index = headerItem[route]
        this.$headerItem.eq(index).addClass('active').siblings().removeClass('active')
    }

    modalFixed() {
        const $modals = $('.modal');
        $modals.on('show.bs.modal', function(e) {
            $modals.modal('hide');
        })
    }

    renderHeader() {
        let me = this;
        if (me.userConfig.isLogin) {
            this.$headerAvatar.html(this.config.headerDom(me.userConfig))
        }
        me.SignModule = new Sign();
    }
}

export default Common

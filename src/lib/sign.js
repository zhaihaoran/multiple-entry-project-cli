import $ from 'jquery'

const setting = {

}

import Lib from '@lib/lib'
console.log(Lib);

class Sign {
    constructor(config) {
        this.config = $.extend(setting, config || {})
        // variable
        this.render();
        this.init();
    }

    render() {
        this.$loginForm = $('form.login-form')
        this.$registerForm = $('form.register-form')
        this.$signoutBtn = $('#signout');
        // 发送短信验证码按钮
        this.$verifyButton = $('.msg-btn', this.$registerForm);
    }

    init() {
        let me = this;
        this.$registerForm.on('submit', function(event) {
            event.preventDefault();
            // 通过校验
            if (this.checkValidity() !== false && me.checkSamePassword(this)) {
                // 发送ajax 登陆请求
                me.register(this);
            } else {
                event.stopPropagation();
            }
            // 校验样式 init
            this.classList.add('was-validated');
        })


        this.$loginForm.on('submit', function(event) {
            event.preventDefault();
            // 未通过校验
            if (this.checkValidity() === false) {
                event.stopPropagation();
            } else {
                // 发送ajax 登陆请求

                const form = {
                    input: $(this).find([])
                }
                me.login(this);
            }
            // 校验样式 init
            this.classList.add('was-validated');
        })

        this.$verifyButton.on('click', this, me.sendVerifyCode)
        this.$signoutBtn.on('click', me.signout)
    }
    // 发送短信验证码
    sendVerifyCode(context) {
        let me = context.data;
        const mobile = $(this).parents('form').find('[name="mobile"]').val();
        const cfg = {
            mobile
        }
        if (me.isPhoneValid(mobile)) {
            // ajax
            $.ajax({
                url: Lib.api.sendVerifyCode,
                type: 'post',
                data: cfg,
                dataType: 'json',
            }).then(function(data) {
                me.setCodeCounter();
            })
        }
    }

    setCodeCounter(time = 300) {
        var me = this;
        if (time > 0) {
            me.$verifyButton.prop('disabled', true).addClass('disabled').text('剩余' + time + '秒');
            setTimeout(function() {
                me.setCodeCounter(time - 1);
            }, 1000);
        } else {
            me.$verifyButton.prop('disabled', false).removeClass('disabled').text('短信验证码');
        }
    }

    isPhoneValid(phone) {
        return /\d{6,15}/.test(phone)
    }

    JugeId(context) {

    }

    login(context) {
        // speaker
        let url = ""
        if ($(context).attr('class').indexOf('speaker') > 0) {
            url = Lib.api.speakerLogin
        } else {
            url = Lib.api.schoolLogin
        }

        const data = $(context).serialize();
        console.log(data, 'formdata');

        // ajax
        $.ajax({
            url: url,
            data: data,
            type: 'post',
            dataType: 'json',
        }).then(function(data) {
            console.log(data, "code");
            console.log('登陆成功')
        })

    }
    register(context) {
        // speaker
        let url = ""
        if ($(context).attr('class').indexOf('speaker') > 0) {
            url = Lib.api.speakerRegister
        } else {
            url = Lib.api.schoolRegister
        }

        const data = $(context).serialize();
        console.log(data, 'formdata');

        // ajax
        $.ajax({
            url: url,
            data: data,
            type: 'post',
            dataType: 'json',
        }).then(function(data) {
            console.log(data, "code");
            // 注册成功， 弹出成功窗口
            $('#register_success').modal('show')
        })
    }

    signout() {
        $.ajax({
            url: Lib.api.logout
        }).then(data => {
            window.location.reload();
        })
    }

    checkSamePassword(context) {
        const $password = $(context).find('[name="password"]');
        const $confirm = $(context).find('.confirm');

        if ($password.val() === $confirm.find('input').val()) {
            $confirm.addClass('right').removeClass('error');
            return true;
        } else {
            $confirm.addClass('error').removeClass('right');
            return false
        }
    }


}

export default Sign

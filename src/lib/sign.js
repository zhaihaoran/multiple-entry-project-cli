import $ from 'jquery'

const setting = {

}

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
    }

    init() {
        let me = this;
        this.$registerForm.on('submit',function(event){
            event.preventDefault();
            // 通过校验
            if (this.checkValidity() !== false && me.checkSamePassword(this) ) {
                // 发送ajax 登陆请求
                me.register();
            } else {
                event.stopPropagation();
            }
            // 校验样式 init
            this.classList.add('was-validated');
        })

        this.$loginForm.on('submit',function(event){
            event.preventDefault();
            // 未通过校验
            if (this.checkValidity() === false) {
                event.stopPropagation();
            } else {
                // 发送ajax 登陆请求

                const form = {
                    input: $(this).find([])
                }
                me.login();
            }
            // 校验样式 init
            this.classList.add('was-validated');
        })

        this.$signoutBtn.on('click',me.signout)
    }

    login() {
        var status = 1;

        // 登陆成功,刷新
        if (status === 1) {
            sessionStorage.isLogin = 1;
            window.location.reload();
            console.log('登陆成功')
        }
    }
    register() {
        var status = 1;
        // 注册成功， 弹出成功窗口
        if (status === 1) {
            $('#register_success').modal('show')
            sessionStorage.isLogin = 1;
        }
    }

    signout() {
        sessionStorage.isLogin = ""
        window.location.reload();
    }

    checkSamePassword(form) {
        console.log(form);
        const $password = $(form).find('[name="password"]');
        const $confirm = $(form).find('.confirm');
        if ($password.val() === $confirm.find('input').val()) {
            $confirm.addClass('right');
            return true;
        } else {
            $confirm.addClass('error');
            return false
        }
    }


}

export default Sign

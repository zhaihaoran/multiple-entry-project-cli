import $ from 'jquery'


const default_config = {

}

class Common {
    constructor(config) {
        this.config = $.extend(default_config, config || {})
        // variable
        this.render();
        this.init();
    }

    render() {

    }

    init() {
        this.modalFixed();
        this.validator();
    }

    /**
     * validator 插件初始化 和定制
     *
     * @memberof Common
     */
    validator() {
        window.addEventListener('load', function() {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener('submit', function(event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        }, false);
    }

    modalFixed() {
        const $modals = $('.modal');
        $modals.on('show.bs.modal', function(e) {
            $modals.modal('hide');
        })
    }
}

export default Common

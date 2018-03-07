import $ from 'jquery'

class Sign {
    constructor(config) {
        this.config = $.extend(default_config, config || {})
        // variable
        this.render();
        this.init();
    }

    init() {

    }

    /**
     * 校验
     *
     * @memberof Sign
     */
    CheckSame() {

    }


}

export default Sign

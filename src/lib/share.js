import $ from 'jquery'

const default_config = {
    dom: '#tm_video',
}

class Share {

    constructor(config) {
        this.config = $.extend(default_config, config || {});

        this.init(config);
    }

    init() {

    }

    share() {

    }
}

export default Share

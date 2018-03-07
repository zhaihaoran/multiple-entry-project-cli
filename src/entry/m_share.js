import Common from '@lib/common'

import '@scss/m_common.scss'
import Tm_Video from '@lib/video'
class Main {
    constructor() {
        this.initEvent();
    }
    initEvent() {
        new Tm_Video();
        new Common();
    }
}

new Main();

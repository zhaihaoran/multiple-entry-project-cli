const state = {
    sidebar: true // 侧边栏状态
}

// 模块的mutations 、 actions、getter 默认注册在全局命名空间的
const mutations = {
    toggle(state) {
        //在这里改变state中的数据
        state.sidebar = !state.sidebar
    }
}

const actions = {
    toggle({commit}) {
        //在这里改变state中的数据
        commit('toggle')
    }
}

export default {
    state,
    mutations,
    actions
};

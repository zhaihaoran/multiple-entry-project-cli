<template>
    <el-header height="70px" class="admin-header">
        <div class="logo">
            <img :src="logo" alt="logo">
        </div>
    </el-header>
</template>

<script>
import logo from '@image/logo/logo_white.png';
// action 可以执行异步操作、mutations只能执行同步操作
// actions 提交的是mutation，不直接变更状态，同时通过dispatch分发
import { mapState, mapMutations } from 'vuex';

export default {
    // data 在实例里可以用对象，但在组件中必须用函数形式
    data() {
        return {
            logo
        };
    },
    methods: {
        ...mapMutations(['toggle'])
    },
    // 方便 属性使用 mapState
    computed: mapState({
        sidebar: state => state.common.sidebar
    })
};
</script>

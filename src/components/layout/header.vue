<template>
    <el-header class="admin-header">
        <button @click="toggle">切换</button>
        <p>{{sidebar}}</p>
    </el-header>
</template>

<script>
// action 可以执行异步操作、mutations只能执行同步操作
// actions 提交的是mutation，不直接变更状态，同时通过dispatch分发
import { mapState, mapMutations } from 'vuex';
export default {
    methods: {
        ...mapMutations(['toggle'])
    },
    // 方便 属性使用 mapState
    computed: mapState({
        sidebar: state => state.common.sidebar
    })
};
</script>

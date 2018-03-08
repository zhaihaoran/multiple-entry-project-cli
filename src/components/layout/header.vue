<template>
    <el-header height="70px" class="admin-header">
        <div class="logo">
            <img :src="logo" alt="logo">
        </div>
        <ul class="header-right">
            <li class="nav-header-item">
                <router-link to="/admin" >管理中心</router-link>
            </li>
            <li class="nav-header-item">
                <router-link to="/" >网站首页</router-link>
            </li>
            <li class="nav-header-item">
                <router-link to="/" >帮助</router-link>
            </li>
            <!-- 已登录 -->
            <li v-if="loginState === 1" class="nav-header-item user-logo">
                <img :src="user_logo" alt="user">
            </li>
            <!-- 未登录 -->
            <li v-if="loginState === 0" class="nav-header-item"  >
                <a href="##" @click="login()" >请登陆</a>
            </li>
        </ul>
    </el-header>
</template>

<script>
import logo from '@image/logo/logo_white.png';
import qinghua from '@image/logo/tsinghua.png';
// action 可以执行异步操作、mutations只能执行同步操作
// actions 提交的是mutation，不直接变更状态，同时通过dispatch分发
import { mapState, mapMutations } from 'vuex';

export default {
    // data 在实例里可以用对象，但在组件中必须用函数形式
    data() {
        return {
            logo,
            user_logo: qinghua,
            loginState: 0
        };
    },
    methods: {
        ...mapMutations(['toggle']),
        login() {
            this.$data.loginState = 1;
            console.log(this.$data.loginState);
        }
    },
    // 方便 属性使用 mapState
    computed: mapState({
        sidebar: state => state.common.sidebar
    })
};
</script>

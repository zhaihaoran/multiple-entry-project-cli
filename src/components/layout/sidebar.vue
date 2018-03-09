<template>
   <el-aside class="admin-aside" width="200px">
       <!-- .sync 用于属性的双向绑定 -->
        <el-menu :default-active.sync="path" :default-openeds="['/invite']" class="admin-sider-menu"
         :collapse="SidebarState" >
            <router-link to="/invite/send" >
                <el-menu-item class="sider-menu-item" index="/invite/send">
                    <i class="el-icon-phone"></i>发起邀约
                </el-menu-item>
            </router-link>
            <el-submenu index="/invite">
                <template slot="title"><i class="el-icon-menu"></i><span slot="title">邀约信息</span></template>
                <router-link to="/offer_send" >
                    <el-menu-item class="sider-menu-item" index="/offer_send">
                        已发起邀约
                    </el-menu-item>
                </router-link>
                <router-link to="/offer_over" >
                    <el-menu-item class="sider-menu-item" index="/offer_over">
                        收到的邀约
                    </el-menu-item>
                </router-link>
                <el-menu-item class="sider-menu-item" index="2-3">待演讲</el-menu-item>
                <el-menu-item class="sider-menu-item" index="2-4">已完成</el-menu-item>
                <el-menu-item class="sider-menu-item" index="2-5">被拒绝</el-menu-item>
                <el-menu-item class="sider-menu-item" index="2-6">我拒绝</el-menu-item>
                <el-menu-item class="sider-menu-item" index="2-7">全部邀约</el-menu-item>
            </el-submenu>
            <router-link to="/setting" >
                <el-menu-item class="sider-menu-item" index="/setting">
                    <i class="el-icon-setting"></i>主页设置
                </el-menu-item>
            </router-link>
            <router-link v-if="checkState === 1" to="/certification/checked" >
                <el-menu-item class="sider-menu-item" index="/certification/checked">
                    <i class="el-icon-message"></i>学校资料(已审核)
                </el-menu-item>
            </router-link>
            <router-link v-if="checkState === 1" to="/certification/check" >
                <el-menu-item class="sider-menu-item" index="/certification/check">
                    <i class="el-icon-message"></i>学校资料(未审核)
                </el-menu-item>
            </router-link>
        </el-menu>
    </el-aside>
</template>

<script>
// action 可以执行异步操作、mutations只能执行同步操作
// actions 提交的是mutation，不直接变更状态，同时通过dispatch分发
import { mapState } from 'vuex';

export default {
    data() {
        return {
            checkState: 1,
            path: this.$route.path
        };
    },
    // 可以将模块的空间名称字符串作为第一个参数传递给函数
    computed: mapState({
        SidebarState: state => state.common.sidebar
    }),
    methods: {}
};
</script>

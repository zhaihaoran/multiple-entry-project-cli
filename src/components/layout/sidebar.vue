<template>
   <el-aside class="admin-aside" >
        <el-menu :default-openeds="['1', '3']" :collapse="SidebarState" >
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i> <span slot="title">导航一</span> </template>
                    <router-link to="/button" >
                <el-menu-item index="2-1">
                    button
                </el-menu-item>
                    </router-link>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-menu"></i><span slot="title">导航二</span></template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title"><i class="el-icon-menu"></i><span slot="title">导航三</span></template>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
                <el-menu-item index="3-3">选项3</el-menu-item>
            </el-submenu>
        </el-menu>
    </el-aside>
</template>

<script>
// action 可以执行异步操作、mutations只能执行同步操作
// actions 提交的是mutation，不直接变更状态，同时通过dispatch分发
import { mapState } from 'vuex';

export default {
    // 可以将模块的空间名称字符串作为第一个参数传递给函数
    computed: mapState({
        SidebarState: state => state.common.sidebar
    })
};
</script>

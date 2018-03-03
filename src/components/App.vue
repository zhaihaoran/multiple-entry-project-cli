<template>
<el-container>
    <el-header class="admin-header">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
    </el-header>
    <el-container class="admin-context" >
        <el-aside class="admin-aside" >
            <el-menu :default-openeds="['1', '3']" @open="handleOpen" @close="handleClose" :collapse="isCollapse" >
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
        <el-main>
            <router-view/>
        </el-main>
    </el-container>
    <el-footer class="admin-footer" >footer</el-footer>
</el-container>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            isCollapse: true
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
};
</script>

<style>
body {
    margin: 0;
    padding: 0;
}
.admin-context {
    min-height: calc(100vh - 120px);
}
.admin-aside {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}
.admin-header {
    background: green;
}
.admin-footer {
    background: blue;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>

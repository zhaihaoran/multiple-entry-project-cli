<template>
<el-container>
    <Header />
    <el-container class="admin-context" >
        <Sidebar />
        <el-main>
            <router-view/>
        </el-main>
    </el-container>
    <el-footer class="admin-footer" >footer</el-footer>
</el-container>
</template>

<script>
import Sidebar from '@layout/sidebar.vue';
import Header from '@layout/header.vue';
export default {
    name: 'App',
    components: { Sidebar, Header }
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

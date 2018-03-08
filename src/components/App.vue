<template>
    <el-container class="admin-layout">
        <Header />
        <el-container class="admin-context" >
            <Sidebar />
            <el-main class="admin-wrapper" >
                <router-view/>
            </el-main>
        </el-container>
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

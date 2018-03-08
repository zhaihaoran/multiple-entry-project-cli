<template>
    <div class="tm-card">
        <el-radio-group v-model="search" class="radio-group" >
            <el-radio-button label="left">综合排序</el-radio-button>
            <el-radio-button label="right">最近演讲</el-radio-button>
            <el-radio-button label="top">最近邀约</el-radio-button>
        </el-radio-group>
        <div class="search-input">
            <el-input
                placeholder="请输入内容"
                suffix-icon="el-icon-search"
                v-model="input">
            </el-input>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            search: 'left',
            input: 'zhaihaoran'
        };
    }
};
</script>

<style>
.radio-group {
    color: fff;
}

.search-input {
    display: inline-block;
    margin-left: 15px;
}
.el-input {
    width: 330px;
}
</style>

<template>
    <div>
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
        <div class="tm-card">
            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="地址">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            search: 'left',
            input: 'zhaihaoran',
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }
            ]
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



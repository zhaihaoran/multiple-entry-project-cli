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
                <el-table-column
                    label="进展">
                    <template slot-scope="scope">
                        <a href="#" v-popover:popover v-if="scope.row.progress === 1" class="tm-a" >待上课</a>
                        <a href="#" v-if="scope.row.progress === 2" class="tm-a" >待开课通知</a>
                        <a href="#" v-if="scope.row.progress === 3" class="tm-a" >待课后反馈提交</a>
                        <a href="#" v-if="scope.row.progress === 4" class="tm-a" >完成</a>
                        <el-popover class="offer-step" ref="popover" placement="right" trigger="click">
                            <el-steps direction="vertical" class="admin-step" :active="2">
                                <el-step title="待开课通知"></el-step>
                                <el-step title="待上课"></el-step>
                                <el-step title="待课后反馈提交"></el-step>
                                <el-step title="待课后反馈确认"></el-step>
                                <el-step title="完成"></el-step>
                            </el-steps>
                        </el-popover>
                    </template>
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
                    address: '上海市普陀区金沙江路 1518 弄',
                    progress: 4
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄',
                    progress: 1
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄',
                    progress: 2
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄',
                    progress: 3
                }
            ],
            gridData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }
            ]
        };
    },
    methods: {}
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
.admin-step {
    height: 200px;
}
</style>



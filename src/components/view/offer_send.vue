<template>
    <div>
        <el-table :data="tableData" border class="tm-table" >
            <el-table-column
                prop="date"
                align="center"
                label="日期">
            </el-table-column>
            <el-table-column
                prop="name"
                align="center"
                label="姓名">
            </el-table-column>
            <el-table-column
                prop="address"
                align="center"
                label="地址">
            </el-table-column>
            <el-table-column label="消息" align="center" >
                <template slot-scope="scope">
                    <el-button type="text" @click="convertion=true" class="tm-a" >对话<span>2</span></el-button>
                </template>
            </el-table-column>
            <el-table-column align="center" label="操作">
                <template slot-scope="scope">
                    <el-button v-if="scope.row.state === 1" size="mini" @click="handleEdit(scope.$index,scope.row)" >修改</el-button>
                    <el-button v-if="scope.row.state === 0" size="mini" type="danger" class="tm-btn" @click="handleOk(scope.$index,scope.row)" >同意</el-button>
                    <el-button size="mini" class="tm-btn-border" @click="handleDelete(scope.$index,scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog
            title="提示"
            :visible.sync="convertion"
            width="30%"
        >
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="convertion = false">取 消</el-button>
            <el-button type="primary" @click="convertion = false">确 定</el-button>
        </span>
        </el-dialog>
        <!-- 分页 -->
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="150"
            layout="total, prev, pager, next"
            :total="1000"
            class="offer-pagination"
        >
        </el-pagination>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentPage: 2,
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    state: 1
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄',
                    state: 0
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄',
                    state: 0
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄',
                    state: 0
                }
            ],
            convertion: false
        };
    },
    methods: {
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleOk(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    }
};
</script>

<style>
.offer-pagination {
    margin: 20px 0;
    display: flex;
    justify-content: flex-end;
}
</style>



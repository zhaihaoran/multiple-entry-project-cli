<template>
    <div>
        <SearchInput />

        <div v-for="person in persons" :key="person.id" class="tm-card invite-send">
            <div class="card-image">
                <img :src="person.image" class="img-fluid" alt="">
            </div>
            <div class="card-wrapper">
                <p class="no-margin" ><span class="teacher-name" >{{person.name}}</span>{{person.info}}</p>
                <p>
                    <span class="num tm-text-color" >{{person.invitenum}}</span>邀约数
                    <span class="num tm-text-color" style="margin-left:20px;" >{{person.contrinum}}</span>贡献人次
                </p>
                <p class="no-margin" >简介：{{person.description}}</p>
            </div>
        </div>
        <div class="tm-card text-center">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="10"
                layout="total, prev, pager, next"
                :total="200"
                class="offer-pagination"
            >
            </el-pagination>
        </div>
    </div>
</template>
<script>
import SearchInput from '@layout/search.vue';
export default {
    data() {
        return {
            currentPage: 3,
            persons: [
                {
                    id: 1,
                    name: '张小山',
                    image: '../../assets/image/guests/guest1.png',
                    info: '英语老师，野外探险爱好者',
                    invitenum: 328,
                    contrinum: 32,
                    description:
                        '我们学校特别困难，夏天没有风扇，冬天没有暖气，连玻璃都是用纸糊的，烧炉子都买不起煤。惨,我们学校特别困难，夏天没有风扇，冬天没有暖气，连玻璃都是用纸糊的，烧炉子都买不起煤。惨,我们学校特别困难，夏天没有风扇，冬天没有暖气，连玻璃都是用纸糊的，烧炉子都买不起煤。惨,我们学校特别困难，夏天没有风扇，冬天没有暖气，连玻璃都是用纸糊的，烧炉子都买不起煤。惨'
                },
                {
                    id: 2,
                    name: '张小山',
                    image: '../../assets/image/guests/guest2.png',
                    info: '英语老师，野外探险爱好者',
                    invitenum: 328,
                    contrinum: 32,
                    description:
                        '我们学校特别困难，夏天没有风扇，冬天没有暖气，连玻璃都是用纸糊的，烧炉子都买不起煤。惨,我们学校特别困难，夏天没有风扇，冬天没有暖气，连玻璃都是用纸糊的，烧炉子都买不起煤。惨,我们学校特别困难，夏天没有风扇，冬天没有暖气，连玻璃都是用纸糊的，烧炉子都买不起煤。惨,我们学校特别困难，夏天没有风扇，冬天没有暖气，连玻璃都是用纸糊的，烧炉子都买不起煤。惨'
                },
                {
                    id: 3,
                    name: '张小山',
                    image: '../../assets/image/guests/guest3.png',
                    info: '英语老师，野外探险爱好者',
                    invitenum: 328,
                    contrinum: 32,
                    description:
                        '我们学校特别困难，夏天没有风扇，冬天没有暖气，连玻璃都是用纸糊的，烧炉子都买不起煤。惨,我们学校特别困难，夏天没有风扇，冬天没有暖气，连玻璃都是用纸糊的，烧炉子都买不起煤。惨,我们学校特别困难，夏天没有风扇，冬天没有暖气，连玻璃都是用纸糊的，烧炉子都买不起煤。惨,我们学校特别困难，夏天没有风扇，冬天没有暖气，连玻璃都是用纸糊的，烧炉子都买不起煤。惨'
                },
                {
                    id: 4,
                    name: '张小山',
                    image: '../../assets/image/guests/guest4.png',
                    info: '英语老师，野外探险爱好者',
                    invitenum: 328,
                    contrinum: 32,
                    description:
                        '我们学校特别困难，夏天没有风扇，冬天没有暖气，连玻璃都是用纸糊的，烧炉子都买不起煤。惨,我们学校特别困难，夏天没有风扇，冬天没有暖气，连玻璃都是用纸糊的，烧炉子都买不起煤。惨,我们学校特别困难，夏天没有风扇，冬天没有暖气，连玻璃都是用纸糊的，烧炉子都买不起煤。惨,我们学校特别困难，夏天没有风扇，冬天没有暖气，连玻璃都是用纸糊的，烧炉子都买不起煤。惨'
                }
            ]
        };
    },
    components: {
        SearchInput
    },
    methods: {
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
.admin-step {
    height: 200px;
}
.invite-send.tm-card {
    display: flex;
    flex-direction: row;
}
.invite-send .card-image {
    width: 160px;
    overflow: hidden;
}
.invite-send .card-wrapper {
    flex: 1;
    color: #6e6e6e;
    padding-left: 20px;
}
.invite-send .card-wrapper p {
    max-height: 66px;
    line-height: 22px;
    overflow: hidden;
    text-overflow: ellipsis;
}

.invite-send .card-wrapper p .num {
    font-size: 20px;
    font-weight: bold;
    margin-right: 10px;
}

.invite-send .card-wrapper p .teacher-name {
    font-size: 22px;
    font-weight: bold;
    color: #000;
    margin-right: 20px;
}
</style>

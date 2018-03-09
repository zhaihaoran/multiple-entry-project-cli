<template>
    <el-tabs type="border-card">
        <el-tab-pane label="通用">
            <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="setting-form" >
                <el-form-item label="头像">
                    <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" >
                        <i class="el-icon-plus"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="学校名称" prop="schoolName" >
                    <el-input v-model="form.schoolName"></el-input>
                </el-form-item>
                <el-form-item label="学校地址" prop="schoolPos" >
                    <el-input v-model="form.schoolPos"></el-input>
                </el-form-item>
                <el-form-item label="简介" prop="des1" >
                    <el-input type="textarea" v-model="form.des1"></el-input>
                </el-form-item>
                <el-form-item label="教学特色" prop="des2" >
                    <el-input type="textarea" v-model="form.des2"></el-input>
                </el-form-item>
                <el-form-item label="学校状况" prop="des3" >
                    <el-input type="textarea" v-model="form.des3"></el-input>
                </el-form-item>
                <el-button type="primary" @click="onSubmit('form')">保存</el-button>
                <el-button @click="resetForm('form')">重置</el-button>
            </el-form>
        </el-tab-pane>
        <el-tab-pane label="相册">
            <div class="upload-pic">
                <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :file-list="filelist"
                    list-type="picture">
                    <el-button type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip upload-tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
            </div>
            <div class="individar"></div>
            <el-row :gutter="10">
                <el-col class="tm-col-5 pic-cube" :xs="12" :sm="8" :lg="6" v-for="photo in photos" :key="photo.$index" >
                    <img :src="photo" class="img-fluid" alt="">
                </el-col>
            </el-row>
        </el-tab-pane>
        <el-tab-pane label="视频">
            <el-row :gutter="10">
                <el-col class="tm-col-5" :xs="12" :sm="8" :lg="6" v-for="video in videos" :key="video.id" >
                    <div class="hoverable card-hover" >
                        <div class="card-image">
                            <img class="img-fluid" :src="video.img">
                            <span class="vd-times badge">{{video.time}}</span>
                        </div>
                        <div class="card-content">
                            <span class="card-title grey-333">{{video.title}}</span>
                            <div class="vd-extra">
                                <span>演讲者：{{video.author}}</span>
                                <span>学校：{{video.school}}</span>
                                <span>{{video.startTime}} <span class="text-right" >{{video.count}} 次播放</span> </span>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <el-pagination
                :current-page.sync="current"
                :page-size="10"
                layout="total, prev, pager, next"
                :total="100"
                class="photo-pagination"
            >
            </el-pagination>
        </el-tab-pane>
    </el-tabs>
</template>
<script>
export default {
    data() {
        return {
            current: 3,
            filelist: [
                {
                    name: 'food.jpeg',
                    url:
                        'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                },
                {
                    name: 'food2.jpeg',
                    url:
                        'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                }
            ],
            form: {
                schoolName: '',
                schoolPos: '',
                dest1: '',
                dest2: '',
                dest3: ''
            },
            rules: {
                schoolName: [],
                schoolPos: '',
                dest1: '',
                dest2: '',
                dest3: ''
            },
            videos: [
                {
                    id: '1',
                    time: '12:58',
                    img: 'assets/image/card.png',
                    title: '成为更好的自己',
                    author: '周程程',
                    count: 9999,
                    startTime: '2017-12-30',
                    school: '华中师范大学附属中学'
                },
                {
                    id: '23',
                    time: '12:58',
                    img: 'assets/image/card.png',
                    title: '成为更好的自己',
                    author: '周程程',
                    count: 9999,
                    startTime: '2017-12-30',
                    school: '华中师范大学附属中学'
                },
                {
                    id: '2',
                    time: '12:58',
                    img: 'assets/image/card.png',
                    title: '成为更好的自己',
                    author: '周程程',
                    count: 9999,
                    startTime: '2017-12-30',
                    school: '华中师范大学附属中学'
                },
                {
                    id: '3',
                    time: '12:58',
                    img: 'assets/image/card.png',
                    title: '成为更好的自己',
                    author: '周程程',
                    count: 9999,
                    startTime: '2017-12-30',
                    school: '华中师范大学附属中学'
                },
                {
                    id: '10',
                    time: '12:58',
                    img: 'assets/image/card.png',
                    title: '成为更好的自己',
                    author: '周程程',
                    count: 9999,
                    startTime: '2017-12-30',
                    school: '华中师范大学附属中学'
                }
            ],
            photos: [
                'assets/image/guests/guest1.png',
                'assets/image/guests/guest3.png',
                'assets/image/guests/guest2.png',
                'assets/image/guests/guest4.png',
                'assets/image/guests/guest4.png',
                'assets/image/guests/guest1.png',
                'assets/image/guests/guest3.png',
                'assets/image/guests/guest3.png',
                'assets/image/guests/guest2.png',
                'assets/image/guests/guest4.png'
            ]
        };
    },
    methods: {
        onSubmit(form) {
            this.$refs[form].validate(valid => {
                if (valid) {
                    console.log('OK');
                } else {
                    console.log('error submit! please try agin');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        }
    }
};
</script>
<style>
.setting-form {
    max-width: 500px;
}
.photo-pagination {
    float: right;
}
.el-upload__tip.upload-tip {
    padding-left: 20px;
    display: inline-block;
}
.el-upload-list {
    display: flex;
    flex-wrap: wrap;
}
.el-upload-list--picture .el-upload-list__item {
    max-width: 300px;
    margin-right: 10px;
}
.pic-cube {
    margin: 5px 0;
}
</style>



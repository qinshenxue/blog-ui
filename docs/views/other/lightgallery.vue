<template>
    <div class="doc-box">
        <div class="lightgallery-demo">
            <ul class="clearfix" v-preview>
                <li v-for="img in imgs" :data-src="img.original" data-sub-html="<p>测试文字</p>"
                    :style="{backgroundImage:'url('+img.thumbnail+')'}">
                    <img :src="img.thumbnail">
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default{
        data(){
            return {
                imgs: [{
                    thumbnail: 'http://oss-mytest.img-cn-hangzhou.aliyuncs.com/gcxt/my57386906c1207/photos/cd5813ca929df2b7b9325014ef005c1d.jpg@1e_0o_1l_100h_100w_90q.src',
                    original: 'http://oss-mytest.fdccloud.com/gcxt/my57386906c1207/photos/cd5813ca929df2b7b9325014ef005c1d.jpg'
                }, {
                    thumbnail: 'http://oss-mytest.img-cn-hangzhou.aliyuncs.com/gcxt/my57386906c1207/photos/9c9f0dede636f137dc6226e928417e42.jpg@1e_0o_1l_100h_100w_90q.src',
                    original: 'http://oss-mytest.fdccloud.com/gcxt/my57386906c1207/photos/9c9f0dede636f137dc6226e928417e42.jpg'
                }, {
                    thumbnail: 'http://oss-mytest.img-cn-hangzhou.aliyuncs.com/gcxt/my57386906c1207/photos/14881005b8246208f2947e0a7d143216.jpg@1e_0o_1l_100h_100w_90q.src',
                    original: 'http://oss-mytest.fdccloud.com/gcxt/my57386906c1207/photos/14881005b8246208f2947e0a7d143216.jpg'
                }]
            }
        }
    }
</script>
<style lang="stylus">
    .lightgallery-demo
        ul
            li
                float left
                width 100px
                height 100px
                margin-right 10px
                background-position center center
                background-size cover
                background-repeat no-repeat
                cursor pointer
            img
                display none
</style>
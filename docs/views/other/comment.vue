<template>
    <div class="doc-box">

        <v-comment :data="comments" placeholder="支持部分markdown语法"></v-comment>
    </div>
</template>

<script>

    export default{

        data(){
            return {
                comments: [{
                    content: '测试啦',
                    author: '秦申学',
                    avatar: 'https://user-gold-cdn.xitu.io/2016/11/29/24f6baa10941bc09467ef57d8007868a',
                    id: 1,
                    reply: '李雄',
                    create_time: '2017-05-02',
                    update_time: '2017-06-25'
                }, {
                    content: '测试啦',
                    author: '秦申学',
                    avatar: 'https://user-gold-cdn.xitu.io/2016/11/29/24f6baa10941bc09467ef57d8007868a',
                    id: 2,
                    reply: '李雄',
                    create_time: '2017-05-02',
                    update_time: '2017-06-25'
                }, {
                    content: '测试啦',
                    author: '秦申学',
                    avatar: 'https://user-gold-cdn.xitu.io/2016/11/29/24f6baa10941bc09467ef57d8007868a',
                    id: 3,
                    reply: '李雄',
                    create_time: '2017-05-02',
                    update_time: '2017-06-25'
                }, {
                    content: '测试啦',
                    author: '秦申学',
                    avatar: 'https://user-gold-cdn.xitu.io/2016/11/29/24f6baa10941bc09467ef57d8007868a',
                    id: 4,
                    reply: '李雄',
                    create_time: '2017-05-02',
                    update_time: '2017-06-25'
                }, {
                    content: '测试啦',
                    author: '秦申学',
                    avatar: 'https://user-gold-cdn.xitu.io/2016/11/29/24f6baa10941bc09467ef57d8007868a',
                    id: 5,
                    reply: '李雄',
                    create_time: '2017-05-02',
                    update_time: '2017-06-25'
                }]

            }
        }
    }

</script>
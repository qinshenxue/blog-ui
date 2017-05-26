<template>
    <div class="v-comment">
        <v-comment-form
                :placeholder="placeholder"
                v-if="!reply"
                @submit="submitComment"
        ></v-comment-form>
        <ul class="v-comment_list">
            <li class="v-comment_list-item" v-for="comment in data">
                <div class="v-comment_head">
                    <div class="v-comment_avatar" :style="getAvatar(comment)">{{comment.nick_name.substr(0, 1)}}</div>
                    <div class="v-comment_author"><span class="v-comment_name">{{comment.nick_name}}</span><span v-if="comment.reply_to"> 回复 <em
                            class="v-comment_name">{{comment.reply_to}}</em></span><span
                            class="v-comment_time">{{comment.reply_time}}</span>
                    </div>
                </div>
                <div class="v-comment_body" v-html="comment.content">
                </div>
                <div class="v-comment_foot"><a href="javascript:;" @click="reply=comment">回复</a>
                    <v-comment-form enable-cancel
                                    v-if="reply && comment.id==reply.id"
                                    @cancel="reply=null"
                                    @submit="submitComment"
                                    :placeholder="placeholder"
                    ></v-comment-form>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import vCommentForm from './form.vue';
    export default {
        name: 'v-comment',
        props: {
            data: Array,
            placeholder: String
        },
        data(){
            return {
                reply: null,
                colors: {}
            }
        },
        components: {
            vCommentForm
        },
        methods: {
            getAvatar(comment){
                if (!this.colors[comment.nick_name]) {
                    this.colors[comment.nick_name] = '#' + Math.floor(Math.random() * 16777215).toString(16);
                }
                return {
                    backgroundColor: this.colors[comment.nick_name]
                }
            },
            submitComment(content, commentForm){
                var formData = {content: content};
                if (this.reply) {
                    formData.reply_to = this.reply.nick_name;
                }
                this.$emit('submit', Object.assign({}, this.reply, formData), commentForm, this);
            }
        }
    }
</script>

<style lang="stylus">
    @import "../../css/vars.styl"
    .v-comment_list-item
        margin-bottom 24px

    .v-comment_head
        display flex
        align-items center

    .v-comment_avatar
        width 34px
        height @width
        border-radius (@width / 2)
        background-position center
        background-size cover
        background-repeat no-repeat
        line-height @width
        background-color $color-logo
        color #fff
        text-align center
        font-size 16px
        font-weight bold

    .v-comment_author
        color #aaa
        margin-left 10px

    .v-comment_name
        font-style normal
        color $color-logo
        font-weight bold

    .v-comment_time
        margin-left 5px
        color $color-assist
        font-size $font-size-assist

    .v-comment_body
        padding-left 44px
        color $color-body

    .v-comment_foot
        margin-top 10px
        padding-left 44px
        a
            color $color-assist

</style>
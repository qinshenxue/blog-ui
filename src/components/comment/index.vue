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
                    <div class="v-comment_avatar" :style="{backgroundImage:'url('+comment.avatar+')'}"></div>
                    <div class="v-comment_author">{{comment.author}} <span class="v-comment_time">{{comment.create_time}}</span>
                    </div>
                </div>
                <div class="v-comment_body">{{comment.content}}</div>
                <div class="v-comment_foot"><a href="javascript:;" @click="reply=comment">回复</a>
                    <v-comment-form cancel
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
                reply: null
            }
        },
        components: {
            vCommentForm
        },
        methods: {
            submitComment(content){
                this.$emit('submit', Object.assign({}, this.reply, {content}));
            }
        }

    }

</script>
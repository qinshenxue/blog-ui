<template>

    <div class="v-comment_form">
        <div class="v-comment_form-body">
            <div class="v-input">
                <textarea rows="4" v-model="content" :placeholder="placeholder"></textarea>
            </div>
        </div>
        <div class="v-comment_form-foot">
            <v-btn v-if="cancel" @click.native="cancelComment">取消</v-btn>
            <v-btn type="primary" @click.native="submitComment">提交</v-btn>
        </div>
    </div>

</template>

<script>

    export default{
        name: 'v-comment-form',
        props: {
            cancel: Boolean,
            placeholder:String
        },
        data(){
            return {
                content: ''
            }
        },
        methods: {
            cancelComment(){
                this.$emit('cancel');
            },
            submitComment(){
                this.$emit('submit', this.content);
            }
        }
    }

</script>
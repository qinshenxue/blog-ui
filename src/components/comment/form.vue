<template>
    <div class="v-comment_form">
        <div class="v-comment_form-body">
            <v-input type="textarea" :rows="3" :placeholder="placeholder"></v-input>
        </div>
        <div class="v-comment_form-foot">
            <v-btn v-if="enableCancel" @click.native="cancelComment">取消</v-btn>
            <v-btn type="primary" @click.native="submitComment">提交</v-btn>
        </div>
    </div>
</template>

<script>

    export default{
        name: 'v-comment-form',
        props: {
            enableCancel: Boolean,
            placeholder: String
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

<style lang="stylus">
    .v-comment_form
        margin 10px 0

    .v-comment_form-foot
        text-align right
        padding-top 8px
        .v-btn
            margin-left 10px
</style>
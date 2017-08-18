<template>
    <div class="v-comment_form">
        <div class="v-comment_form-body">
            <v-input type="textarea" :rows="3" :placeholder="placeholder" v-model="content"></v-input>
        </div>
        <div class="v-comment_form-foot">
            <v-btn v-if="enableCancel" @click.native="cancelComment">取消</v-btn>
            <v-btn v-if="enableSubmit" type="primary" @click.native="submitComment">提交</v-btn>
            <slot name="form-foot"></slot>
        </div>
    </div>
</template>

<script>

export default {
    name: 'v-comment-form',
    props: {
        enableSubmit: {
            type: Boolean,
            default: true
        },
        enableCancel: Boolean,
        placeholder: String
    },
    data() {
        return {
            content: ''
        }
    },
    methods: {
        cancelComment() {
            this.content = '';
            this.$emit('cancel');
        },
        submitComment() {
            this.$emit('submit', this.content, this);
        }
    }
}

</script>

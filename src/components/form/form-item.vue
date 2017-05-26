<template>
    <div class="v-form-item" :class="[{'has-error':!isValid}]">
        <slot></slot>
        <div class="v-form-item_error" v-if="!isValid">{{invalidMsg}}</div>
    </div>
</template>
<script>
    import emitter from '../../mixins/emitter'
    export default{
        name: 'v-form-item',
        mixins: [emitter],
        props: {
            rules: Array,
            required: Boolean,
            minlength: Number,
            maxlength: Number,
            length: Number,
            email: Boolean
        },
        data(){
            return {
                value: '',
                isValid: true,
                invalidMsg: '',
                emailReg: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            }
        },
        methods: {
            reset(){
                this.isValid = true;
                this.invalidMsg = '';
            },
            validate(){
                var val = this.value;
                var valid = false;
                var msg = '';
                if (this.required && val.trim() === '') {
                    msg = "必填";
                } else if (this.minlength && val.length < this.minlength) {
                    msg = `长度不能小于${this.minlength}个字符`;
                } else if (this.maxlength && val.length > this.maxlength) {
                    msg = `长度不能大于${this.maxlength}个字符`;
                } else if (this.length && this.length !== val.length) {
                    msg = `长度限制为${this.length}个字符`;
                } else if (this.email && !this.emailReg.test(val)) {
                    msg = "邮箱不合法";
                } else if (this.rules) {
                    msg = '';
                    valid = this.rules.every(rule => {
                        var ruleResult = rule();
                        if (!ruleResult.isValid) {
                            msg = ruleResult.invalidMsg;
                        }
                        return ruleResult.isValid;
                    });
                } else {
                    valid = true;
                    msg = '';
                }
                this.isValid = valid;
                this.invalidMsg = msg;
                return this.isValid;
                /*if (this.minlength && this.currentValue.length < this.minlength) {
                 this.isValid = false
                 this.invalidMsg = `至少输入${this.minlength}个字符`;
                 } else if (this.maxlength && this.currentValue.length > this.maxlength) {
                 this.isValid = false
                 this.invalidMsg = `最多输入${this.minlength}个字符`;
                 } else if (this.validations) {
                 this.isValid = this.validations.every(item => {
                 var valid;
                 if (typeof item === 'string') {
                 valid = validations[item](this.currentValue);
                 } else if (typeof item === 'function') {
                 valid = item(this.currentValue);
                 }
                 if (!valid.isValid) {
                 this.invalidMsg = valid.invalidMsg;
                 }
                 return valid.isValid
                 })
                 }
                 return this.isValid*/
            },
            onInput(val){
                this.value = val;
                this.isValid = true;
                this.invalidMsg = '';
            },
            onBlur(val){
                this.value = val;
                this.validate();
            }

        },
        mounted(){
            this.dispatch('v-form', 'regist', this);
            this.$on('input', this.onInput);
            this.$on('blur', this.onBlur);
        }
    }
</script>
<style lang="stylus">
    @import "../../css/vars.styl"
    .v-form-item
        position relative
        margin-bottom 22px
        &.has-error
            .v-input_inner
                border 1px solid $color-danger

    .v-form-item_error
        position absolute
        bottom -20px
        top 100%
        line-height 1
        font-size 12px
        padding-left 1px
        padding-top 4px
        color $color-danger

</style>
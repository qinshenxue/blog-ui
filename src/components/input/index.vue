<template>
    <!--   <div class="vui-input"
            :class="{'has-pend': $slots.prepend || $slots.append,focus:focus,'has-prepend':$slots.prepend,'has-append':$slots.append}">
           <div class="vui-input-group-prepend" v-if="$slots.prepend">
               <slot name="prepend"></slot>
               <div class="line"></div>
           </div>

           <textarea v-if="type=='textarea'" v-model="val" @focus="focus=true" @blur="focus=false"></textarea>
           <input v-else type="text" v-model="val" :placeholder="placeholder" @focus="focus=true" @blur="focus=false">

           <div class="vui-input-group-append" v-if="$slots.append">
               <div class="line"></div>
               <slot name="append"></slot>
           </div>
       </div>-->
    <div class="v-input" :class="{'is-disabled':disabled}">
        <div class="v-input_icon" v-if="$slots.icon">
            <slot name="icon"></slot>
        </div>
        <div class="v-input_error" v-if="!isValid && invalidMsg">{{invalidMsg}}</div>
        <input v-if="type!=='textarea'"
               class="v-input_inner"
               ref="input"
               :type="type"
               :value="currentValue"
               v-bind="$props"
               @input="handleInput"
               @blur="handleBlur"
        >
        <textarea v-else
                  class="v-input_inner"
                  ref="input"
                  :value="currentValue"
                  v-bind="$props"
                  @input="handleInput"
                  @blur="handleBlur"
        ></textarea>
    </div>

</template>
<script>
    import validations from './validations'
    export default{
        name: 'v-input',
        form: true,
        props: {
            type: {
                type: String,
                default: 'text'
            },
            validations: Array,
            value: [String, Number],
            placeholder: String,
            disabled: Boolean,
            readonly: Boolean,
            autofocus: Boolean,
            autocomplete: Boolean,
            minlength: Number,
            maxlength: Number,
            rows: Number
        },
        data(){
            return {
                currentValue: this.value,
                isValid: true,
                invalidMsg: ''
            }
        },
        watch: {
            value (v) {
                this.currentValue = v;
            }
        },
        methods: {
            handleInput(e){
                let v = e.target.value;
                switch (this.type) {
                    case 'number':
                        v = v.replace(/[^\d]/g, '');
                        this.$refs.input.value = v;
                        break;
                }
                this.invalidMsg = '';
                this.$emit('input', v);
            },
            handleBlur(e){
                this.validate();
            },
            validate(){
                if (this.minlength && this.currentValue.length < this.minlength) {
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
                return this.isValid
            }
        }
    }
</script>
<style lang="stylus">
    @import "../../css/vars.styl"
    .v-input
        position relative

    .v-input_inner
        display block
        width 100%
        outline none
        padding 8px 10px
        line-height 16px
        border 1px solid $color-gray
        appearance none
        &:focus
            border-color $color-theme

    .v-input_error
        position absolute
        right 1px
        top 1px
        bottom 1px
        text-align right
        display flex
        align-items center
        padding 0 10px
        background #ffffff
        color $color-danger

    .is-disabled .v-input_inner
        background-color $color-gray-light

    .has-icon .v-input_inner
        padding-right 34px

    .v-input_icon
        position absolute
        right 0
        top 0
        width 34px
        height 100%
        text-align center
        padding 9px
        .icon
            fill $color-assist
        + .v-input_inner
            padding-right 34px

</style>

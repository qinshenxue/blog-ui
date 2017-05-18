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
        <input class="v-input_inner"
               ref="input"
               type="text"
               :value="currentValue"
               :placeholder="placeholder"
               :disabled="disabled"
               :readonly="readonly"
               :maxlength="maxlength"
               :minlength="minlength"
               :autocomplete="autocomplete"
               :autofocus="autofocus"
               @input="handleInput">

    </div>

</template>
<script>
    export default{
        name: 'v-input',
        props: {
            type: {
                type: String,
                default: 'text'
            },
            value: [String, Number],
            placeholder: String,
            disabled: Boolean,
            readonly: Boolean,
            autofocus: Boolean,
            autocomplete: Boolean,
            minlength: Number,
            maxlength: Number
        },
        data(){
            return {
                currentValue: this.value
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
                this.$emit('input', v);
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

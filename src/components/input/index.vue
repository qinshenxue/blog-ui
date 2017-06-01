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
    import emitter from '../../mixins/emitter'
    export default{
        name: 'v-input',
        mixins: [emitter],
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
            maxlength: Number,
            rows: Number
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
            dispatchFormItem(eventName){
                this.dispatch('v-form-item', eventName, this.currentValue);
            },
            handleInput(e){
                let v = e.target.value;
                switch (this.type) {
                    case 'number':
                        v = v.replace(/[^\d]/g, '');
                        this.$refs.input.value = v;
                        break;
                }
                this.$emit('input', v);
                this.dispatchFormItem('input');
            },
            handleBlur(e){
                this.dispatchFormItem('blur');
            }
        },
        created(){
            this.dispatchFormItem('input');
        }
    }
</script>

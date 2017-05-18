<template>
    <label class="vui-radio" :class="{checked:_value==val}">
        <span class="vui-radio-input"><input type="radio" v-model="_value" :value="val"></span>
        <span class="vui-radio-label"><slot></slot></span>
    </label>
</template>
<script type="text/javascript">
    export default{
        props: {
            val: {
                type: [String, Boolean, Number],
                required: true
            },
            value: {}
        },
        computed: {
            _value: {
                get() {
                    return this.value;
                },
                set(newValue) {
                    this.$emit('input', newValue);
                }
            }
        }
    }
</script>

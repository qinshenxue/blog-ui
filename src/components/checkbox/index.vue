<template>
    <label class="vui-checkbox"  :class="{checked:_value==val}">
        <span class="vui-checkbox-input"><vui-icon name="check"></vui-icon><input type="checkbox" v-model="_value"  :value="val"></span>
        <span class="vui-checkbox-label"><slot></slot></span>
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

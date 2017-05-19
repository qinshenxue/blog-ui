<template>
    <button :type="submit?'submit':'button'" class="v-btn" :class="['v-btn_'+type,{'v-btn_sm':sm,'v-btn_lg':lg}]" :disabled="disabled">
        <slot></slot>
    </button>
</template>
<script type="text/javascript">
    export default {
        name:'v-btn',
        props: {
            type: {
                type: String,
                default: 'default'
            },
            lg: Boolean,
            sm: Boolean,
            submit:Boolean,
            disabled: Boolean
        }
    }
</script>
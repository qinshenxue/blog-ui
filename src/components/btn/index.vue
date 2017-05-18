<template>
    <button :type="submit?'submit':'button'" class="btn" :class="['btn-'+type,{'btn-sm':sm,'btn-lg':lg}]" :disabled="disabled">
        <slot></slot>
    </button>
</template>
<script type="text/javascript">
    export default {
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
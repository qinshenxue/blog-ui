<template>
    <div>
        <slot v-pre></slot>
    </div>
</template>
<script type="text/javascript">
    //import hljs from 'highlight.js'
    export default {
        created() {
        },
        mounted() {
      //      hljs.highlightBlock(this.$slots.default[0].elm)
        }
    }
</script>
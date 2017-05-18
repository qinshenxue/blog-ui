<template>
    <pre><code ref="code" :class="lang"><slot></slot></code></pre>
</template>
<script type="text/javascript">
    import hljs from "highlight.js";
    import "../../../node_modules/highlight.js/styles/github.css"
    export default{
        props: {
            lang: ""
        },
        mounted(){
            hljs.highlightBlock(this.$refs.code);
        }
    }
</script>

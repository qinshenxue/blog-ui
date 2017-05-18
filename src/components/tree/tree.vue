<template>
    <ul class="tree" :class="{link:link}">
        <node v-for="d in data" :data="d"></node>
    </ul>
</template>
<script type="text/javascript">
    export default{
        name: 'vui-tree',
        props: {
            data: Array,
            checkbox: {
                type: Boolean,
                default: false
            },
            link: {
                type: Boolean,
                default: false
            },
            gap: {
                type: Number,
                default: 30
            },
            expand: {
                type: Boolean,
                default: false
            }
        },
        data(){
            return {
                isTree: true
            }
        },
        components: {
            node: require("./node.vue")
        }
    }
</script>

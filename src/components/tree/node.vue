<template>
    <li class="tree-node">
        <div class="tree-node-wrap" :style="{paddingLeft: gap + 'px'}">
            <div @click="toggle" class="tree-node-box">
                <em v-if="tree.link" class="before" :style="before"></em>
                <span class="tree-node-toggle" :class="{expand: expand}" v-show="data.children.length > 0"></span>
                <span v-if="tree.checkbox" class="tree-node-checkbox" :class="{checked: data.checked}" @click.stop="check"></span>
                {{data.text}}
                <em v-if="tree.link" class="after" :style="after"></em>
            </div>
        </div>
        <ul class="tree-nodes" v-show="expand">
            <node v-for="d in data.children" :data="d"></node>
        </ul>
        <div v-if="tree.link" class="line" :style="{left: gap - tree.gap + 'px'}"></div>
    </li>
</template>
<script type="text/javascript">
    export default{
        name: "node",
        props: {
            data: Object
        },
        data: function () {
            return {
                gap: 0,
                tree: null,
                expand: false
            }
        },
        computed: {
            before(){
                var sty = {
                    width: this.tree.gap - 10 + 'px',
                    left: '-' + this.tree.gap + 'px'
                };
                if (this.data.children.length > 0) {
                    sty.width = this.tree.gap - 20 + 'px'
                }
                return sty;
            },
            after(){
                return {left: '-' + this.tree.gap + 'px'}
            }
        },
        created(){
            var parent = this.$parent;
            if (parent.isTree) {
                this.tree = parent;
                this.gap = 20;
            } else {
                this.tree = parent.tree;
                this.gap = parent.gap + this.tree.gap;
            }
            this.expand = this.tree.expand;
        },
        methods: {
            toggle: function () {
                this.expand = !this.expand;
            },
            check: function () {
                this.data.checked = !this.data.checked;
            }
        },
        watch: {
            'data.checked': {
                handler: function (val, oldVal) {
                    for (var i = 0, j = this.data.children.length; i < j; i++) {
                        this.data.children[i].checked = val;
                    }
                }
            }
        }
    }
</script>

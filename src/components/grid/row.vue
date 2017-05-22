<template>
    <div class="row" :style="row_style">
        <slot></slot>
    </div>
</template>
<script type="text/javascript">
    export default{
        name:'v-row',
        props: {
            gutter: {
                type: Number,
                default: 30
            }
        },
        computed: {
            row_style(){
                var margin = {};
                if (this.gutter) {
                    margin.marginLeft = '-' + this.gutter / 2 + 'px';
                    margin.marginRight = margin.marginLeft;
                }
                return margin;
            }
        }
    }
</script>

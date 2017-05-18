<template>
    <div :class="col_class" :style="col_style">
        <slot></slot>
    </div>
</template>
<script type="text/javascript">
    export default {
        props: {
            span: Number,
            offset: Number,
            push: Number,
            pull: Number,
            xs: [Number, Object],
            sm: [Number, Object],
            md: [Number, Object],
            lg: [Number, Object],
            xl: [Number, Object]
        },
        computed: {
            gutter() {
                return this.$parent.gutter
            },
            col_class() {
                var cls = [];
                ['span', 'offset', 'push', 'pull'].forEach(prop => {
                    if (this[prop]) {
                        cls.push(prop === 'span' ? `col-${this[prop]}` : `col-${prop}-${this[prop]}`);
                    }
                });

                ['xs', 'sm', 'md', 'lg', 'xl'].forEach(screen => {
                    var size = this[screen];
                    if (typeof size === 'number') {
                        cls.push(`col-${screen}-${size}`);
                    } else if (typeof size === 'object') {
                        Object.keys(size).forEach(prop => {
                            cls.push(prop === 'span' ? `col-${screen}-${size[prop]}` : `col-${screen}-${prop}-${size[prop]}`);
                        });
                    }
                });

                return cls.join(' ');
            },
            col_style() {
                var padding = {};
                if (this.gutter) {
                    padding.paddingRight = padding.paddingLeft = this.gutter / 2 + 'px';
                }
                return padding;
            }
        }
    }
</script>
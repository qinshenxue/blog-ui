<template>
    <div class="vui-pagination">
        <ul class="vui-pagination-list" @click="go" v-show="pageCount>1">
            <li :page="current-1" :class="{disabled:current==1}">上一页</li>
            <li v-for="page in pages" :page="page" :class="{active:current==page,ellipsis:page==ellipsis}">{{page}}</li>
            <li :page="current+1" :class="{disabled:current==pageCount}">下一页</li>
        </ul>
        <div class="vui-pagination-total">总计{{total}}条</div>
    </div>
</template>
<script type="text/javascript">
    export default {
        name: 'vui-pagination',
        props: {
            total: {
                type: Number,
                default: 0
            },
            currentPage: {
                type: Number,
                default: 1
            },
            pageSize: {
                type: Number,
                default: 10
            }
        },
        data() {
            return {
                current: this.currentPage,
                pages: [],
                ellipsis: '…'
            }
        },
        computed: {
            pageCount() {
                return Math.ceil(this.total / this.pageSize);
            }
        },
        created(){
            this.initPages();
        },
        methods: {
            go(event) {
                const target = event.target;
                if (target.tagName === 'UL' || target.className.indexOf('disabled') > -1) {
                    return;
                }

                const page = Number(target.getAttribute('page'));
                if (!isNaN(page)) {
                    this.current = page;
                    this.initPages();
                    this.$emit('change', page);
                }
            },
            initPages() {
                if (this.pageCount < 2) {
                    return;
                }
                var arr = [];
                if (this.pageCount > 11) {
                    let len = this.pageCount - this.current;
                    if (this.current > 6 && len > 5) {
                        arr = [1, 2, this.ellipsis, this.current - 2, this.current - 1, this.current, this.current + 1, this.current + 2, this.ellipsis, this.pageCount - 1, this.pageCount];
                    } else if (this.current > 6 && len <= 5) {
                        arr = [1, 2, this.ellipsis];
                        for (let i = 7; i >= 0; i--) {
                            arr.push(this.pageCount - i);
                        }
                    } else if (this.current <= 6 && len > 5) {
                        for (let i = 1; i <= 8; i++) {
                            arr.push(i);
                        }
                        arr = arr.concat([this.ellipsis, this.pageCount - 1, this.pageCount]);
                    }
                } else {
                    for (let i = 1; i <= this.pageCount; i++) {
                        arr.push(i);
                    }
                }
                this.pages = arr;
            }
        },
        watch: {
            pageCount(newVal) {
                if (this.current > newVal) {
                    this.current = newVal;
                }
                this.initPages();
            }
        }
    }
</script>

<template>
    <doc-box class="doc-data-pagination">
        <doc-title>vui-pagination 分页</doc-title>
        <table class="table">
            <thead>
            <tr>
                <th>页面</th>
                <th>条数</th>
                <th>随机数</th>
            </tr>
            </thead>
            <tr v-for="v in list">
                <td>
                    {{v.name}}
                </td>
                <td>
                    {{v.no}}
                </td>
                <td>
                    {{v.random}}
                </td>
            </tr>
        </table>
        <vui-pagination :total="total" :page-size="pageSize" @change="getList"></vui-pagination>
        <doc-code><pre class="js"><code>{
        data(){
            return {
                total: 1010,
                pageSize: 10,
                list: []
            }
        },
        created(){
            this.getList(1);
        },
        methods: {
            getList(pageNo) {
                var arr = [];
                for (let i = 0; i < this.pageSize; i++) {
                    arr.push({
                        name: '第' + pageNo + '页',
                        no: '第' + ((pageNo - 1) * this.pageSize + i + 1) + '数据',
                        random: Math.random()
                    })
                }
                this.list = arr;
            }
        }
    }</code></pre>
        </doc-code>

    </doc-box>
</template>
<script type="text/javascript">
    export default{
        data(){
            return {
                total: 1010,
                pageSize: 10,
                list: []
            }
        },
        created(){
            this.getList(1);
        },
        methods: {
            getList(pageNo) {
                var arr = [];
                for (let i = 0; i < this.pageSize; i++) {
                    arr.push({
                        name: '第' + pageNo + '页',
                        no: '第' + ((pageNo - 1) * this.pageSize + i + 1) + '数据',
                        random: Math.random()
                    })
                }
                this.list = arr;
            }
        }
    }
</script>

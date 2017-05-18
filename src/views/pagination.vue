<template>
    <div class="view-comp-pagination view-comp">
        <h2>分页</h2>
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
        <h3>
            代码
        </h3>
        <pre><code class="xml hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vui-pagination</span> <span class="hljs-attr">:total</span>=<span class="hljs-string">"total"</span> <span class="hljs-attr">:page-size</span>=<span class="hljs-string">"pageSize"</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">"getList"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vui-pagination</span>&gt;</span></code></pre>

        <pre><code class="javascript hljs"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{
    data(){
        <span class="hljs-keyword">return</span> {
            <span class="hljs-attr">total</span>: <span class="hljs-number">1010</span>,
            <span class="hljs-attr">pageSize</span>: <span class="hljs-number">10</span>,
            <span class="hljs-attr">list</span>: []
        }
    },
    created(){
        <span class="hljs-keyword">this</span>.getList(<span class="hljs-number">1</span>);
    },
    <span class="hljs-attr">methods</span>: {
        getList(pageNo) {
            <span class="hljs-keyword">var</span> arr = [];
            <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-keyword">this</span>.pageSize; i++) {
                arr.push({
                    <span class="hljs-attr">name</span>: <span class="hljs-string">'第'</span> + pageNo + <span class="hljs-string">'页'</span>,
                    <span class="hljs-attr">no</span>: <span class="hljs-string">'第'</span> + ((pageNo - <span class="hljs-number">1</span>) * <span class="hljs-keyword">this</span>.pageSize + i + <span class="hljs-number">1</span>) + <span class="hljs-string">'数据'</span>,
                    <span class="hljs-attr">random</span>: <span class="hljs-built_in">Math</span>.random()
                })
            }
            <span class="hljs-keyword">this</span>.list = arr;
        }
    }
}</code></pre>

    </div>
</template>
<style lang="less" type="text/css">
    .view-comp-pagination {
        .table {
            th, td {
                padding-left: 30px
            }
        }
    }
</style>
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

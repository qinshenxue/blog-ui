<template>
    <div class="view-comp-tree view-comp">
        <h2>树</h2>
        <h3>传入数据（:data）</h3>
        <vui-tree :data="data"></vui-tree>
        <pre><code class="xml hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vui-tree</span> <span
                class="hljs-attr">:data</span>=<span class="hljs-string">"data"</span>&gt;</span><span class="hljs-tag">&lt;/<span
                class="hljs-name">vui-tree</span>&gt;</span></code></pre>
        <h3>加载即展开节点（:expand="true"）</h3>
        <vui-tree :data="data" :expand="true"></vui-tree>
        <pre><code class="xml hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vui-tree</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">"data"</span> <span class="hljs-attr">:expand</span>=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vui-tree</span>&gt;</span></code></pre>
        <h3>显示checkbox（:checkbox="true"）</h3>
        <vui-tree :data="data" :expand="true" :checkbox="true"></vui-tree>
        <pre><code class="xml hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vui-tree</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">"data"</span> <span class="hljs-attr">:expand</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">:checkbox</span>=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vui-tree</span>&gt;</span></code></pre>
        <h3>显示树节点连接（:link="true"）</h3>
        <vui-tree :data="data" :expand="true" :checkbox="true" :link="true"></vui-tree>
        <pre><code class="xml hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vui-tree</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">"data"</span> <span class="hljs-attr">:expand</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">:checkbox</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">:link</span>=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vui-tree</span>&gt;</span></code></pre>
        <h3>层级间距（:gap="80"）</h3>
        <vui-tree :data="data" :expand="true" :checkbox="true" :link="true" :gap="80"></vui-tree>
        <pre><code class="xml hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vui-tree</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">"data"</span> <span class="hljs-attr">:expand</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">:checkbox</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">:link</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">:gap</span>=<span class="hljs-string">"80"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vui-tree</span>&gt;</span></code></pre>
    </div>
</template>
<script type="text/javascript">
    export default{
        data(){
            return {
                data: [{
                    id: '2',
                    text: '湖北省',
                    checked: false,
                    children: [{
                        id: '3',
                        text: '武汉市',
                        checked: false,
                        children: [{
                            id: '4',
                            text: '洪山区',
                            checked: false,
                            children: [{
                                id: '5',
                                text: '波波城店',
                                checked: false,
                                cls: 'store',
                                children: []
                            }, {
                                id: '6',
                                text: '剑桥餐厅',
                                checked: false,
                                cls: 'store',
                                children: [{
                                    id: '7',
                                    text: '剑桥1餐厅',
                                    checked: false,
                                    cls: 'store',
                                    children: []
                                }]
                            }]
                        }]
                    }, {
                        id: '7',
                        text: '宜昌市',
                        checked: false,
                        children: [{
                            id: '8',
                            text: '西陵区',
                            checked: false,
                            children: [{
                                id: '9',
                                cls: 'store',
                                text: '东山店',
                                checked: false,
                                children: []
                            }, {
                                id: '10',
                                cls: 'store',
                                checked: false,
                                text: '泰富广场店',
                                children: []
                            }]
                        }]
                    }]
                }, {
                    id: '11',
                    text: '广东省',
                    checked: false,
                    children: [{
                        id: "111",
                        text: '深圳市',
                        checked: false,
                        children: []
                    }]
                }, {
                    id: '12',
                    text: '湖南省',
                    checked: false,
                    children: []
                }]
            }
        }
    }
</script>

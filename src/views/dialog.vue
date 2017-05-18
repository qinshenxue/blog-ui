<template>
    <div class="view-comp">
        <h2>
            对话框
        </h2>


        <h3>
            实例调用
        </h3>
        <div>
            <vui-btn type="default" @click.native="showDialog">打开对话框</vui-btn>
        </div>

        <pre><code class="xml hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vui-btn</span> <span
                class="hljs-attr">type</span>=<span class="hljs-string">"default"</span> @<span class="hljs-attr">click.native</span>=<span
                class="hljs-string">"showDialog"</span>&gt;</span>打开对话框<span class="hljs-tag">&lt;/<span
                class="hljs-name">vui-btn</span>&gt;</span></code></pre>


        <pre><code class="javascript hljs"><span class="hljs-keyword">export</span> <span
                class="hljs-keyword">default</span>{
    data(){
        <span class="hljs-keyword">return</span> {}
    },
    <span class="hljs-attr">methods</span>: {
        showDialog(){
            <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>);
            <span class="hljs-keyword">this</span>.$dialog({
                <span class="hljs-attr">msg</span>: <span class="hljs-string">'对话框内容'</span>
            });
        }
    }
}</code></pre>
        <h3>
            标签方式
        </h3>
        <div>
            <vui-btn type="default" @click.native="show=true">打开对话框</vui-btn>
        </div>

        <vui-dialog v-model="show">提示内容</vui-dialog>

        <pre><code class="xml hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vui-btn</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"default"</span> @<span class="hljs-attr">click.native</span>=<span class="hljs-string">"show=true"</span>&gt;</span>打开对话框<span class="hljs-tag">&lt;/<span class="hljs-name">vui-btn</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">vui-dialog</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"show"</span>&gt;</span>提示内容<span class="hljs-tag">&lt;/<span class="hljs-name">vui-dialog</span>&gt;</span></code></pre>

    </div>
</template>
<script type="text/javascript">
    export default{
        data(){
            return {
                show: false
            }
        },
        methods: {
            showDialog(){
                this.$dialog({
                    msg: '对话框内容'
                });
            }
        }
    }
</script>

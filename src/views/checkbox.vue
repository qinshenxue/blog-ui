<template>
    <div class="view-comp-tree view-comp">
        <h2>Checkbox</h2>
        <h3>v-model绑定值</h3>
        <div>
            <vui-checkbox v-model="checked" :val="1">JS</vui-checkbox>
        </div>
        <pre><code class="xml hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vui-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"checked"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vui-checkbox</span>&gt;</span></code></pre>
    </div>
</template>
<script type="text/javascript">
    export default{
        data(){
            return {
                checked: 1
            }
        }
    }
</script>

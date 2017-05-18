<template>
    <div class="view-comp-icon view-comp">
        <h2>Icon</h2>

        <vui-row>

            <vui-col :span="1">
                <vui-icon name="check"></vui-icon>
                <div class="name">check</div>
            </vui-col>
            <vui-col :span="1">
                <vui-icon name="close"></vui-icon>
                <div class="name">close</div>
            </vui-col>
        </vui-row>

        <pre><code class="xml hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vui-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"check"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vui-icon</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">vui-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"close"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vui-icon</span>&gt;</span></code></pre>

    </div>
</template>
<style lang="less">
    @import "../css/vars";

    .view-comp-icon {

        .col-1 {
            text-align: center;
            font-size: 12px;
        }
        .name {
        }
        .icon {
            fill: @theme;
            width: 32px;
            height: 32px;
            transition: 200ms;
            &:hover {
                transform: scale(2);
            }
        }

    }
</style>
<script type="text/javascript">
    export default{
        data(){
            return {
                checked: false
            }
        }
    }
</script>

<template>
    <div class="view-grid view-comp">
        <h2>
            栅格系统
        </h2>
        <h3>
            基础布局，12栅格
        </h3>
        <div>
            <vui-row>
                <vui-col :span="1">
                    <div class="content">span=1</div>
                </vui-col>
                <vui-col :span="1">
                    <div class="content">span=1</div>
                </vui-col>
                <vui-col :span="1">
                    <div class="content">span=1</div>
                </vui-col>
                <vui-col :span="1">
                    <div class="content">span=1</div>
                </vui-col>
                <vui-col :span="1">
                    <div class="content">span=1</div>
                </vui-col>
                <vui-col :span="1">
                    <div class="content">span=1</div>
                </vui-col>
                <vui-col :span="1">
                    <div class="content">span=1</div>
                </vui-col>
                <vui-col :span="1">
                    <div class="content">span=1</div>
                </vui-col>
                <vui-col :span="1">
                    <div class="content">span=1</div>
                </vui-col>
                <vui-col :span="1">
                    <div class="content">span=1</div>
                </vui-col>
                <vui-col :span="1">
                    <div class="content">span=1</div>
                </vui-col>
                <vui-col :span="1">
                    <div class="content">span=1</div>
                </vui-col>
            </vui-row>
            <vui-row>
                <vui-col :span="2">
                    <div class="content">span=2</div>
                </vui-col>
                <vui-col :span="2">
                    <div class="content">span=2</div>
                </vui-col>
                <vui-col :span="2">
                    <div class="content">span=2</div>
                </vui-col>
                <vui-col :span="2">
                    <div class="content">span=2</div>
                </vui-col>
                <vui-col :span="2">
                    <div class="content">span=2</div>
                </vui-col>
                <vui-col :span="2">
                    <div class="content">span=2</div>
                </vui-col>
            </vui-row>
            <vui-row>
                <vui-col :span="3">
                    <div class="content">span=3</div>
                </vui-col>
                <vui-col :span="3">
                    <div class="content">span=3</div>
                </vui-col>
                <vui-col :span="3">
                    <div class="content">span=3</div>
                </vui-col>
                <vui-col :span="3">
                    <div class="content">span=3</div>
                </vui-col>
            </vui-row>
            <vui-row>
                <vui-col :span="4">
                    <div class="content">span=4</div>
                </vui-col>
                <vui-col :span="4">
                    <div class="content">span=4</div>
                </vui-col>
                <vui-col :span="4">
                    <div class="content">span=4</div>
                </vui-col>
            </vui-row>
            <vui-row>
                <vui-col :span="6">
                    <div class="content">span=6</div>
                </vui-col>
                <vui-col :span="6">
                    <div class="content">span=6</div>
                </vui-col>
            </vui-row>
        </div>

        <pre><code class="xml hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vui-row</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">vui-col</span> <span class="hljs-attr">:span</span>=<span
            class="hljs-string">"2"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
                class="hljs-string">"content"</span>&gt;</span>span=1<span class="hljs-tag">&lt;/<span
                    class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">vui-col</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">vui-col</span> <span class="hljs-attr">:span</span>=<span
            class="hljs-string">"2"</span> <span class="hljs-attr">:offset</span>=<span class="hljs-string">"1"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
                class="hljs-string">"content"</span>&gt;</span>span=2 offset=1<span class="hljs-tag">&lt;/<span
                    class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">vui-col</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">vui-col</span> <span class="hljs-attr">:span</span>=<span
            class="hljs-string">"2"</span> <span class="hljs-attr">:offset</span>=<span class="hljs-string">"1"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
                class="hljs-string">"content"</span>&gt;</span>pan=2 offset=1<span class="hljs-tag">&lt;/<span
                    class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">vui-col</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">vui-col</span> <span class="hljs-attr">:span</span>=<span
            class="hljs-string">"2"</span> <span class="hljs-attr">:offset</span>=<span class="hljs-string">"1"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
                class="hljs-string">"content"</span>&gt;</span>pan=2 offset=1<span class="hljs-tag">&lt;/<span
                    class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">vui-col</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">vui-row</span>&gt;</span></code></pre>

        <h3>
            位置偏移（offset栅格左侧的间隔格数）
        </h3>
        <div>
            <vui-row>
                <vui-col :span="4">
                    <div class="content">span=4</div>
                </vui-col>
                <vui-col :span="4" :offset="4">
                    <div class="content">span=3 offset=6</div>
                </vui-col>
            </vui-row>
            <vui-row>
                <vui-col :span="3" :offset="3">
                    <div class="content">span=3 offset=3</div>
                </vui-col>
                <vui-col :span="3">
                    <div class="content">span=3</div>
                </vui-col>
            </vui-row>
            <vui-row>
                <vui-col :span="2">
                    <div class="content">span=1</div>
                </vui-col>
                <vui-col :span="2" :offset="1">
                    <div class="content">span=2 offset=1</div>
                </vui-col>
                <vui-col :span="2" :offset="1">
                    <div class="content">pan=2 offset=1</div>
                </vui-col>
                <vui-col :span="2" :offset="1">
                    <div class="content">pan=2 offset=1</div>
                </vui-col>
            </vui-row>
        </div>

        <pre><code class="xml hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vui-row</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">vui-col</span> <span class="hljs-attr">:span</span>=<span
            class="hljs-string">"2"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
                class="hljs-string">"content"</span>&gt;</span>span=1<span class="hljs-tag">&lt;/<span
                    class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">vui-col</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">vui-col</span> <span class="hljs-attr">:span</span>=<span
            class="hljs-string">"2"</span> <span class="hljs-attr">:offset</span>=<span class="hljs-string">"1"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
                class="hljs-string">"content"</span>&gt;</span>span=2 offset=1<span class="hljs-tag">&lt;/<span
                    class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">vui-col</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">vui-col</span> <span class="hljs-attr">:span</span>=<span
            class="hljs-string">"2"</span> <span class="hljs-attr">:offset</span>=<span class="hljs-string">"1"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
                class="hljs-string">"content"</span>&gt;</span>pan=2 offset=1<span class="hljs-tag">&lt;/<span
                    class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">vui-col</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">vui-col</span> <span class="hljs-attr">:span</span>=<span
            class="hljs-string">"2"</span> <span class="hljs-attr">:offset</span>=<span class="hljs-string">"1"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
                class="hljs-string">"content"</span>&gt;</span>pan=2 offset=1<span class="hljs-tag">&lt;/<span
                    class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">vui-col</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">vui-row</span>&gt;</span>
</code></pre>
        <h3>
            栅格间隔（gutter）
        </h3>
        <div>
            <vui-row :gutter="30">
                <vui-col :span="1">
                    <div class="content">span=1</div>
                </vui-col>
                <vui-col :span="1">
                    <div class="content">span=1</div>
                </vui-col>
                <vui-col :span="1">
                    <div class="content">span=1</div>
                </vui-col>
                <vui-col :span="1">
                    <div class="content">span=1</div>
                </vui-col>
                <vui-col :span="1">
                    <div class="content">span=1</div>
                </vui-col>
                <vui-col :span="1">
                    <div class="content">span=1</div>
                </vui-col>
                <vui-col :span="1">
                    <div class="content">span=1</div>
                </vui-col>
                <vui-col :span="1">
                    <div class="content">span=1</div>
                </vui-col>
                <vui-col :span="1">
                    <div class="content">span=1</div>
                </vui-col>
                <vui-col :span="1">
                    <div class="content">span=1</div>
                </vui-col>
                <vui-col :span="1">
                    <div class="content">span=1</div>
                </vui-col>
                <vui-col :span="1">
                    <div class="content">span=1</div>
                </vui-col>
            </vui-row>
            <vui-row :gutter="30">
                <vui-col :span="2">
                    <div class="content">span=2</div>
                </vui-col>
                <vui-col :span="2">
                    <div class="content">span=2</div>
                </vui-col>
                <vui-col :span="2">
                    <div class="content">span=2</div>
                </vui-col>
                <vui-col :span="2">
                    <div class="content">span=2</div>
                </vui-col>
                <vui-col :span="2">
                    <div class="content">span=2</div>
                </vui-col>
                <vui-col :span="2">
                    <div class="content">span=2</div>
                </vui-col>
            </vui-row>
            <vui-row :gutter="30">
                <vui-col :span="3">
                    <div class="content">span=3</div>
                </vui-col>
                <vui-col :span="3">
                    <div class="content">span=3</div>
                </vui-col>
                <vui-col :span="3">
                    <div class="content">span=3</div>
                </vui-col>
                <vui-col :span="3">
                    <div class="content">span=3</div>
                </vui-col>
            </vui-row>
        </div>


        <pre><code class="xml hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vui-row</span> <span
                class="hljs-attr">:gutter</span>=<span class="hljs-string">"30"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">vui-col</span> <span class="hljs-attr">:span</span>=<span
            class="hljs-string">"3"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
                class="hljs-string">"content"</span>&gt;</span>span=3<span class="hljs-tag">&lt;/<span
                    class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">vui-col</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">vui-col</span> <span class="hljs-attr">:span</span>=<span
            class="hljs-string">"3"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
                class="hljs-string">"content"</span>&gt;</span>span=3<span class="hljs-tag">&lt;/<span
                    class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">vui-col</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">vui-col</span> <span class="hljs-attr">:span</span>=<span
            class="hljs-string">"3"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
                class="hljs-string">"content"</span>&gt;</span>span=3<span class="hljs-tag">&lt;/<span
                    class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">vui-col</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">vui-col</span> <span class="hljs-attr">:span</span>=<span
            class="hljs-string">"3"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
                class="hljs-string">"content"</span>&gt;</span>span=3<span class="hljs-tag">&lt;/<span
                    class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">vui-col</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">vui-row</span>&gt;</span></code></pre>

    </div>
</template>
<style type="text/css" lang="less">
    .view-grid {
        .row {
            margin-bottom: 15px;
            .content {
                background: #ccc;
                height: 40px;
                line-height: 38px;
                text-align: center;
                color: #000;
                font-size: 12px;

            }
        }
    }
</style>

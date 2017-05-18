<template>
    <div class="view-comp view-comp-button">
        <h2>
            按钮
        </h2>
        <h3>默认</h3>
        <div>
<vui-btn>default</vui-btn>
<vui-btn type="primary">primary</vui-btn>
<vui-btn type="success">success</vui-btn>
<vui-btn type="warning">warning</vui-btn>
<vui-btn type="danger">danger</vui-btn>
        </div>

        <pre><code class="xml hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vui-btn</span>&gt;</span>default<span class="hljs-tag">&lt;/<span class="hljs-name">vui-btn</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">vui-btn</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>&gt;</span>primary<span class="hljs-tag">&lt;/<span class="hljs-name">vui-btn</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">vui-btn</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span>&gt;</span>success<span class="hljs-tag">&lt;/<span class="hljs-name">vui-btn</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">vui-btn</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"warning"</span>&gt;</span>warning<span class="hljs-tag">&lt;/<span class="hljs-name">vui-btn</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">vui-btn</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"danger"</span>&gt;</span>danger<span class="hljs-tag">&lt;/<span class="hljs-name">vui-btn</span>&gt;</span></code></pre>


        <h3>小按钮（size="sm"）</h3>
        <div>
<vui-btn size="sm">default</vui-btn>
<vui-btn type="primary" size="sm">primary</vui-btn>
<vui-btn type="success" size="sm">success</vui-btn>
<vui-btn type="warning" size="sm">warning</vui-btn>
<vui-btn type="danger" size="sm">danger</vui-btn>
        </div>

        <pre><code class="xml hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vui-btn</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"sm"</span>&gt;</span>default<span class="hljs-tag">&lt;/<span class="hljs-name">vui-btn</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">vui-btn</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"sm"</span>&gt;</span>primary<span class="hljs-tag">&lt;/<span class="hljs-name">vui-btn</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">vui-btn</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"sm"</span>&gt;</span>success<span class="hljs-tag">&lt;/<span class="hljs-name">vui-btn</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">vui-btn</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"warning"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"sm"</span>&gt;</span>warning<span class="hljs-tag">&lt;/<span class="hljs-name">vui-btn</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">vui-btn</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"danger"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"sm"</span>&gt;</span>danger<span class="hljs-tag">&lt;/<span class="hljs-name">vui-btn</span>&gt;</span></code></pre>


        <h3>大按钮（size="lg"）</h3>
        <div>
<vui-btn size="lg">default</vui-btn>
<vui-btn type="primary" size="lg">primary</vui-btn>
<vui-btn type="success" size="lg">success</vui-btn>
<vui-btn type="warning" size="lg">warning</vui-btn>
<vui-btn type="danger" size="lg">danger</vui-btn>
        </div>

        <pre><code class="xml hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vui-btn</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"lg"</span>&gt;</span>default<span class="hljs-tag">&lt;/<span class="hljs-name">vui-btn</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">vui-btn</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"lg"</span>&gt;</span>primary<span class="hljs-tag">&lt;/<span class="hljs-name">vui-btn</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">vui-btn</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"lg"</span>&gt;</span>success<span class="hljs-tag">&lt;/<span class="hljs-name">vui-btn</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">vui-btn</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"warning"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"lg"</span>&gt;</span>warning<span class="hljs-tag">&lt;/<span class="hljs-name">vui-btn</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">vui-btn</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"danger"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"lg"</span>&gt;</span>danger<span class="hljs-tag">&lt;/<span class="hljs-name">vui-btn</span>&gt;</span></code></pre>


        <h3>submit类型按钮（action="submit"）</h3>
        <div>
        <vui-btn action="submit">default</vui-btn></div>

        <pre><code class="xml hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vui-btn</span> <span class="hljs-attr">action</span>=<span class="hljs-string">"submit"</span>&gt;</span>default<span class="hljs-tag">&lt;/<span class="hljs-name">vui-btn</span>&gt;</span></code></pre>



        <h3>线框按钮（:line="true"）</h3>
        <div>
<vui-btn size="lg">default</vui-btn>
<vui-btn type="primary" :line="true" size="lg">primary</vui-btn>
<vui-btn type="success" :line="true" size="lg">success</vui-btn>
<vui-btn type="warning"  :line="true" size="lg">warning</vui-btn>
<vui-btn type="danger"  :line="true" size="lg">danger</vui-btn>
        </div>
        <pre><code class="xml hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vui-btn</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"lg"</span>&gt;</span>default<span class="hljs-tag">&lt;/<span class="hljs-name">vui-btn</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">vui-btn</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">:line</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"lg"</span>&gt;</span>primary<span class="hljs-tag">&lt;/<span class="hljs-name">vui-btn</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">vui-btn</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span> <span class="hljs-attr">:line</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"lg"</span>&gt;</span>success<span class="hljs-tag">&lt;/<span class="hljs-name">vui-btn</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">vui-btn</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"warning"</span>  <span class="hljs-attr">:line</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"lg"</span>&gt;</span>warning<span class="hljs-tag">&lt;/<span class="hljs-name">vui-btn</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">vui-btn</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"danger"</span>  <span class="hljs-attr">:line</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"lg"</span>&gt;</span>danger<span class="hljs-tag">&lt;/<span class="hljs-name">vui-btn</span>&gt;</span></code></pre>






        </div>
</template>

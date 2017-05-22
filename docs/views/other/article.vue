<template>

            <div class="mdeditor-html preview" style="padding:0 30px">
                <h1 style="text-align: center">Git多账号配置</h1>
                <h2>生成key</h2><p><span class="mdeditor-inline-code">ssh-keygen -t rsa -C "your@email.com"</span></p><p>添加到ssh-agent</p><pre class="mdeditor-code"><code class="hljs xml">eval $(ssh-agent -s)

ssh-add ~/.ssh/id_rsa</code></pre><h2>修改config文件</h2><p>在<span class="mdeditor-inline-code">C:\Users\qinsx\.ssh</span>目录找到config文件，如果没有就创建：<span class="mdeditor-inline-code">touch config</span></p><p>修改config文件如下</p><pre class="mdeditor-code"><code class="hljs undefined markdown"><span class="hljs-section"><span class="hljs-section"># company's gitlab</span></span>
Host git.your.company.com
HostName git.your.company.com
User git
IdentityFile ~/.ssh/id<span class="hljs-emphasis"><span class="hljs-emphasis">_rsa_</span></span>your_company

<span class="hljs-section"><span class="hljs-section"># oschina</span></span>
Host git.oschina.net
HostName git.oschina.net
User git
IdentityFile ~/.ssh/id<span class="hljs-emphasis"><span class="hljs-emphasis">_rsa_</span></span>oschina

<span class="hljs-section"><span class="hljs-section"># github</span></span>
Host github.com
HostName github.com
User git
IdentityFile ~/.ssh/id<span class="hljs-emphasis"><span class="hljs-emphasis">_rsa_</span></span>github</code></pre><h2>取消全局配置</h2><p>取消global</p><pre class="mdeditor-code"><code class="hljs stylus">git config --global --unset user<span class="hljs-selector-class"><span class="hljs-selector-class">.name</span></span>
git config --global --unset user<span class="hljs-selector-class"><span class="hljs-selector-class">.email</span></span>
</code></pre><p>分别设置每个项目自己的user信息</p><pre class="mdeditor-code"><code class="hljs stylus">git config  user<span class="hljs-selector-class"><span class="hljs-selector-class">.email</span></span> <span class="hljs-string"><span class="hljs-string">"xxxx@xx.com"</span></span>
git config  user<span class="hljs-selector-class"><span class="hljs-selector-class">.name</span></span> <span class="hljs-string"><span class="hljs-string">"suzie"</span></span></code></pre><h2>测试</h2><p><span class="mdeditor-inline-code">ssh -T git.oschina.net</span></p><p>config中user设为git才能成功测试
            </p><p class="mdeditor-warning">github如果使用 Clone with HTTPS，push 时候每次都要输入用户名密码，会比较麻烦，使用 Clone with SSH 则不会有这个问题。</p></div>

</template>
<script>
    export default {
    }
</script>
<style lang="stylus">
</style>
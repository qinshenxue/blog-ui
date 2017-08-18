<template>
    <div class="v-article">
        <div class="mdeditor-html preview">
            <h1 style="text-align: center">Git多账号配置</h1>
            <h2>生成key</h2>
            <p>
                <span class="mdeditor-inline-code">ssh-keygen -t rsa -C "your@email.com"</span>
            </p>
            <p>添加到ssh-agent</p>
            <pre class="mdeditor-code"><code class="hljs xml">eval $(ssh-agent -s)
    
    ssh-add ~/.ssh/id_rsa</code></pre>
            <h2>修改config文件</h2>
            <p>在
                <span class="mdeditor-inline-code">C:\Users\qinsx\.ssh</span>目录找到config文件，如果没有就创建：
                <span class="mdeditor-inline-code">touch config</span>
            </p>
            <p>修改config文件如下</p>
            <pre class="mdeditor-code"><code class="hljs undefined markdown"><span class="hljs-section"><span
                        class="hljs-section"># company's gitlab</span></span>
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
    IdentityFile ~/.ssh/id<span class="hljs-emphasis"><span class="hljs-emphasis">_rsa_</span></span>github</code></pre>
            <h2>取消全局配置</h2>
            <p>取消global</p>
            <pre class="mdeditor-code"><code class="hljs stylus">git config --global --unset user<span
                        class="hljs-selector-class"><span class="hljs-selector-class">.name</span></span>
    git config --global --unset user<span class="hljs-selector-class"><span class="hljs-selector-class">.email</span></span>
    </code></pre>
            <p>分别设置每个项目自己的user信息</p>
            <pre class="mdeditor-code"><code class="hljs stylus">git config  user<span
                        class="hljs-selector-class"><span
                        class="hljs-selector-class">.email</span></span> <span class="hljs-string"><span
                        class="hljs-string">"xxxx@xx.com"</span></span>
    git config  user<span class="hljs-selector-class"><span class="hljs-selector-class">.name</span></span> <span
                            class="hljs-string"><span class="hljs-string">"suzie"</span></span></code></pre>
            <h2>测试</h2>
            <p>
                <span class="mdeditor-inline-code">ssh -T git.oschina.net</span>
            </p>
            <p>config中user设为git才能成功测试
            </p>
            <p class="mdeditor-warning">
                github如果使用 Clone with HTTPS，push 时候每次都要输入用户名密码，会比较麻烦，使用 Clone with SSH 则不会有这个问题。</p>
        </div>
        <v-comment :data="comments" placeholder="支持部分markdown语法" :enable-submit="!!loginedUser.user_name">
            <template slot="form-foot">
                <v-btn type="primary" @click.native="githubAuth" v-if="!loginedUser.user_name"><svg style="vertical-align:-2px;margin-right:4px;" height="16" width="16" viewBox="0 0 16 16" version="1.1" aria-hidden="true"><path fill="#fff" fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>GitHub 授权登录</v-btn>
                <v-btn type="primary" v-if="!loginedUser.user_name" @click.native="showLogin">账号登录</v-btn>
            </template>
        </v-comment>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loginedUser: {
            },
            comments: [
                {
                    "id": 161,
                    "article_id": 71,
                    "content": "完成【配置loader】那一步完成了为啥偏偏就不能预览about，各种报错，如：You may need an appropriate loader to handle this file type. 代码：https://github.com/vimplus/Vue2-Demo.git",
                    "reply_to": null,
                    "ip": "218.17.0.194",
                    "reply_time": "2017-03-09 14:02:10",
                    "parent_id": 0,
                    "top_id": 0,
                    "nick_name": "txBoy",
                    "type": "article",
                    "permission": 0
                },
                {
                    "avatar":"https://avatars3.githubusercontent.com/u/10354498?v=4",
                    "id": 162,
                    "article_id": 71,
                    "content": "你test: '/\\.vue$/',写错了，test是正则表达式，不是字符串，另外vue和vue-router不能用require的方式了，入口JS的内容已经更新。",
                    "reply_to": "txBoy",
                    "ip": "221.232.135.233",
                    "reply_time": "2017-03-09 14:46:04",
                    "parent_id": 161,
                    "top_id": 161,
                    "nick_name": "qinshenxue.com",
                    "type": "article",
                    "permission": 0
                },
                {
                    "avatar":"https://avatars3.githubusercontent.com/u/10354498?v=4",
                    "id": 163,
                    "article_id": 71,
                    "content": "好吧，更新太快了，我自己本来还想用import方式写还怕不支持，多谢指点",
                    "reply_to": "qinshenxue.com",
                    "ip": "218.17.0.194",
                    "reply_time": "2017-03-09 14:50:07",
                    "parent_id": 162,
                    "top_id": 161,
                    "nick_name": "txBoy",
                    "type": "article",
                    "permission": 0
                },
                {
                    "id": 164,
                    "article_id": 71,
                    "content": "是我疏忽，更新版本后，没有把影响点写明，谢谢告知。",
                    "reply_to": "txBoy",
                    "ip": "221.232.135.233",
                    "reply_time": "2017-03-09 14:53:36",
                    "parent_id": 163,
                    "top_id": 161,
                    "nick_name": "qinshenxue.com",
                    "type": "article",
                    "permission": 0
                },
                {
                    "id": 165,
                    "article_id": 71,
                    "content": "跑了一下你的demo，报错：ERROR in chunk app [entry]\njs/[name].js?[chunkhash]\nCannot use [chunkhash] for chunk in 'js/[name].js?[chunkhash]' (use [hash] instead)\n \n在webpack.base.config.js 里面去掉[chunkhash]才行",
                    "reply_to": "qinshenxue.com",
                    "ip": "218.17.0.194",
                    "reply_time": "2017-03-09 14:55:49",
                    "parent_id": 164,
                    "top_id": 161,
                    "nick_name": "txBoy",
                    "type": "article",
                    "permission": 0
                },
                {
                    "id": 166,
                    "article_id": 71,
                    "content": "是的。dev不支持chunkhash，谢谢指正",
                    "reply_to": "txBoy",
                    "ip": "221.232.135.233",
                    "reply_time": "2017-03-09 14:56:27",
                    "parent_id": 165,
                    "top_id": 161,
                    "nick_name": "qinshenxue.com",
                    "type": "article",
                    "permission": 0
                },
                {
                    "id": 168,
                    "article_id": 71,
                    "content": "配置文件中配有chunkhash和contenthash的js、css文件生成到static中后为什么没有见到有对应hash值，但是生成的index.html文件中的引用却有hash值?",
                    "reply_to": null,
                    "ip": "106.38.73.242",
                    "reply_time": "2017-03-15 17:15:27",
                    "parent_id": 0,
                    "top_id": 0,
                    "nick_name": "steven",
                    "type": "article",
                    "permission": 0
                },
                {
                    "id": 169,
                    "article_id": 71,
                    "content": "因为配置的是query的方式（style.css?[contenthash:8]）防止缓存的。如果你想在文件名中体现，那么就应该配置成css/style.[contenthash:8].css，js/[name].[chunkhash].js",
                    "reply_to": "steven",
                    "ip": "221.232.135.233",
                    "reply_time": "2017-03-15 17:21:05",
                    "parent_id": 168,
                    "top_id": 168,
                    "nick_name": "qinshenxue.com",
                    "type": "article",
                    "permission": 0
                },
                {
                    "id": 170,
                    "article_id": 71,
                    "content": "不在文件名中体现也可以防止缓存啊？哪里有对query方式的介绍吗？",
                    "reply_to": "qinshenxue.com",
                    "ip": "106.38.73.242",
                    "reply_time": "2017-03-15 17:30:02",
                    "parent_id": 169,
                    "top_id": 168,
                    "nick_name": "steven",
                    "type": "article",
                    "permission": 0
                },
                {
                    "id": 171,
                    "article_id": 71,
                    "content": "嗯。相当于加个版本戳。",
                    "reply_to": "steven",
                    "ip": "221.232.135.233",
                    "reply_time": "2017-03-15 17:42:28",
                    "parent_id": 170,
                    "top_id": 168,
                    "nick_name": "qinshenxue.com",
                    "type": "article",
                    "permission": 0
                },
                {
                    "id": 172,
                    "article_id": 71,
                    "content": "就像将 jquery ajax 的 cache 设置为 false 后，每个请求后面会加一个时间戳，这样浏览器就会识别为新的请求",
                    "reply_to": "steven",
                    "ip": "221.232.135.233",
                    "reply_time": "2017-03-15 17:48:29",
                    "parent_id": 170,
                    "top_id": 168,
                    "nick_name": "qinshenxue.com",
                    "type": "article",
                    "permission": 0
                },
                {
                    "id": 173,
                    "article_id": 71,
                    "content": "嗯嗯，了解了，thank you~。再请教一下，你写的这些看完之后有没有比较好的学习或可以实践的项目啊，就是文件结构或功能比较复杂一点的",
                    "reply_to": "qinshenxue.com",
                    "ip": "106.38.73.242",
                    "reply_time": "2017-03-15 17:53:45",
                    "parent_id": 172,
                    "top_id": 168,
                    "nick_name": "steven",
                    "type": "article",
                    "permission": 0
                },
                {
                    "id": 174,
                    "article_id": 71,
                    "content": "可以用 vue 去模仿实现一个 app 或网站，比如[https://github.com/vuejs/awesome-vue#appswebsites](https://github.com/vuejs/awesome-vue#appswebsites)",
                    "reply_to": "steven",
                    "ip": "221.232.135.233",
                    "reply_time": "2017-03-15 17:56:13",
                    "parent_id": 173,
                    "top_id": 168,
                    "nick_name": "qinshenxue.com",
                    "type": "article",
                    "permission": 0
                },
                {
                    "id": 187,
                    "article_id": 71,
                    "content": "有两个小问题：\n1、是npm run dev后不会启动浏览器\n2、utils.js中使用的process.env.NODE_ENV的process不知道是哪里定义的",
                    "reply_to": null,
                    "ip": "106.38.73.242",
                    "reply_time": "2017-03-16 13:45:20",
                    "parent_id": 0,
                    "top_id": 0,
                    "nick_name": "steven",
                    "type": "article",
                    "permission": 0
                },
                {
                    "id": 188,
                    "article_id": 71,
                    "content": "process 是 NodeJS process模块，用来与当前进程互动，可以通过全局变量process访问，具体请查阅 NodeJS API",
                    "reply_to": "steven",
                    "ip": "221.232.135.233",
                    "reply_time": "2017-03-16 14:06:11",
                    "parent_id": 187,
                    "top_id": 187,
                    "nick_name": "qinshenxue.com",
                    "type": "article",
                    "permission": 0
                },
                {
                    "id": 189,
                    "article_id": 71,
                    "content": "哦哦，这个了解了～。那npm run dev后不会自动启动浏览器呢",
                    "reply_to": "qinshenxue.com",
                    "ip": "106.38.73.242",
                    "reply_time": "2017-03-16 14:27:25",
                    "parent_id": 188,
                    "top_id": 187,
                    "nick_name": "steven",
                    "type": "article",
                    "permission": 0
                },
                {
                    "id": 190,
                    "article_id": 71,
                    "content": "控制台显示了 Listening at *** 吗 ？",
                    "reply_to": "steven",
                    "ip": "221.232.135.233",
                    "reply_time": "2017-03-16 14:29:56",
                    "parent_id": 189,
                    "top_id": 187,
                    "nick_name": "qinshenxue.com",
                    "type": "article",
                    "permission": 0
                },
                {
                    "id": 191,
                    "article_id": 71,
                    "content": "显示，手动在浏览器输入http://localhost:8000可以正常访问",
                    "reply_to": "qinshenxue.com",
                    "ip": "106.38.73.242",
                    "reply_time": "2017-03-16 14:35:06",
                    "parent_id": 190,
                    "top_id": 187,
                    "nick_name": "steven",
                    "type": "article",
                    "permission": 0
                },
                {
                    "id": 192,
                    "article_id": 71,
                    "content": "我这里使用的是child_process，没有做兼容各种系统处理，建议你用https://www.npmjs.com/package/opn来替换process.exec(`start ${url}`)，后面我会把文章的中替换为opn。",
                    "reply_to": "steven",
                    "ip": "221.232.135.233",
                    "reply_time": "2017-03-16 14:41:13",
                    "parent_id": 191,
                    "top_id": 187,
                    "nick_name": "qinshenxue.com",
                    "type": "article",
                    "permission": 0
                },
                {
                    "id": 193,
                    "article_id": 71,
                    "content": "赞，可以了",
                    "reply_to": "qinshenxue.com",
                    "ip": "106.38.73.242",
                    "reply_time": "2017-03-16 15:04:40",
                    "parent_id": 192,
                    "top_id": 187,
                    "nick_name": "steven",
                    "type": "article",
                    "permission": 0
                },
                {
                    "id": 198,
                    "article_id": 71,
                    "content": "为啥我npm run dev 会提示我node或者npm版本过低，都升到最高以后，npm run dev还是报同样的错误\n\nvue2test@1.0.0 dev: `webpack-dev-server --hot --inline`\nnpm ERR! Exit status 1\nnpm ERR! \nnpm ERR! Failed at the vue2test@1.0.0 dev script 'webpack-dev-server --hot --inline'.\nnpm ERR! Make sure you have the latest version of node.js and npm installed.\nnpm ERR! If you do, this is most likely a problem with the vue2test package,\nnpm ERR! not with npm itself.\nnpm ERR! Tell the author that this fails on your system:\nnpm ERR!     webpack-dev-server --hot --inline\nnpm ERR! You can get information on how to open an issue for this project with:\nnpm ERR!     npm bugs vue2test\nnpm ERR! Or if that isn't available, you can get their info via:\nnpm ERR!     npm owner ls vue2test\nnpm ERR! There is likely additional logging output above.",
                    "reply_to": null,
                    "ip": "183.14.29.227",
                    "reply_time": "2017-03-16 23:03:34",
                    "parent_id": 0,
                    "top_id": 0,
                    "nick_name": "yezhiwei",
                    "type": "article",
                    "permission": 0
                },
                {
                    "id": 199,
                    "article_id": 71,
                    "content": "可以用 vue-cli 来测试下是否有同样问题。",
                    "reply_to": "yezhiwei",
                    "ip": "221.232.135.233",
                    "reply_time": "2017-03-17 08:34:16",
                    "parent_id": 198,
                    "top_id": 198,
                    "nick_name": "qinshenxue.com",
                    "type": "article",
                    "permission": 0
                },
                {
                    "id": 224,
                    "article_id": 71,
                    "content": "我用这个配置为基础写了一个复杂点的demo结果报错了，，，能交流一下吗",
                    "reply_to": null,
                    "ip": "106.38.73.242",
                    "reply_time": "2017-03-22 19:27:59",
                    "parent_id": 0,
                    "top_id": 0,
                    "nick_name": "steven",
                    "type": "article",
                    "permission": 0
                },
                {
                    "id": 227,
                    "article_id": 71,
                    "content": "你好我，也是一个前端开发人员，自己做了一个公众号:前端人，打算在公众号里面开设一个，前端优秀博客推荐板块，不知道能否邀请您的加入，方便的话，可以留下您的常用博客地址吗:smiley:    然后个人简介，我会从博客中选取",
                    "reply_to": null,
                    "ip": "58.246.1.234",
                    "reply_time": "2017-03-24 11:23:34",
                    "parent_id": 0,
                    "top_id": 0,
                    "nick_name": "摩卡",
                    "type": "article",
                    "permission": 0
                },
                {
                    "id": 228,
                    "article_id": 71,
                    "content": "嗯，相互学习，常用博客地址就是这个[http://www.qinshenxue.com](http://www.qinshenxue.com)",
                    "reply_to": "摩卡",
                    "ip": "221.232.135.233",
                    "reply_time": "2017-03-24 11:26:28",
                    "parent_id": 227,
                    "top_id": 227,
                    "nick_name": "qinshenxue.com",
                    "type": "article",
                    "permission": 0
                },
                {
                    "id": 231,
                    "article_id": 71,
                    "content": "问题：vue中样式build时没有提取出来，build后混在js中了，看了webpack文档和上边你写的都没发现哪里有毛病 相关配置： { test: /\\.vue$/, use: { loader: \"vue-loader\", options: { loaders: { css: ExtractTextPlugin.extract({ use: ['css-loader', 'postcss-loader'] }), stylus: ExtractTextPlugin.extract({ use: ['css-loader', 'postcss-loader', 'stylus-loader'] }), scss: ExtractTextPlugin.extract({ use: ['css-loader', 'postcss-loader', 'sass-loaderr'] }) } } } } plugins: [ new ExtractTextPlugin({ filename: \"css/style.[contenthash:8].css\" }), ...\r\n",
                    "reply_to": null,
                    "ip": "106.38.73.242",
                    "reply_time": "2017-03-24 13:33:48",
                    "parent_id": 0,
                    "top_id": 0,
                    "nick_name": "steven",
                    "type": "article",
                    "permission": 0
                },
                {
                    "id": 232,
                    "article_id": 71,
                    "content": "你这个配置是对的。可以在你本地试下[https://github.com/qinshenxue/vue2-vue-router2-webpack2](https://github.com/qinshenxue/vue2-vue-router2-webpack2)，看能不能正常提取",
                    "reply_to": "steven",
                    "ip": "221.232.135.233",
                    "reply_time": "2017-03-24 13:37:02",
                    "parent_id": 231,
                    "top_id": 231,
                    "nick_name": "qinshenxue.com",
                    "type": "article",
                    "permission": 0
                },
                {
                    "id": 233,
                    "article_id": 71,
                    "content": "我不想用stylus-loader，改成sass-loader一直报错ERROR in ./src/scss/global.scss\nModule build failed: ReferenceError: document is not defined\n    at addStyle (E:\\WEB-Project\\Vue2-Demo\\node_modules\\vue-style-loader\\index.js!……能帮我看看是什么问题么？谢谢！ 代码：https://github.com/vimplus/Vue2-Demo.git",
                    "reply_to": null,
                    "ip": "218.17.0.194",
                    "reply_time": "2017-03-28 19:37:30",
                    "parent_id": 0,
                    "top_id": 0,
                    "nick_name": "txBoy",
                    "type": "article",
                    "permission": 0
                },
                {
                    "id": 234,
                    "article_id": 71,
                    "content": "好的。有问题我就直接提issue ",
                    "reply_to": "txBoy",
                    "ip": "221.232.135.233",
                    "reply_time": "2017-03-29 14:24:52",
                    "parent_id": 233,
                    "top_id": 233,
                    "nick_name": "qinshenxue.com",
                    "type": "article",
                    "permission": 0
                },
                {
                    "id": 235,
                    "article_id": 71,
                    "content": "已经在github上回复你了，[https://github.com/vimplus/Vue2-Demo/issues/1](https://github.com/vimplus/Vue2-Demo/issues/1)",
                    "reply_to": "txBoy",
                    "ip": "221.232.135.233",
                    "reply_time": "2017-03-29 16:03:32",
                    "parent_id": 233,
                    "top_id": 233,
                    "nick_name": "qinshenxue.com",
                    "type": "article",
                    "permission": 0
                },
                {
                    "id": 236,
                    "article_id": 71,
                    "content": "谢谢你~原来是你提的issue，你说的那个node-sass安装不了的问题不是我出现的问题，我也正好给出了我通常的解决办法。我的问题是因为我的webpack配置有问题，vue-loader那个options里面的loaders一开始少了vue-style-loader,一开始这个vue-style-loader是写在.css|scss那里了。",
                    "reply_to": "qinshenxue.com",
                    "ip": "27.38.116.86",
                    "reply_time": "2017-03-29 22:20:26",
                    "parent_id": 234,
                    "top_id": 233,
                    "nick_name": "txBoy",
                    "type": "article",
                    "permission": 0
                },
                {
                    "id": 237,
                    "article_id": 71,
                    "content": "我直接clone你的项目，在我本地运行，除了发现issue中的问题外，没发现别的问题呢。你github上的是有问题的版本吗？",
                    "reply_to": "txBoy",
                    "ip": "221.232.135.233",
                    "reply_time": "2017-03-30 08:26:57",
                    "parent_id": 236,
                    "top_id": 233,
                    "nick_name": "qinshenxue.com",
                    "type": "article",
                    "permission": 0
                },
                {
                    "id": 238,
                    "article_id": 71,
                    "content": "如果配置ExtractTextPlugin.extract提取css，vue-loader options正确配置为：\n``` js\n{\n    test: /\\.vue$/,\n    loader: \"vue-loader\",\n    options: {\n        loaders: {\n            css: ExtractTextPlugin.extract({\n                use: 'css-loader'\n            }),\n            sass: ExtractTextPlugin.extract({\n                fallback: \"vue-style-loader\",\n                use: [\"css-loader\", \"sass-loader\"]\n            })\n        }\n}\n```",
                    "reply_to": "txBoy",
                    "ip": "221.232.135.233",
                    "reply_time": "2017-03-30 08:34:50",
                    "parent_id": 236,
                    "top_id": 233,
                    "nick_name": "qinshenxue.com",
                    "type": "article",
                    "permission": 0
                },
                {
                    "id": 242,
                    "article_id": 71,
                    "content": "{\n    test: /\\.js$/,\n    use: \"babel-loader\",\n    include: [path.resolve(__dirname, 'src')]\n}\n为什么我这了path会找不到的",
                    "reply_to": null,
                    "ip": "219.137.142.242",
                    "reply_time": "2017-04-26 11:22:29",
                    "parent_id": 0,
                    "top_id": 0,
                    "nick_name": "舍予",
                    "type": "article",
                    "permission": 0
                },
                {
                    "id": 243,
                    "article_id": 71,
                    "content": "```js\nvar path=require('path')\n```",
                    "reply_to": "舍予",
                    "ip": "221.232.135.233",
                    "reply_time": "2017-04-26 11:24:35",
                    "parent_id": 242,
                    "top_id": 242,
                    "nick_name": "qinshenxue.com",
                    "type": "article",
                    "permission": 0
                },
                {
                    "id": 244,
                    "article_id": 71,
                    "content": "灰常感谢，想问一下引入的这个东西是起什么作用的",
                    "reply_to": "qinshenxue.com",
                    "ip": "219.137.142.242",
                    "reply_time": "2017-04-26 11:26:12",
                    "parent_id": 243,
                    "top_id": 242,
                    "nick_name": "舍予",
                    "type": "article",
                    "permission": 0
                },
                {
                    "id": 245,
                    "article_id": 71,
                    "content": "这个你就要看看NodeJS文档了。",
                    "reply_to": "舍予",
                    "ip": "221.232.135.233",
                    "reply_time": "2017-04-26 11:27:00",
                    "parent_id": 244,
                    "top_id": 242,
                    "nick_name": "qinshenxue.com",
                    "type": "article",
                    "permission": 0
                }
            ]

        }
    },
    methods: {
        githubAuth() {
            location.href = 'https://github.com/login/oauth/authorize?client_id=916497989a58f509ce34&redirect_uri=http://www.qinshenxue.com/user/githubauth&state=' + location.href
        },
        showLogin(){
            this.loginedUser={
                user_name:'qinshenxue'
            }
        }
    }
}
</script>
<style lang="stylus">
</style>
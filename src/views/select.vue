<template>
    <div class="view-comp view-form-select">
        <h2>
            下拉框
        </h2>

        <h3>
            单选
        </h3>
        <vui-select :options="options1" style="width:400px" v-model="selected1"></vui-select>
        <pre><code class="javascript hljs">&lt;vui-select :options=<span
                class="hljs-string">"options2"</span> style=<span class="hljs-string">"width:400px"</span> v-model=<span
                class="hljs-string">"selected2"</span>&gt;<span class="xml"><span class="hljs-tag">&lt;/<span
                class="hljs-name">vui-select</span>&gt;</span></span></code></pre>
        <h3>
            多选（multiple）
        </h3>
        <vui-select :options="options2" style="width:400px" multiple v-model="selected2"></vui-select>
        <pre><code class="javascript hljs">&lt;vui-select :options=<span
                class="hljs-string">"options2"</span> style=<span class="hljs-string">"width:400px"</span> multiple v-model=<span
                class="hljs-string">"selected2"</span>&gt;<span class="xml"><span class="hljs-tag">&lt;/<span
                class="hljs-name">vui-select</span>&gt;</span></span></code></pre>
        <h3>自定义模板（slot="selected"，slot="option"）</h3>
        <vui-select :options="options3" style="width:400px" v-model="selected3">
            <template slot="selected" scope="props">
                <div class="proj-no">{{props.selected.no}}</div>
            </template>
            <template slot="option" scope="props">
                <div class="proj-no">{{props.option.no}}</div>
            </template>
        </vui-select>

        <pre v-pre><code class="xml hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vui-select</span> <span
                class="hljs-attr">:options</span>=<span class="hljs-string">"options3"</span> <span class="hljs-attr">style</span>=<span
                class="hljs-string">"width:400px"</span>  <span class="hljs-attr">v-model</span>=<span
                class="hljs-string">"selected3"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span
            class="hljs-string">"selected"</span> <span class="hljs-attr">scope</span>=<span
            class="hljs-string">"props"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
                class="hljs-string">"proj-no"</span>&gt;</span>{{props.selected.no}}<span class="hljs-tag">&lt;/<span
                    class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span
            class="hljs-string">"option"</span> <span class="hljs-attr">scope</span>=<span
            class="hljs-string">"props"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
                class="hljs-string">"proj-no"</span>&gt;</span>{{props.option.no}}<span class="hljs-tag">&lt;/<span
                    class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">vui-select</span>&gt;</span></code></pre>
    </div>
</template>
<style lang="less">
    .view-form-select {
        .proj-no {
            color: #999;
        }
    }

</style>

<script type="text/javascript">
    export default{
        computed: {
            options1: function () {
                return this.options.slice(0);
            },
            options2: function () {
                return this.options.slice(0);
            },
            options3: function () {
                return this.options.slice(0);
            }
        },
        data(){
            return {
                selected1: null,
                selected2: null,
                selected3: null,
                options: [{
                    label: '张小三',
                    no: '15900001111',
                    value: 'a'
                }, {
                    label: '李小四',
                    no: '15911112222',
                    value: 'b'
                }, {
                    label: '王小五',
                    no: '15922223333',
                    value: 'c'
                }, {
                    label: '刘小六',
                    no: '15933334444',
                    value: 'd'
                }, {
                    label: '冯小七',
                    no: '15944445555',
                    value: 'e'
                }, {
                    label: '马小八',
                    no: '15955556666',
                    value: 'f'
                }]
            }
        }
    }
</script>

<template>
    <doc-box class="doc-basic-grid">
        <doc-title>Grid（栅格）</doc-title>
        <doc-title sub>12栅格</doc-title>
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

        <doc-title sub>自定义栅格间距</doc-title>
        <p>在&lt;vui-row&gt;上增加属性配置gutter，
            <doc-inlinecode>:gutter="50"</doc-inlinecode>效果如下：</p>
        <vui-row :gutter="50">
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
        <p>
            <doc-inlinecode>:gutter="0"</doc-inlinecode>效果如下：</p>
        <vui-row :gutter="0">
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


        <doc-title sub>
            响应式布局
        </doc-title>
        <p>和Bootstrap响应式布局相同，可以把调整浏览器窗口来查看效果</p>
        <vui-row>
            <vui-col :xs="12" :md="6" :lg="3">
                <div class="content">xs=12 md=6 lg=3</div>
            </vui-col>
            <vui-col :xs="12" :md="6" :lg="3">
                <div class="content">xs=12 md=6 lg=3</div>
            </vui-col>
            <vui-col :xs="12" :md="6" :lg="3">
                <div class="content">xs=12 md=6 lg=3</div>
            </vui-col>
            <vui-col :xs="12" :md="6" :lg="3">
                <div class="content">xs=12 md=6 lg=3</div>
            </vui-col>


        </vui-row>

        <doc-title sub>栅格偏移（offset）、左右移动（push、pull）</doc-title>
        <p>仍然和Bootstrap相同</p>
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
            <vui-col :span="2">
                <div class="content">span=2</div>
            </vui-col>
            <vui-col :span="2" :offset="2">
                <div class="content">span=2 offset=2</div>
            </vui-col>
            <vui-col :span="2" :offset="2">
                <div class="content">span=2 offset=2</div>
            </vui-col>
        </vui-row>
        <vui-row>
            <vui-col :span="2">
                <div class="content">span=2</div>
            </vui-col>
            <vui-col :span="2" :push="2">
                <div class="content">span=2 push=2</div>
            </vui-col>
            <vui-col :span="2" :push="4">
                <div class="content">span=2 push=4</div>
            </vui-col>
        </vui-row>

        <doc-title sub>vui-row props</doc-title>
        <doc-table>

            <tr>
                <td>gutter</td>
                <td>栅格间距，建议设为偶数</td>
                <td>Number</td>
                <td></td>
                <td>30</td>
            </tr>

        </doc-table>

        <doc-title sub>vui-col props</doc-title>
        <doc-table>

            <tr>
                <td>span</td>
                <td>栅格列数</td>
                <td>Number</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>offset</td>
                <td>左侧间隔格数</td>
                <td>Number</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>push</td>
                <td>向右移动格数</td>
                <td>Number</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>pull</td>
                <td>向左移动格数</td>
                <td>Number</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>xs</td>
                <td>&lt;768px 响应式栅格数或者栅格属性对象</td>
                <td>Number或Object</td>
                <td>
                    <doc-inlinecode>:xs="2"</doc-inlinecode>
                </td>
                <td></td>
            </tr>

            <tr>
                <td>sm</td>
                <td>&ge;768px 响应式栅格数或者栅格属性对象</td>
                <td>Number或Object</td>
                <td>
                    <doc-inlinecode>:sm="{span:2,offset:2}"</doc-inlinecode>
                </td>
                <td></td>
            </tr>

            <tr>
                <td>md</td>
                <td>&ge;992px 响应式栅格数或者栅格属性对象</td>
                <td>Number或Object</td>
                <td>
                    <doc-inlinecode>:md="{span:2,offset:2,pull:2}"</doc-inlinecode>
                </td>
                <td></td>
            </tr>
            <tr>
                <td>lg</td>
                <td>&ge;1220px 响应式栅格数或者栅格属性对象</td>
                <td>Number或Object</td>
                <td>
                    <doc-inlinecode>:lg="{span:2,offset:2,push:2}"</doc-inlinecode>
                </td>
                <td></td>
            </tr>
            <tr>
                <td>xl</td>
                <td>&ge;1480px 响应式栅格数或者栅格属性对象</td>
                <td>Number或Object</td>
                <td><doc-inlinecode>:xl="{span:2,offset:2,pull:2,push:2}"</doc-inlinecode></td>
                <td></td>
            </tr>
        </doc-table>

    </doc-box>
</template>
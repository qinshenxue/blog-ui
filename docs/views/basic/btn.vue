<template>
        <doc-box class="doc-basic-btn">
                <doc-title>Button（按钮）</doc-title>


                <doc-title sub>默认大小</doc-title>
                <div>
                        <v-btn>default</v-btn>
                        <v-btn type="primary">primary</v-btn>
                        <v-btn type="success">success</v-btn>
                        <v-btn type="warning">warning</v-btn>
                        <v-btn type="danger">danger</v-btn>
                        <v-btn disabled>disabled</v-btn>
                </div>

                <doc-code><pre><code>&lt;v-btn&gt;default&lt;/v-btn&gt;
&lt;v-btn type=&quot;primary&quot;&gt;primary&lt;/v-btn&gt;
&lt;v-btn type=&quot;success&quot;&gt;success&lt;/v-btn&gt;
&lt;v-btn type=&quot;warning&quot;&gt;warning&lt;/v-btn&gt;
&lt;v-btn type=&quot;danger&quot;&gt;danger&lt;/v-btn&gt;
&lt;v-btn disabled&gt;disabled&lt;/v-btn&gt;</code></pre></doc-code>


                <h3>小按钮（sm）</h3>
                <div>
                        <v-btn sm>default</v-btn>
                        <v-btn type="primary" sm>primary</v-btn>
                        <v-btn type="success" sm>success</v-btn>
                        <v-btn type="warning" sm>warning</v-btn>
                        <v-btn type="danger" sm>danger</v-btn>
                        <v-btn disabled sm>disabled</v-btn>
                </div>


                <doc-code><pre><code>&lt;v-btn sm&gt;default&lt;/v-btn&gt;
&lt;v-btn type=&quot;primary&quot; sm&gt;primary&lt;/v-btn&gt;
&lt;v-btn type=&quot;success&quot; sm&gt;success&lt;/v-btn&gt;
&lt;v-btn type=&quot;warning&quot; sm&gt;warning&lt;/v-btn&gt;
&lt;v-btn type=&quot;danger&quot; sm&gt;danger&lt;/v-btn&gt;
&lt;v-btn disabled sm&gt;disabled&lt;/v-btn&gt;</code></pre></doc-code>

                <h3>大按钮（lg）</h3>
                <div>
                        <v-btn lg>default</v-btn>
                        <v-btn type="primary" lg>primary</v-btn>
                        <v-btn type="success" lg>success</v-btn>
                        <v-btn type="warning" lg>warning</v-btn>
                        <v-btn type="danger" lg>danger</v-btn>
                        <v-btn disabled lg>disabled</v-btn>
                </div>

                <doc-code><pre><code>&lt;v-btn lg&gt;default&lt;/v-btn&gt;
&lt;v-btn type=&quot;primary&quot; lg&gt;primary&lt;/v-btn&gt;
&lt;v-btn type=&quot;success&quot; lg&gt;success&lt;/v-btn&gt;
&lt;v-btn type=&quot;warning&quot; lg&gt;warning&lt;/v-btn&gt;
&lt;v-btn type=&quot;danger&quot; lg&gt;danger&lt;/v-btn&gt;
&lt;v-btn disabled lg&gt;disabled&lt;/v-btn&gt;</code></pre></doc-code>


                <doc-title sub>配置说明</doc-title>

                <doc-table>
                        <tr>
                                <td>type</td>
                                <td>按钮类型</td>
                                <td>String</td>
                                <td>default,primary,success,warning,danger</td>
                                <td>default</td>
                        </tr>

                        <tr>
                                <td>sm</td>
                                <td>是否小按钮</td>
                                <td>Boolean</td>
                                <td></td>
                                <td>false</td>
                        </tr>
                        <tr>
                                <td>lg</td>
                                <td>是否大按钮</td>
                                <td>Boolean</td>
                                <td></td>
                                <td>false</td>
                        </tr>
                        <tr>
                                <td>disabled</td>
                                <td>是否禁用</td>
                                <td>Boolean</td>
                                <td></td>
                                <td>false</td>
                        </tr>
                </doc-table>
        </doc-box>
</template>
<template>
        <doc-box class="doc-basic-btn">
                <doc-title>Button（按钮）</doc-title>


                <doc-title sub>默认大小</doc-title>
                <div>
                        <vui-btn>default</vui-btn>
                        <vui-btn type="primary">primary</vui-btn>
                        <vui-btn type="success">success</vui-btn>
                        <vui-btn type="warning">warning</vui-btn>
                        <vui-btn type="danger">danger</vui-btn>
                        <vui-btn disabled>disabled</vui-btn>
                </div>

                <doc-code><pre><code>&lt;vui-btn&gt;default&lt;/vui-btn&gt;
&lt;vui-btn type=&quot;primary&quot;&gt;primary&lt;/vui-btn&gt;
&lt;vui-btn type=&quot;success&quot;&gt;success&lt;/vui-btn&gt;
&lt;vui-btn type=&quot;warning&quot;&gt;warning&lt;/vui-btn&gt;
&lt;vui-btn type=&quot;danger&quot;&gt;danger&lt;/vui-btn&gt;
&lt;vui-btn disabled&gt;disabled&lt;/vui-btn&gt;</code></pre></doc-code>


                <h3>小按钮（sm）</h3>
                <div>
                        <vui-btn sm>default</vui-btn>
                        <vui-btn type="primary" sm>primary</vui-btn>
                        <vui-btn type="success" sm>success</vui-btn>
                        <vui-btn type="warning" sm>warning</vui-btn>
                        <vui-btn type="danger" sm>danger</vui-btn>
                        <vui-btn disabled sm>disabled</vui-btn>
                </div>


                <doc-code><pre><code>&lt;vui-btn sm&gt;default&lt;/vui-btn&gt;
&lt;vui-btn type=&quot;primary&quot; sm&gt;primary&lt;/vui-btn&gt;
&lt;vui-btn type=&quot;success&quot; sm&gt;success&lt;/vui-btn&gt;
&lt;vui-btn type=&quot;warning&quot; sm&gt;warning&lt;/vui-btn&gt;
&lt;vui-btn type=&quot;danger&quot; sm&gt;danger&lt;/vui-btn&gt;
&lt;vui-btn disabled sm&gt;disabled&lt;/vui-btn&gt;</code></pre></doc-code>

                <h3>大按钮（lg）</h3>
                <div>
                        <vui-btn lg>default</vui-btn>
                        <vui-btn type="primary" lg>primary</vui-btn>
                        <vui-btn type="success" lg>success</vui-btn>
                        <vui-btn type="warning" lg>warning</vui-btn>
                        <vui-btn type="danger" lg>danger</vui-btn>
                        <vui-btn disabled lg>disabled</vui-btn>
                </div>

                <doc-code><pre><code>&lt;vui-btn lg&gt;default&lt;/vui-btn&gt;
&lt;vui-btn type=&quot;primary&quot; lg&gt;primary&lt;/vui-btn&gt;
&lt;vui-btn type=&quot;success&quot; lg&gt;success&lt;/vui-btn&gt;
&lt;vui-btn type=&quot;warning&quot; lg&gt;warning&lt;/vui-btn&gt;
&lt;vui-btn type=&quot;danger&quot; lg&gt;danger&lt;/vui-btn&gt;
&lt;vui-btn disabled lg&gt;disabled&lt;/vui-btn&gt;</code></pre></doc-code>


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
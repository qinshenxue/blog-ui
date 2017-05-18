<template>
    <doc-box class="doc-form-input">
        <doc-title>input</doc-title>
        <doc-title sub></doc-title>
        <vui-row>
            <vui-col :xs="6">
                <v-input type="text" v-model="input1" placeholder="请输入"></v-input>
            </vui-col>
            <vui-col :xs="6">
                <div class="output">输入：{{input1}}</div>
            </vui-col>
        </vui-row>
        <doc-title sub>number</doc-title>

        <vui-row>
            <vui-col :xs="6">
                <v-input type="number" v-model="input2" placeholder="请输入"></v-input>
            </vui-col>
            <vui-col :xs="6">
                <div class="output">输入：{{input2}}</div>
            </vui-col>
        </vui-row>

        <doc-title sub>disabled</doc-title>

        <vui-row>
            <vui-col :xs="6">
                <v-input type="number" disabled placeholder="请输入"></v-input>
            </vui-col>
        </vui-row>


        <doc-title sub>input-group</doc-title>

        <vui-row>
            <vui-col :xs="6">
                <v-input-group>
                    <v-input v-model="input3" type="number" placeholder="请输入数字"></v-input>
                    <div class="unit" slot="append">元</div>
                </v-input-group>
            </vui-col>
            <vui-col :xs="6">
                <div class="output">输入：{{input3}}元</div>
            </vui-col>
        </vui-row>

        <doc-title sub>icon</doc-title>

        <vui-row>
            <vui-col :xs="6">
                <v-input-group>
                    <v-input v-model="input3" type="number" placeholder="请输入数字">
                        <v-icon slot="icon" name="search"></v-icon>
                    </v-input>
                </v-input-group>
            </vui-col>
            <vui-col :xs="6">
                <div class="output">输入：{{input3}}元</div>
            </vui-col>
        </vui-row>
        <!--



                <doc-title sub>多行输入框textarea</doc-title>

                <vui-row>
                    <vui-col :xs="6">
                        <vui-input v-model="text1" type="textarea" placeholder="请输入"></vui-input>
                    </vui-col>
                    <vui-col :xs="6">
                        <div class="output">输入：{{text1}}</div>
                    </vui-col>
                </vui-row>
                <doc-title sub>数字类型输入框</doc-title>

                <vui-row>
                    <vui-col :xs="6">
                        <vui-input v-model="input2" type="number" placeholder="请输入"></vui-input>
                    </vui-col>
                    <vui-col :xs="6">
                        <div class="output">输入：{{input2}}</div>
                    </vui-col>
                </vui-row>

                <doc-title sub>组合类型</doc-title>

                <vui-row>
                    <vui-col :xs="6">
                        <vui-input v-model="input3" type="number" placeholder="请输入数字">
                            <vui-select slot="prepend" style="width:100px;" :options='options' v-model="selected1"></vui-select>

                            <div style="border:1px solid #ccc;text-align:center; padding:6px 15px ;" slot="append">元</div>
                        </vui-input>
                    </vui-col>
                    <vui-col :xs="6">
                        <div class="output">输入：{{input3}}元</div>
                    </vui-col>
                </vui-row>

        -->

    </doc-box>
</template>

<script type="text/javascript">
    export default {
        data() {
            return {
                input1: 'abc',
                input2: '',
                input3: 0,
                text1: '',
                selected1: '',
                options: [{
                    label: '选项A',
                    value: '选项A'
                }, {
                    label: '选项B',
                    value: '选项B'
                }, {
                    label: '选项C',
                    value: '选项C'
                }]
            }
        }
    }
</script>
<style>
    .unit {
        border: 1px solid #ccc;
        border-left: 0;
        text-align: center;
        padding: 6px 15px;
        width: 50px;
    }
</style>
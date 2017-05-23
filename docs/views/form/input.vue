<template>
    <doc-box class="doc-form-input">
        <doc-title>input</doc-title>
        <doc-title sub></doc-title>
        <v-row>
            <v-col :md="12">
                <v-input type="text" v-model="input1" placeholder="请输入" :minlength="10" :maxlength="50" :validations="['required','email']"></v-input>
            </v-col>
            <v-col :md="12">
                <div class="output">输入：{{input1}}</div>
            </v-col>
        </v-row>
        <doc-title sub>number</doc-title>

        <v-row>
            <v-col :md="12">
                <v-input type="number" v-model="input2" placeholder="请输入"></v-input>
            </v-col>
            <v-col :md="12">
                <div class="output">输入：{{input2}}</div>
            </v-col>
        </v-row>

        <doc-title sub>disabled</doc-title>

        <v-row>
            <v-col :md="12">
                <v-input type="number" disabled placeholder="请输入"></v-input>
            </v-col>
        </v-row>


        <doc-title sub>input-group</doc-title>

        <v-row>
            <v-col :md="12">
                <v-input-group>
                    <v-input v-model="input3" type="number" placeholder="请输入数字"></v-input>
                    <div class="unit" slot="append">元</div>
                </v-input-group>
            </v-col>
            <v-col :md="12">
                <div class="output">输入：{{input3}}元</div>
            </v-col>
        </v-row>

        <doc-title sub>icon</doc-title>

        <v-row>
            <v-col :md="12">
                <v-input-group>
                    <v-input v-model="input3" type="number" placeholder="请输入数字">
                        <v-icon slot="icon" name="search"></v-icon>
                    </v-input>
                </v-input-group>
            </v-col>
            <v-col :md="12">
                <div class="output">输入：{{input3}}元</div>
            </v-col>
        </v-row>
        <!--



                <doc-title sub>多行输入框textarea</doc-title>

                <v-row>
                    <v-col :md="12">
                        <v-input v-model="text1" type="textarea" placeholder="请输入"></v-input>
                    </v-col>
                    <v-col :md="12">
                        <div class="output">输入：{{text1}}</div>
                    </v-col>
                </v-row>
                <doc-title sub>数字类型输入框</doc-title>

                <v-row>
                    <v-col :md="12">
                        <v-input v-model="input2" type="number" placeholder="请输入"></v-input>
                    </v-col>
                    <v-col :md="12">
                        <div class="output">输入：{{input2}}</div>
                    </v-col>
                </v-row>

                <doc-title sub>组合类型</doc-title>

                <v-row>
                    <v-col :md="12">
                        <v-input v-model="input3" type="number" placeholder="请输入数字">
                            <v-select slot="prepend" style="width:100px;" :options='options' v-model="selected1"></v-select>

                            <div style="border:1px solid #ccc;text-align:center; padding:6px 15px ;" slot="append">元</div>
                        </v-input>
                    </v-col>
                    <v-col :md="12">
                        <div class="output">输入：{{input3}}元</div>
                    </v-col>
                </v-row>

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
<template>
    <div class="view-comp view-comp-input">
        <h2>
            输入框
        </h2>
        <h3>text</h3>
        <vui-input v-model="input1" placeholder="请输入"></vui-input>
        <div class="output">输入：{{input1}}</div>
        <h3>textarea</h3>
        <vui-input v-model="txt1" type="textarea" placeholder="请输入"></vui-input>
        <div class="output">输入：{{txt1}}</div>


        <h3>number</h3>
        <vui-input v-model="input2" type="number" placeholder="请输入数字"></vui-input>
        <div class="output">输入：{{input2}}</div>
        <h3>自定义模板</h3>

        <vui-input v-model="input3" type="number" placeholder="请输入数字">
            <vui-select slot="prepend" style="width:100px;" :options='options' v-model="selected1"></vui-select>
            <div style="border:1px solid #ccc;text-align:center; padding:6px 15px ;" slot="append">元</div>
        </vui-input>
        <div class="output">输入：{{selected1}} {{input3}} 元</div>

        <vui-input v-model="input4" type="number" placeholder="请输入数字">
            <div style="border:1px solid #ccc;text-align:center; padding:6px 15px ;" slot="prepend">$</div>
            <vui-select slot="append" style="width:100px;" :options='options' v-model="selected2"></vui-select>
        </vui-input>
        <div class="output">输入：$ {{input4}} {{selected2}}</div>

    </div>
</template>


<script type="text/javascript">

    export default{
        data(){
            return {
                txt1:'',
                input1: '',
                input2: '',
                input3: '',
                input4: '',
                selected1: '',
                selected2: '',
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
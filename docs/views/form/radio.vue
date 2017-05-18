<template>
    <doc-box>
        <doc-title>vui-radio（单选框）</doc-title>
        <div>
            <vui-radio v-model="checked" :val="1">备选项</vui-radio>
            <vui-radio v-model="checked" :val="2" style="margin-left:10px;">备选项</vui-radio>
        </div>
    </doc-box>
</template>
<script type="text/javascript">
    export default{
        data(){
            return {
                checked: 1
            }
        }
    }
</script>

<template>
    <div class="view-comp-tree view-comp">
        <h2>Radio</h2>
        <h3>v-model绑定值</h3>
        <div>
            <vui-radio v-model="checked" :val="1">备选项</vui-radio>
            <vui-radio v-model="checked" :val="2" style="margin-left:10px;">备选项</vui-radio>
        </div>
    </div>
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

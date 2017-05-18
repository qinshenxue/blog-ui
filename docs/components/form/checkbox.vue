<template>
    <doc-box>
        <doc-title>vui-checkbox（复选框）</doc-title>
        <div>
            <vui-checkbox v-model="checked" :val="1">JS</vui-checkbox>
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

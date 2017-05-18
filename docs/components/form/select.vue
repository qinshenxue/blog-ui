<template>
    <doc-box>
        <doc-title>vui-select（下拉框）</doc-title>

        <doc-title sub>单选</doc-title>
        <vui-select :options="options" style="width:400px" v-model="selected1"></vui-select>
<doc-title sub>多选</doc-title>

<vui-select :options="options" style="width:400px" multiple v-model="selected2"></vui-select>
<doc-title sub>自定义模板</doc-title>
<vui-select :options="options" style="width:400px" v-model="selected3">
<template slot="selected" scope="props">
    <div class="proj-no">{{props.selected.no}}</div>
</template>
<template slot="option" scope="props">
    <div class="proj-no">{{props.option.no}}</div>
</template>
</vui-select>


</doc-box>
</template>

<script type="text/javascript">
    export default {
        data() {
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
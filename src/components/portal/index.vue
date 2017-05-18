<template>
    <div class="v-portal">
        <div class="v-portal_north">
            <slot name="north"></slot>
        </div>
        <div class="v-portal_west">
            <slot name="west"></slot>
        </div>
        <div class="v-portal_center">
            <slot></slot>
        </div>
        <div class="v-portal_east">
            <slot name="east"></slot>
        </div>
        <div class="v-portal_south">
            <slot name="south"></slot>
        </div>
    </div>
</template>
<script type="text/javascript">
    export default{
        name: 'v-portal',
        data(){
            return {}
        }
    }
</script>

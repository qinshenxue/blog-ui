<template>
    <div class="v-dropdown" @mouseenter="visible=true" @mouseleave="visible=false">
        <div class="v-dropdown_link">
            <slot></slot>
        </div>
        <transition name="fade">
            <div class="v-dropdown_menu" v-show="visible">
                <slot name="menu"></slot>
            </div>
        </transition>
    </div>
</template>
<script>
    export default{
        name: 'v-dropdown',
        data(){
            return {
                visible: false
            }
        }
    }
</script>
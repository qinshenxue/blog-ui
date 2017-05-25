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
<style lang="stylus">
    .v-dropdown
        position relative

    .v-dropdown_menu
        position absolute
        top 100%
        left 50%
        transform translate3d(-50%, 0, 0)
        background #fff
        border 1px solid #ccc
        box-shadow 0 0 2px 2px rgba(#000, 10%)
        li
            line-height 40px
            padding 0 40px
            white-space nowrap
            border-bottom 1px solid #eee
            cursor pointer
            &:last-child
                border-bottom 0
</style>
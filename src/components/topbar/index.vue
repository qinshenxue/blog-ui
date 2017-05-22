<template>
    <div class="v-topbar">
        <div class="container">
            <div class="v-topbar_left">
                <div class="v-topbar_logo">
                    <img src="../../images/vue.png" alt="logo">
                    UI for BLOG
                </div>
            </div>
            <div class="v-topbar_right">
                <div class="v-topbar_links">
                    <slot name="links"></slot>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'v-topbar'
    }
</script>
<style lang="stylus">
    @import "../../css/vars.styl"
    .v-topbar
        background #f4f4f4
        height 100%
        .container
            display flex
            height @height

    .v-topbar_left
        display flex
        flex 1

    .v-topbar_links
        display flex
        align-items center
        height 100%
        a
            display flex
            align-items center
            height @height
            padding 0 15px
            margin 0 10px
            text-decoration none
            border-bottom 2px solid transparent
            &.active
                border-color $color-theme

    .v-topbar_logo
        display flex
        align-items center
        padding 0 20px
        img
            max-height 30px
</style>
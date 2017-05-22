<template>
    <div class="v-nav">
        <div class="container">
            <div class="v-nav_left">
                <div class="v-nav_logo">
                    <img src="../../images/vue.png" alt="logo">
                    UI for BLOG
                </div>
            </div>
            <div class="v-nav_right">
                <div class="v-nav_links">
                    <a href="javascript:;" class="active">导航</a>
                    <a href="javascript:;">导航</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'v-nav'
    }
</script>
<style lang="stylus">
    @import "../../css/vars.styl"
    .v-nav
        background #f4f4f4
        height 100%
        .container
            display flex
            height @height

    .v-nav_left
        display flex
        flex 1

    .v-nav_links
        display flex
        align-items center
        height 100%
        a
            display flex
            align-items center
            height @height
            padding 0 10px
            margin 0 10px
            text-decoration none
            &.active
                border-bottom 2px solid $color-theme

    .v-nav_logo
        display flex
        align-items center
        padding 0 20px
        img
            max-height 30px
</style>
<template>
    <transition name="fade">
        <div class="v-dialog-wrapper" v-show="visible">
            <transition name="pop">
                <div class="v-dialog" v-show="visible">
                    <div class="v-dialog_head">{{title}}
                        <v-icon class="v-dialog_close" name="close" @click.native="handleCancel"></v-icon>
                    </div>
                    <div class="v-dialog_body">
                        <slot></slot>
                    </div>
                    <div class="v-dialog_foot">
                        <v-btn type="primary"
                               @click.native="handelConfirm">确认
                        </v-btn>
                    </div>
                </div>
            </transition>
        </div>
    </transition>
</template>
<script type="text/javascript">
    export default{
        name: 'v-dialog',
        props: {
            title: String,
            visible: Boolean
        },
        methods: {
            handelConfirm () {
                //this.visible = false;
                //this.$emit('update:visible', false);
                this.$emit('confirm')
            },
            handleCancel () {
                this.$emit('update:visible', false);
                this.$emit('cancel')
            }
        }
    }
</script>
<style lang="stylus">
    @import "../../css/vars.styl"
    .v-dialog-wrapper
        position: fixed;
        top 0
        left 0
        bottom 0
        right 0
        z-index 999
        display flex
        justify-content center
        flex-direction column
        background: rgba(0, 0, 0, .65);

    .v-dialog
        width: 400px;
        background: #fff;
        box-shadow: rgba(0, 0, 0, .2) 0 0 50px 10px;
        z-index: 9999;
        margin-right auto
        margin-left auto

    .v-dialog_body
    .v-dialog_head
    .v-dialog_foot
        padding: 30px;

    .v-dialog_head
        position relative
        font-size $font-size-title
        text-align center
        color: #fff
        background $color-theme

    .v-dialog_close
        position absolute
        top 0
        right 0
        width 30px
        height 30px
        border-bottom-left-radius 30px
        background rgba(#fff, 20%)
        padding 3px 0 0 7px
        cursor pointer
        .v-icon_svg
            fill #fff

    .v-dialog_body
        color: #333;

    .v-dialog_foot
        padding-top 0
        .v-btn
            width 100%

    .fade-enter-active
    .fade-leave-active
    .pop-enter-active
    .pop-leave-active
        transition all 0.2s

    .fade-enter
    .fade-leave-active
        opacity: 0

    .pop-enter
        opacity: 0
        transform: scale(0.8)

    .pop-leave-active
        transform: scale(0.8)
        opacity: 0
</style>
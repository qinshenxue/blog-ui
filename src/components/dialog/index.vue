<template>
    <transition name="fade">
        <div class="v-dialog-wrapper" v-show="visible">
            <transition name="pop">
                <div class="v-dialog" v-show="visible">
                    <div class="v-dialog_head">{{title}}
                        <div class="v-dialog_close" @click="handleCancel">
                            <v-icon name="close"></v-icon>
                        </div>
                    </div>
                    <div class="v-dialog_body">
                        <slot></slot>
                    </div>
                    <div class="v-dialog_foot">
                        <v-btn type="primary"
                               ref="confirm"
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
<template>
    <div class="v-dialog-wrapper" v-show="visible">
        <transition name="fade">
            <div class="v-dialog_mask" v-show="visible" @click="handleCancel"></div>
        </transition>
        <transition name="pop">
            <div class="v-dialog" v-show="visible">
                <div class="v-dialog_head">{{title}}</div>
                <div class="v-dialog_body">{{content}}</div>
                <div class="v-dialog_foot">
                    <v-btn type="primary" v-if="enableConfirm"
                           @click.native="handelConfirm">确认
                    </v-btn>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
    export default{
        data () {
            return {
                title: '提示',
                content: '',
                enableConfirm: true,
                enableCancel: true,
                confirmCallback: null,
                visible: false
            }
        },
        methods: {
            handelConfirm () {
                if (this.confirmCallback) {
                    this.confirmCallback();
                }
                this.visible = false;
            },
            handleCancel () {
                this.visible = false;
            }
        }
    }
</script>

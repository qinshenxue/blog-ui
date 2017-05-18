<template>
    <div>
        <transition name="fade">
            <div class="dialog-mask" v-show="visible" @click="visible=false"></div>
        </transition>
        <transition name="pop">
            <div class="dialog" v-show="visible">
                <div class="dialog-head">{{title}}</div>
                <div class="dialog-body">
                    <slot></slot>
                </div>
                <div class="dialog-foot" @click="handleNoBtnClick">
                    <vui-btn style="width:80px;" v-if="showNoBtn"
                             @click.native="handleNoBtnClick">取消
                    </vui-btn>
                    <vui-btn type="primary" style="width:80px;" v-if="showYesBtn"
                             @click.native="handleYesBtnClick">确认
                    </vui-btn>
                </div>
            </div>
        </transition>
    </div>
</template>
<script type="text/javascript">
    export default{
        name: 'VuiDialog',
        props: {
            title: {
                type: String,
                default: '提示'
            },
            showYesBtn: {
                type: Boolean,
                default: true
            },
            showNoBtn: {
                type: Boolean,
                default: true
            },
            value: false
        },
        data(){
            return {
                visible: false
            };
        },
        watch: {
            value(val) {
                this.visible = val;
            },
            visible(val) {
                this.$emit('input', val);
            }
        },
        methods: {
            handleYesBtnClick () {
                this.visible = false;
                this.$emit('yes');
            },
            handleNoBtnClick () {
                this.visible = false;
                this.$emit('no');
            }
        }
    }
</script>

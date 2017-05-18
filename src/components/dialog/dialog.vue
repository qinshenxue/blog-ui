<template>
    <div>
        <transition name="fade">
            <div class="dialog-mask" v-show="visible" @click="handleNoBtnClick"></div>
        </transition>
        <transition name="pop">
            <div class="dialog" v-show="visible">
                <div class="dialog-head">{{title}}</div>
                <div class="dialog-body">{{msg}}</div>
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
        data () {
            return {
                title: '提示',
                msg: '',
                showYesBtn: true,
                showNoBtn: true,
                yesCallback: null,
                visible: false
            }
        },
        methods: {
            handleYesBtnClick () {
                if (this.yesCallback) {
                    this.yesCallback();
                }
                this.visible = false;
            },
            handleNoBtnClick () {
                this.visible = false;
            }
        }
    }
</script>

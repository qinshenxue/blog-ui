<template>
    <transition name="fade" @after-leave="afterLeave" @after-enter="handleAfterEnter">
        <div v-show="visible">
            <div class="v-toast_cover" v-if="type==='loading'"></div>
            <div v-show="visible" class="v-toast" @mouseenter="clearTimer" @mouseleave="startTimer"
                 :class="cls">
                <v-spinner color="#fff" v-if="type==='loading'"></v-spinner>
                {{message}}
            </div>
        </div>
    </transition>
</template>
<script type="text/javascript">
    import * as Util from '../../utils'
    export default{
        data () {
            return {
                visible: false,
                message: '',
                duration: 2000,
                type: 'success',
                timer: null,
                closed: false
            }
        },
        computed: {
            cls(){
                return [this.type, {
                    mobile: Util.isAndroid || Util.isIOS
                }]
            }
        },
        methods: {
            close () {
                this.visible = false;
                this.closed = true;
                if (Util.isIE9) {
                    this.afterLeave();
                }
            },
            clearTimer () {
                clearTimeout(this.timer);
            },
            startTimer () {
                if (this.duration > 0 && this.type !== 'loading') {
                    this.timer = setTimeout(() => {
                        if (!this.closed) {
                            this.close();
                        }
                    }, this.duration);
                }
            },
            handleAfterEnter () {
                this.is_enter = true;
            },
            afterLeave () {
                this.$destroy();
                this.$el.parentNode.removeChild(this.$el);
            },
            clickOutside () {
                if (this.is_enter && this.type !== 'loading') {
                    this.close();
                }
            }
        },
        mounted: function () {
            this.startTimer()
            document.addEventListener('click', this.clickOutside)
        },
        beforeDestroy: function () {
            document.removeEventListener('click', this.clickOutside)
        }
    }
</script>

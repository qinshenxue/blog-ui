<template>
    <div class="v-topbar">
        <div class="container">
            <div class="v-topbar_left">
                <div class="v-topbar_logo">
                    <slot name="logo"></slot>
                </div>
            </div>
            <div class="v-topbar_right" :class="{side:sideVisible}">
                <v-icon name="more" @click.native="sideVisible=!sideVisible"></v-icon>
                <div class="v-topbar_links">
                    <slot name="links"></slot>
                </div>
                <div class="v-topbar_right-cover"></div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'v-topbar',
        data(){
            return {
                sideVisible: false
            }
        },
        watch: {
            sideVisible(v){
                if (v) {
                    document.body.style.overflow = 'hidden';
                } else {
                    document.body.removeAttribute('style');
                }
            }
        }
    }
</script>
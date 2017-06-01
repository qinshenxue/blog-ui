<template>
    <div class="v-topbar">
        <div class="container">
            <div class="v-topbar_left">
                <div class="v-topbar_logo">
                    <slot name="logo"></slot>
                </div>
            </div>
            <div class="v-topbar_right">
                <v-icon name="more" @click.native="showSidebar"></v-icon>
                <div class="v-topbar_links" ref="sidebar">
                    <slot name="links"></slot>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'v-topbar',
        methods: {
            showSidebar(){
                var sidebar = this.$refs.sidebar;
                if (getComputedStyle(sidebar).display !== 'none') {
                    sidebar.style.display = 'none';
                } else {
                    sidebar.style.display = 'block';
                }
            }
        }
    }
</script>
<template>
    <div class="v-form">
        <slot></slot>
    </div>
</template>
<script>
    export default{
        name: 'v-form',
        methods:{

            isValid(){

                console.log(this.$children)
            }
        }
    }
</script>
<style lang="stylus">
</style>
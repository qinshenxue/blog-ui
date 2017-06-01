<template>
    <form autocomplete="off" class="v-form" @submit.prevent>
        <slot></slot>
    </form>
</template>
<script>
    export default{
        name: 'v-form',
        data(){
            return {
                fields: []
            }
        },
        methods: {

            isValid(){
                return this.fields.every(field => field.validate());
                // console.log(this.$children)
            },
            reset(){
                this.fields.forEach(field => field.reset());
            }
        },
        created(){

            this.$on('regist', (item) => {
                this.fields.push(item);
            });
            /*  this.$on('removefield', item => {
             this.fields.splice(this.fields.indexOf(item), 1);
             })*/
        }
    }
</script>
<template>
    <div :class="cls">
        <slot></slot>
    </div>
</template>

<script type="text/javascript">
    export default{
        props:{
            sub:Boolean
        },
        data(){
            return{
                
            }
        },
        computed:{
            cls(){
                if(this.sub){
                    return 'doc-subtitle'
                }
                return 'doc-title'
            }
        }
    }
</script>

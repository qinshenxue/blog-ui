<template>
    <div class="v-input-group">
        <!--    <div class="vui-input"
                 :class="{'has-pend': $slots.prepend || $slots.append,focus:focus,'has-prepend':$slots.prepend,'has-append':$slots.append}">
                <div class="vui-input-group-prepend" v-if="$slots.prepend">
                    <slot name="prepend"></slot>
                    <div class="line"></div>
                </div>


                <textarea v-if="type=='textarea'" v-model="val" @focus="focus=true" @blur="focus=false"></textarea>
                <input v-else type="text" v-model="val" :placeholder="placeholder" @focus="focus=true" @blur="focus=false">

                <div class="vui-input-group-append" v-if="$slots.append">
                    <div class="line"></div>
                    <slot name="append"></slot>
                </div>
            </div>-->

        <div class="v-input-group_prepend" v-if="$slots.prepend">
            <slot name="prepend"></slot>
        </div>
        <div>
            <slot></slot>
        </div>
        <div class="v-input-group_append" v-if="$slots.append">
            <slot name="append"></slot>
        </div>
    </div>
</template>
<script>
    export default{
        name: "v-input-group",
        data(){
            return {}
        }
    }
</script>

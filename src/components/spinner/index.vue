<template>
    <svg class="v-spinner" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
        <g>
            <line v-for="i in c" x1="60" x2="60" y1="7" y2="27"
                  :stroke="color"
                  stroke-width="11" stroke-linecap="round"
                  :opacity="i.o"
                  :transform="i.r?'rotate('+i.r+' 60,60)':null" />
        </g>
    </svg>
</template>
<script>
    export default{
        name: 'v-spinner',
        props: {
            color: {
                type: String,
                default: '#000'
            }
        },
        data(){
            return {
                c: [{o: 0.27},
                    {o: 0.27, r: 30},
                    {o: 0.27, r: 60},
                    {o: 0.27, r: 90},
                    {o: 0.27, r: 120},
                    {o: 0.27, r: 150},
                    {o: 0.37, r: 180},
                    {o: 0.46, r: 210},
                    {o: 0.56, r: 240},
                    {o: 0.66, r: 270},
                    {o: 0.75, r: 300},
                    {o: 0.85, r: 330}
                ]
            }
        }
    }
</script>
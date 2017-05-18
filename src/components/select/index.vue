<template>
    <div class="v-select" :class="{active:show_options,multiple:multiple,'has-values':selected_values.length}"
         v-clickoutside="close"
    >
        <div class="v-select-selected" @click="clickOptions">
            <v-icon name="caret"></v-icon>
            <span class="placeholder" v-if="!selected_values.length">{{placeholder}}</span>
            <template v-else>
                <template v-if="multiple">
                    <div class="vui-select-selected-item" v-for="s in selected_options">{{s.label}}

                        <v-icon name="close" @click.native.stop="clickDeleteItem(s)"></v-icon>
                    </div>
                </template>
                <template v-else><span>{{selected_options[0].label}}</span>
                    <slot name="selected" :selected="selected_options[0]"></slot>
                </template>
            </template>
            <slot name="selected" :selected="selected_options"></slot>
        </div>
        <div class="v-select_dropdown"
             v-show="show_options"
             :class="['v-select-options-'+options_position]">
            <v-input>
                <v-icon name="search" slot="icon"></v-icon>
            </v-input>
            <ul class="v-select_options" ref="options">
                <li class="v-select_option" v-for="option in options" :class="{selected:_isOptionSelected(option)}"
                    @click="clickOption(option);">{{option.label}}

                    <slot name="option" :option="option"></slot>
                </li>
            </ul>
        </div>
    </div>
</template>
<script type="text/javascript">
    export default{
        name: 'v-select',
        props: {
            options: Array,
            placeholder: {
                type: String,
                default: '请选择'
            },
            multiple: {
                type: Boolean,
                default: false
            },
            value: ''
        },
        data(){
            return {
                selected_values: [],
                selected_options: [],
                show_options: false,
                options_position: 'bottom'
            }
        },
        created(){
            window.addEventListener('scroll', this._updateOptionsPostion)
        },
        methods: {
            _isOptionSelected(option){
                return this.selected_options.indexOf(option) > -1;
            },
            _updateOptionsPostion(){
                if (this.show_options) {
                    var rect = this.$refs.options.getBoundingClientRect();
                    var elRect = this.$el.getBoundingClientRect();

                    if (this.options_position == 'bottom' && rect.bottom > window.innerHeight) {
                        this.$nextTick(() => {
                            this.options_position = 'top';
                        });
                    } else if (this.options_position == 'top' && (rect.height + elRect.height + rect.bottom) <= window.innerHeight) {
                        this.$nextTick(() => {
                            this.options_position = 'bottom';
                        });
                    }
                }
            },
            clickDeleteItem(option){
                var option_index = this.selected_options.indexOf(option);
                this.selected_values.splice(option_index, 1);
            },
            clickOptions(){
                this.show_options = !this.show_options;
                this.$nextTick(() => {
                    if (this.show_options) {
                        this._updateOptionsPostion();
                    }
                })
            },
            close(){
                this.show_options = false;
            },
            clickOption(option){
                if (this.multiple) {
                    var option_index = this.selected_options.indexOf(option);
                    if (option_index > -1) {
                        this.selected_values.splice(option_index, 1);
                    } else {
                        this.selected_values.push(option.value);
                    }
                } else {
                    this.selected_values = [option.value];
                    this.show_options = false;
                }


            }
        },
        watch: {
            value(newVal){
                if (!Array.isArray(newVal)) {
                    newVal = [newVal];
                }
                var _options = [];
                newVal.forEach((item) => {
                    _options.push(this.options.filter(option => option.value == item)[0]);
                });
                if (_options.length) {
                    this.selected_values = newVal;
                }
                this.selected_options = _options;
            },
            selected_values(newVal){
                if (this.multiple) {
                    this.$emit('input', newVal);
                } else {
                    this.$emit('input', newVal.join(''));
                }
            }
        },
        beforeDestroy(){
            window.removeEventListener('scroll', this._updateOptionsPostion);
        }
    }
</script>
<style lang="stylus">
    @import "../../css/vars.styl"
    .v-select
        position: relative

        &.multiple.has-values .vui-select-selected
            padding-bottom: 2px

        .v-select-selected
            border: 1px solid $color-border-control
            padding: 6px 10px
            cursor pointer
            user-select none
            .placeholder
                color: $color-assist

            .icon-caret
                position: absolute
                top: 50%
                right: 10px
                height: 12px
                width: 12px
                fill: $color-assist
                margin-top: -6px
                transition: transform 200ms

        .v-select-selected-item
            border: 1px solid $color-theme
            display: inline-block
            padding: 4px
            margin: 0 4px 4px 0
            color: $color-theme
            .icon-close
                fill: $color-theme
                cursor: pointer
                vertical-align: -2px

        .v-select_option
            padding: 7px 10px
            cursor: pointer
            &:hover
                background-color: $color-gray-light

            &.selected
                color #fff
                background: $color-theme

        &.active
            .v-select-selected
                border-color: $color-theme
                .icon-caret
                    fill: $color-theme
                    transform: rotate(180deg)
        .v-input
            margin 10px
        .v-input_inner:focus
            border-color $color-gray

    .v-select_dropdown
        position: absolute
        border: 1px solid $color-theme
        left: 0
        width: 100%
        z-index: 1
        background: #fff
        &.v-select-options-bottom
            top: 100%
            border-top: 0
            box-shadow: 0 3px 5px rgba(0, 0, 0, .2)

        &.v-select-options-top
            border-bottom: 0
            bottom: 100%
            box-shadow: 0 -3px 5px rgba(0, 0, 0, .2)

</style>
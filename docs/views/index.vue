<template>
    <div class="vui-doc">
        <v-topbar>
            <template slot="links">
                <router-link to="/basic/color">组件</router-link>
                <router-link :to="{path:'/article',query:{full:1}}">文章</router-link>
                <a href="#">酷站</a>
                <a href="#" @click="dialogVisible=true">登录<em class="dot"></em>注册</a>
            </template>
        </v-topbar>
        <div class="container doc-container">
            <router-view v-if="$route.query.full"></router-view>
            <v-row v-else>
                <v-col :sm="5">
                    <div class="menu-wrap">
                        <ul>
                            <li v-for="group in groups">
                                <div class="component-group">{{group.groupName}}</div>
                                <ul>
                                    <li v-for="comp in group.components">
                                        <router-link class="component-item" :to="comp.path">{{comp.name}}</router-link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </v-col>
                <v-col :sm="19">
                    <router-view></router-view>
                </v-col>
            </v-row>
        </div>
        <v-dialog :visible.sync="dialogVisible" title="登录">
            <v-form>
                <v-form-item>
                    <v-input placeholder="用户名" v-model="form.username" :validations="['required']"></v-input>
                </v-form-item>
                <v-form-item>
                    <v-input-group>
                        <v-input placeholder="密码" v-model="form.password" :validations="['required']" type="password"></v-input>
                        <v-btn slot="append">获取验证码</v-btn>
                    </v-input-group>
                </v-form-item>
            </v-form>
        </v-dialog>
    </div>
</template>
<script type="text/javascript">
    export default {
        data(){
            return {
                dialogVisible: false,
                form: {
                    username: '',
                    password: ''
                },
                groups: [{
                    groupName: 'Basic',
                    components: [{
                        name: 'Color',
                        path: '/basic/color'
                    }, {
                        name: 'Font',
                        path: '/basic/font'
                    }, {
                        name: 'Grid',
                        path: '/basic/grid'
                    }, {
                        name: 'Button',
                        path: '/basic/btn'
                    }, {
                        name: 'Icon',
                        path: '/basic/icon'
                    }]
                }, {
                    groupName: 'Form',
                    components: [{
                        name: 'Input',
                        path: '/form/input'
                    }, {
                        name: 'Radio',
                        path: '/form/radio'
                    }, {
                        name: 'Checkbox',
                        path: '/form/checkbox'
                    }, {
                        name: 'Select',
                        path: '/form/select'
                    }]
                }, {
                    groupName: 'Data',
                    components: [{
                        name: 'Pagination',
                        path: '/data/pagination'
                    }, {
                        name: 'Tree',
                        path: '/data/tree'
                    }, {
                        name: 'Table',
                        path: '/data/table'
                    }]
                }, {
                    groupName: 'Notification',
                    components: [{
                        name: 'Dialog',
                        path: '/basic/dialog'
                    }]
                }, {
                    groupName: 'Other',
                    components: [{
                        name: 'lightgallery',
                        path: '/other/lightgallery'
                    }, {
                        name: 'upload',
                        path: '/other/upload'
                    }]
                }]
            }
        },
        methods: {
            showDialog(){
                // console.log(this.$dialog)
                this.$dialog({
                    content: 'show'
                })
            }
        }
    }
</script>
<style lang="stylus">
    @import "../../src/css/vars.styl"
    .dot
        display inline-block
        width 3px
        height 3px
        border-radius 2px
        margin 0 3px
        background $color-theme
</style>

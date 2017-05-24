<template>
    <div class="vui-doc">
        <v-topbar>
            <template slot="links">
                <router-link to="/basic/color">组件</router-link>
                <router-link :to="{path:'/article',query:{full:1}}">文章</router-link>
                <a href="#">酷站</a>
                <div class="link-group">
                    <a href="javascript:;" @click="loginDialogVisible=true">登录</a><em class="dot"></em>
                    <a href="javascript:;" @click="registDialogVisible=true">注册</a>
                </div>
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
        <v-dialog :visible.sync="loginDialogVisible" title="登录" @confirm="handleLogin">
            <v-form ref="loginForm">
                <v-form-item required>
                    <v-input placeholder="用户名" v-model="loginForm.username"></v-input>
                </v-form-item>
                <v-form-item required>
                    <v-input placeholder="密码" v-model="loginForm.password" type="password"></v-input>
                </v-form-item>
            </v-form>
        </v-dialog>

        <v-dialog :visible.sync="registDialogVisible" title="注册" @confirm="handleRegist">
            <v-form ref="loginForm">
                <v-form-item required>
                    <v-input placeholder="用户名" v-model="registForm.username"></v-input>
                </v-form-item>
                <v-form-item required>
                    <v-input placeholder="密码" v-model="registForm.password" type="password"></v-input>
                </v-form-item>
                <v-form-item required email>
                    <v-input placeholder="常用邮箱" v-model="registForm.email"></v-input>
                </v-form-item>
                <v-form-item required>
                    <v-input-group>
                        <v-input placeholder="验证码" v-model="registForm.code"></v-input>
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
                loginDialogVisible: false,
                registDialogVisible: false,
                loginForm: {
                    username: '',
                    password: ''
                },
                registForm: {
                    username: '',
                    password: '',
                    email: '',
                    code: ''
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
            },
            handleLogin(){
                console.log(this.$refs.loginForm.isValid())

            },
            handleRegist(){

            }
        }
    }
</script>
<style lang="stylus">
    @import "../../src/css/vars.styl"
    .v-topbar_links .link-group

        display flex
        align-items center
        margin: 0 10px;
        a
            padding 0
            margin 0

    .dot
        display inline-block
        width 3px
        height 3px
        border-radius 2px
        margin 0 6px
        background $color-theme
</style>

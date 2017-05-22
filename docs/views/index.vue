<template>
    <div class="vui-doc">
        <v-topbar>
            <template slot="links">
                <router-link to="/basic/color">组件</router-link>
                <router-link :to="{path:'/article',query:{full:1}}">文章</router-link>
                <a href="#">酷站</a>
            </template>
        </v-topbar>
        <div class="container">
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
    </div>
</template>
<script type="text/javascript">
    export default {
        data(){
            return {
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
                    }, {
                        name: 'comment',
                        path: '/other/comment'
                    }]
                }]
            }
        }
    }
</script>

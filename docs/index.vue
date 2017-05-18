<template>

    <div class="vui-doc">
        <div class="top">
            <div class="container">
                <div class="logo pull-left"><img src="./images/vue.png"></div>
                <div class="pull-right logo-txt">VUI</div>
            </div>
        </div>
        <div class="container doc-container">
            <vui-col :md="2" class="menu-wrap">
                <ul>
                    <li>
                        <div class="comp-cate">Basic（基础）</div>
                        <ul>
                            <li>
                                <router-link to="/basic/Color">Color（颜色）</router-link>
                            </li>
                            <li>
                                <router-link to="/basic/font">Font（字体及排版）</router-link>
                            </li>
                            <li>
                                <router-link to="/basic/grid">Grid（栅格）</router-link>
                            </li>
                           <li>
                                <router-link to="/basic/btn">Button（按钮）</router-link>
                            </li>
                            <li>
                                <router-link to="/basic/icon">Icon（图标）</router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div class="comp-cate">Form（表单）</div>
                        <ul>
                            <li>
                                <router-link to="/form/input">Input（输入框）</router-link>
                            </li>
                            <li>
                                <router-link to="/form/radio">Radio（单选框）</router-link>
                            </li>
                            <li>
                                <router-link to="/form/checkbox">Checkbox（复选框）</router-link>
                            </li>
                            <li>
                                <router-link to="/form/select">Select（下拉框）</router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div class="comp-cate">Data（数据）</div>
                        <ul>
                            <li>
                                <router-link to="/data/pagination">Pagination（分页）</router-link>
                            </li>
                            <li>
                                <router-link to="/data/tree">Tree</router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div class="comp-cate">Notification</div>
                        <ul>
                            <li>
                                <router-link to="/components/dialog">Dialog</router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </vui-col>
            <vui-col :md="10" class="router-wrap">
                <router-view></router-view>
            </vui-col>
        </div>
    </div>

</template>
<script>
    import './css/style.styl';





</script>

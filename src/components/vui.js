/*
 import dialog from '../components/dialog/dialog';



 module.exports={
 install:function (Vue) {
 //Vue.component('VuiCode',require('./code/code.vue'));
 //Vue.component('VuiRow',require('./grid/row.vue'));
 //Vue.component('VuiCol',require('./grid/col.vue'));
 //Vue.component('VuiBtn',require('./button/button.vue'));
 //Vue.component('VuiPagination',require('./pagination/pagination.vue'));
 // Vue.component('VuiTree',require('./tree/tree.vue'));
 // Vue.component('Icon',require('./icon/icon.vue'));
 // Vue.component('VuiCheckbox',require('./checkbox/checkbox.vue'));

 //  Vue.component('VuiDialog',require('./dialog/vui-dialog.vue'));


 Vue.component('VuiCheckbox',require('./checkbox/checkbox.vue'));

 Vue.prototype.$dialog= dialog;
 }
 }
 */


import row from './grid/row.vue';
import col from './grid/col.vue';
import btn from './btn/index.vue';
import icon from './icon/index.vue';


import input from './input/index.vue';
import select from './select/index.vue';
import checkbox from './checkbox/index.vue';
import radio from './radio/index.vue';


import pagination from './pagination/index.vue';


// import pagination from './pagination/pagination.vue';
// import tree from './tree/tree.vue';

// import dialog from './dialog/vui-dialog.vue';
// import Dialog from './dialog/dialog';

import clickoutside from './directives';

const vui = {
    row, col, btn, icon,
    input, select, checkbox, radio,
    pagination
};

const install = function (Vue) {
    /*   Object.keys(iview).forEach((key) => {
     Vue.component(key, iview[key])
     });*/
    Vue.component('VuiIcon', icon);
    Vue.component('VuiCol', col);
    Vue.component('VuiRow', row);
    Vue.component('VuiBtn', btn);

    Vue.component('VuiInput', input);
    Vue.component('VuiSelect', select);
    Vue.component('VuiCheckbox', checkbox);
    Vue.component('VuiRadio', radio);

    Vue.component('VuiPagination', pagination);

    //   Vue.component('VuiPagination', pagination);
    //    Vue.component('VuiTree', tree);
    //   Vue.component('VuiDialog', dialog);

    Vue.directive('clickoutside', clickoutside);

    /* Vue.prototype.$Loading = LoadingBar;
     Vue.prototype.$Message = Message;
     Vue.prototype.$Modal = Modal;
     Vue.prototype.$Notice = Notice;*/

    //  Vue.prototype.$dialog = Dialog;

};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

vui.install = install;

module.exports = vui;
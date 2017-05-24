import row from './components/grid/row.vue';
import col from './components/grid/col.vue';
import btn from './components/btn/index.vue';
import icon from './components/icon/index.vue';


import input from './components/input/index.vue';
import inputGroup from './components/input-group/index.vue';
import select from './components/select/index.vue';
import checkbox from './components/checkbox/index.vue';
import radio from './components/radio/index.vue';
import form from './components/form/form.vue';
import formItem from './components/form/form-item.vue';


import pagination from './components/pagination/index.vue';
import portal from './components/portal/index.vue';
import upload from './components/upload/index.vue';

import comment from './components/comment/index.vue';
import topbar from './components/topbar/index.vue';
import dropdown from './components/dropdown/index.vue';

// import pagination from './pagination/pagination.vue';
// import tree from './tree/tree.vue';

import dialog from './components/dialog/index.vue';

import Dialog from './components/dialog';

import clickoutside from './directives/clickoutside';
//import preview from './directives/preview';



const vui = {
    row,
    col,
    btn,
    icon,
    input,
    inputGroup,
    form, formItem,
    select,
    checkbox,
    radio,
    pagination,
    portal,
    upload,
    topbar, dialog
};

const install = function (Vue) {
    /*   Object.keys(iview).forEach((key) => {
     Vue.component(key, iview[key])
     });*/
    Vue.component(icon.name, icon);
    Vue.component(col.name, col);
    Vue.component(row.name, row);
    Vue.component(btn.name, btn);

    Vue.component(input.name, input);
    Vue.component(inputGroup.name, inputGroup);
    Vue.component(select.name, select);
    Vue.component('VuiCheckbox', checkbox);
    Vue.component('VuiRadio', radio);
    Vue.component(form.name, form);
    Vue.component(formItem.name, formItem);
    Vue.component(dropdown.name, dropdown);


    Vue.component('VuiPagination', pagination);
    Vue.component(portal.name, portal);
    Vue.component(upload.name, upload);
    Vue.component(comment.name, comment);
    Vue.component(topbar.name, topbar);

    Vue.component(dialog.name, dialog);


    //   Vue.component('VuiPagination', pagination);
    //    Vue.component('VuiTree', tree);
    //   Vue.component('VuiDialog', dialog);

    Vue.directive('clickoutside', clickoutside);
   // Vue.directive('preview', preview);

    /* Vue.prototype.$Loading = LoadingBar;
     Vue.prototype.$Message = Message;
     Vue.prototype.$Modal = Modal;
     Vue.prototype.$Notice = Notice;*/

    Vue.prototype.$dialog = Dialog;

};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

vui.install = install;

export default vui;
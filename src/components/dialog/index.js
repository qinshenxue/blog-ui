import  Vue from 'vue';
import  vDialog from './dialog.vue';


var DialogConstructor = Vue.extend(vDialog);
var instance;
function Dialog(options) {
    if (!instance) {
        instance = new DialogConstructor({
            el: document.createElement('div')
        });
    }
    for (var o in options) {
        instance[o] = options[o];
    }
    document.body.appendChild(instance.$el);
    Vue.nextTick(() => {
        instance.visible = true;
    });
}
Dialog.close = function () {
    Vue.nextTick(() => {
        instance.visible = false;
    });
};

export default  Dialog;

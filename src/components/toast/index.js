import Vue from 'vue';
import index from './index.vue';
let ToastConstructor = Vue.extend(index);

//var instance;
function Toast(msg, options) {
    var instance;
    //if (instance) {

    //} else {
    options = options || {};
    options.message = msg;
    instance = new ToastConstructor({
        data: options
    })
    //instance.vm = instance.$mount();
    instance.$mount()
    document.body.appendChild(instance.$el);
    // }
    //console.log(ToastConstructor);

    instance.visible = true;
    return instance
}

['info', 'success', 'warning', 'error', 'loading'].forEach(function (type) {
    Toast[type] = function (msg, options) {
        options = options || {};
        options.type = type;
        return Toast(msg, options);
    }
});

export default Toast
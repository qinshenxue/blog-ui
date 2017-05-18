module.exports = function (Vue) {
    Vue.component('doc-box', require('./box.vue'));
    Vue.component('doc-title', require('./title.vue'));
    Vue.component('doc-code', require('./code.vue'));
    Vue.component('doc-table', require('./table.vue'));
    Vue.component('doc-inlinecode', require('./inlinecode.vue'));
};
var clickoutside = {
    bind (el, binding, vnode) {
        binding._documentHandler = function (e) {
            if (el.contains(e.target)) {
                return false;
            }
            if (binding.expression) {
                vnode.context[binding.expression]();
            }
        };
        document.addEventListener('click', binding._documentHandler);
    },
    update () {

    },
    unbind (el, binding) {
        document.removeEventListener('click', binding._documentHandler);
    }
}

export default clickoutside;
var esc = {
    bind (el, binding, vnode) {
        // console.log(esc);
        binding._documentHandler = function (e) {
            if (e.keyCode === 27 && typeof binding.value === 'function') {
                binding.value();
            }
        };
        document.addEventListener('keyup', binding._documentHandler)
    },
    update () {

    },
    unbind (el, binding) {
        document.removeEventListener('click', binding._documentHandler);
    }
}

export default esc;
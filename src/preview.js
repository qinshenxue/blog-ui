import 'lightgallery.esm.js/src/css/lightgallery.css';
import lightGallery from 'lightgallery.esm.js';

var preview = {
    bind (el, binding, vnode) {
        lightGallery(el,{
            thumbnail:true
        })
    },
    update () {
    },
    unbind (el, binding) {
    }
}

export default preview;
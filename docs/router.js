
const routes= [
    { path: '/', redirect: '/basic/color' },
    { path: '/basic/color', component:require('./views/basic/color.vue')  },
    { path: '/basic/grid', component:require('./views/basic/grid.vue')  },
    { path: '/basic/font', component:require('./views/basic/font.vue')  },
    { path: '/basic/btn', component:require('./views/basic/btn.vue')  },
    { path: '/basic/icon', component:require('./views/basic/icon.vue')  },
    { path: '/form/input', component:require('./views/form/input.vue')  },
    { path: '/form/select', component:require('./views/form/select.vue')  },
    { path: '/form/radio', component:require('./views/form/radio.vue')  },
    { path: '/form/checkbox', component:require('./views/form/checkbox.vue')  },
    { path: '/data/pagination', component:require('./views/data/pagination.vue')  },
    { path: '/data/table', component:require('./views/data/table.vue')  },
    { path: '/data/tree', component:require('./views/data/tree.vue')  },
    { path: '/other/lightgallery', component:require('./views/other/lightgallery.vue')  },
    { path: '/other/upload', component:require('./views/other/upload.vue')  },
    { path: '/article', component:require('./views/other/article.vue') }
];

module.exports= routes;
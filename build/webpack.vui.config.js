var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        main: path.resolve(__dirname, '../src/vui.js')
    },
    output: {
        path: path.resolve(__dirname, '../static/'),
        filename: 'vui.min.js',
        library: 'vui',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
   externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
   /* resolve: {
        extensions: ['', '.js', '.vue']
    },*/
    module: {
        rules: [{
            test: /\.vue$/,
            use: 'vue-loader'
        }, {
            test: /\.js$/,
            use: "babel-loader",
            include: [path.resolve(__dirname,'../src')]
        }]
    },
    plugins: [
         new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var isProd = process.env.NODE_ENV === 'production';
module.exports = {
    entry: {
        app: path.resolve(__dirname, '../main.js'),
        vendors: ['vue', 'vue-router','highlight.js']
    },
    output: {
        path: path.resolve(__dirname, '../static'),
        chunkFilename:"[name].js",
        publicPath:  path.resolve(__dirname, '../static'),
        filename: 'js/[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/, loader: 'vue'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("css!postcss")
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("css!postcss!less")
            },
            {
                test: /\.(jpe?g|png|gif|svg|mp3)$/,
                loader: "url",
                query: {
                    name: 'img/[hash:8].[ext]',
                    limit: 10000
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000
                }
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    },
    vue: {
        loaders: {
            css: ExtractTextPlugin.extract("css!postcss"),
            less: ExtractTextPlugin.extract("css!postcss!less")
        },
        postcss: [
            require("autoprefixer")({browsers: ['Last 2 versions']}), require("cssnano")
        ]
    },
    postcss: function () {
        return [require("autoprefixer")({browsers: ['Last 2 versions']}), require("cssnano")];
    },
    plugins: [
        new ExtractTextPlugin("css/style.css")
    ]
}
if (isProd) {
    // module.exports.devtool = '#source-map';
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        // short-circuits all Vue.js warning code
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        //new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin(["vendors"], "js/vendors.js"),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ])
}


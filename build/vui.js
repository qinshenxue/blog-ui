process.env.NODE_ENV = 'production';

var webpack = require('webpack');
var config = require("./webpack.vui.config");


webpack(config, function (err, stats) {
    process.stdout.write(stats.toString());
});

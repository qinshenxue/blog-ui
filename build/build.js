var webpack = require('webpack');
var config = require("./webpack.prod.config");

var fs = require('fs');
var path = require('path');

// 删除之前构建的js文件
function deleteFiles(_path) {
    if (fs.existsSync(_path)) {
        var pathStats = fs.statSync(_path);
        if (pathStats.isFile()) {
            fs.unlinkSync(_path);
            console.log('delete ' + _path);

        } else if (pathStats.isDirectory()) {
            var files = fs.readdirSync(_path);
            files.forEach(function (item) {

                var filePath = path.resolve(_path, item);
                var stats = fs.statSync(filePath);
                if (stats.isFile()) {
                    fs.unlinkSync(filePath);
                    console.log('delete ' + filePath);
                } else if (stats.isDirectory()) {
                    deleteFiles(filePath);
                }

            })
        }
    }
}

function absPath(reaPath) {
    return path.resolve(__dirname, reaPath)
}

[
    absPath('../static/css/'),
    absPath('../static/img/'),
    absPath('../static/js/')
].forEach(function (item) {
    deleteFiles(item);
});

webpack(config, function (err, stats) {
    process.stdout.write(stats.toString());
});

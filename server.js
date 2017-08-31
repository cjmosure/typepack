var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    stats: { colors: true },
    publicPath: config.output.publicPath,
    quiet: true,
    inline: true,
    hot: true,
    historyApiFallback: true
}).listen(8675, 'localhost', function (err) {
    if (err) {
        console.log(err);
    }
    console.log('Listening at localhost:8675');
});
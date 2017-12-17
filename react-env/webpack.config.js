const path = require('path');

module.exports = {
    entry: './main.js', // 入口文件路径
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'index.js',
        publicPath:'temp/'
    },
    devServer: {
        inline: true,
        port: 9001,
        contentBase:'./',
        host:'localhost',
        compress:true
    },
    module: {
        loaders: [
            {
                test: /\.js$/, // babel 转换为兼容性的 js
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'latest']
                }
            }
        ]
    }
}
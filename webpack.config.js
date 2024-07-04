const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const config = {
    mode: 'development',
    devServer: {
        open: true,
        host: 'localhost',
        port: '9000'
    },
    entry: './src/scripts/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Todo Apps',
            template: './src/template/index.html',
            filename: 'index.html'
        })
    ]
}

module.exports = config
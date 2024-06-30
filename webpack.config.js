const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const config = {
    mode: 'none',
    entry: './src/scripts/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}

module.exports = config
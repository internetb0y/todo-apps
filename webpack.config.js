const path = require('path')

const common = {
    mode: 'none',
    entry: './src/scripts/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}

module.exports = common
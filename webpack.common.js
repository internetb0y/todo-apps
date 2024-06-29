const path = require('path')

const common = {
    entry: {
        app: path.resolve(__dirname, 'src/scripts/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}

module.exports = common
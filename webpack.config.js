const path = require('path');

module.exports = {
    entry: './public/login.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    devtool: 'eval-source-map',
};
const path = require('path');

module.exports = {
    entry: './assets/js/app.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "app.js"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets: ['@babel/preset-env']
                    } 
                }
            }
        ]
    }

}


var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: path.resolve(__dirname,'./app/main.js'),
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: 'build.js'
    },
    module:{
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader:'babel-loader',
                query:
                {
                  presets:['react','es2015']
                }
            },
            {
                test: /\.css$/,loader:'style-loader!css-loader'
            }
        ]
    }
}
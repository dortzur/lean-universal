const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const PATHS = require('./paths');

module.exports = {
    devServer: {
        publicPath: "/", // Same as `output.publicPath` in most cases.
        inline: true,
        hot: true,
        historyApiFallback: true,
    },
    entry: {
        app: PATHS.src
    },
    output: {
        path: PATHS.build,
        filename: '[name].js',
        publicPath: "/",

    },
    devtool: 'eval-source-map',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {

        rules: [
            {
                test: /\.(js|jsx)?$/,
                use: [{
                    loader: 'babel-loader',
                }],
                exclude: /node_modules/
            }],

    },


    plugins: [new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname,'index.ejs')
        })
    ]
};
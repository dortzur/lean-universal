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
            // {
            //     exclude: [
            //         /\.html$/,
            //         /\.(js|jsx)$/,
            //         /\.css$/,
            //         /\.json$/,
            //         /\.svg$/
            //     ],
            //     loader: 'url-loader',
            //     query: {
            //         limit: 10000,
            //         name: 'static/media/[name].[hash:8].[ext]'
            //     }
            // },

            {
                test: /\.(scss|css)$/,
                use: ["style-loader", "css-loader?sourceMap&modules&camelCase&importLoaders=2&localIdentName=[local]--[hash:base64:5]",'postcss-loader?sourceMap' ,"sass-loader?sourceMap"]
            },

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
            title: "Lean Universal",
            template: path.join(__dirname, 'template.ejs')
        })
    ]
};
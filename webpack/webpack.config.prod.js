const path = require('path');
const webpack = require('webpack');
const PATHS = require('./paths');
const StatsPlugin = require('stats-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const sharedConfig = {
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx']
    }
};

const clientConfig = Object.assign({}, sharedConfig, {
    name: "client",
    entry: {
        app: PATHS.src
    },
    output: {
        path: PATHS.build,
        filename: '[name]-[hash].js',
        publicPath: "/build",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                use: [{
                    loader: 'babel-loader',
                }],
                exclude: /node_modules/
            }, {
                test: /\.(scss|css)$/,
                loader: ExtractTextPlugin.extract(["css-loader?sourceMap&modules&minimize&camelCase&importLoaders=2&localIdentName=[local]--[hash:base64:5]", 'postcss-loader?sourceMap', "sass-loader?sourceMap"])
            },
        ],

    },
    plugins: [
        new ExtractTextPlugin('[name]-[hash].css'),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new StatsPlugin('webpack.stats.json', {
            source: false,
            modules: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
                screw_ie8: true
            },
            sourceMap: true
        }),
        new HtmlWebpackPlugin({
            title: "Lean Universal",
            template: path.join(__dirname, 'template.ejs'),
            filename: "template.html",
            path: "build"
        })
    ]
});


const serverConfig = Object.assign({}, sharedConfig, {
    name: 'server',
    externals: [nodeExternals()],
    entry: [
        path.resolve(__dirname, 'server-renderer.js')
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                use: [{
                    loader: 'babel-loader',
                }],
                exclude: /node_modules/
            },
            {
                test: /\.(scss|css)$/,
                loader:'ignore-loader'
            }
        ],

    },
    plugins: [new ExtractTextPlugin({disable: true})],
    target: 'node',
    output: {
        path: PATHS.build,
        filename: 'server-renderer.js',
        publicPath: "/",
        libraryTarget: 'commonjs2',
    },
});

module.exports = [serverConfig, clientConfig];
const webpack = require('webpack');
const PATHS = require('./paths');

module.exports = {
    entry: {
        app: PATHS.src
    },
    output: {
        path: PATHS.build,
        filename: '[name].js',
        publicPath: "/",

    },
    devtool: 'source-map',
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


    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
                screw_ie8: true
            }
        }),
    ]
};
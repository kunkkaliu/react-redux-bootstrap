/**
 * Created by liudonghui on 17/1/6.
 */
var path = require('path');
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CleanPlugin = require("clean-webpack-plugin");

module.exports = {
    // devtool: 'eval-source-map',
    dev:'webpack-dev-server',
    devtool: false,
    entry: [
        './web/src/index'
    ],
    output: {
        //join and resolve diff
        path: path.join(__dirname,'/public/dist'),

        // filename: 'bundle.js',
        filename: '[name].[chunkhash].js',

        publicPath: '/dist/'
    },
    devServer: {
        publicPath: '/dist/',
        watch:true,
        stats: { colors: true },
        port: 9000,
        //contentBase: 'build',
        noInfo: true,
        hot: true,
        inline: true
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false  // remove all comments
            },
            compress: {
                warnings: false
            }
        }),
        new CleanPlugin(['public/dist', 'public/index.html']),
        commonsPlugin,
        new HtmlWebpackPlugin({
            template: './web/index.html',
            filename: '../index.html'
        }),
        // new ExtractTextPlugin("[name].css"),
        new ExtractTextPlugin("[name].[contenthash].css"),

        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: /\.(appcache)(\?|$)/,
                exclude: /^node_modules$/,
                loader: 'file-loader?name=[name].[ext]'
            },
            { test: /\.(jpe?g|png|eot|woff|svg|ttf|woff2|gif)$/,
                loader: 'url-loader',
                query: {limit: 204800}
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.less$/,
                loader:  ExtractTextPlugin.extract("style-loader", "css-loader!less-loader"),
                include: __dirname
            },
        ]
    }
};
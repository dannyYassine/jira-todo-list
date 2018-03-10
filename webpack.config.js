/**
 * Created by dannyyassine on 2017-11-29.
 */
const webpack = require("webpack");

const ExtractTextPlugin = require('extract-text-webpack-plugin');
let Uglify = require("uglifyjs-webpack-plugin");

const extractLess = new ExtractTextPlugin({
    filename: 'main' + '.css'
});

const minifyJS = new Uglify({
    sourceMap: true,
    uglifyOptions: {
        output: {
            beautify: true, // comment out or set to false for production
        },
    },
});

const outputBundle = __dirname + '/client/dist/public/';
module.exports = [
    { // JS
        devtool: 'sourcemap',
        entry: { js: './client/app/index.js' },
        output: {
            path: outputBundle,
            filename: 'main.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015']
                    }
                },
                {
                    test: /\.(html)$/,
                    use: {
                        loader: 'html-loader'
                    }
                }
            ]
        },
        plugins: [
        ]
    },
    { // LESS
        devtool: 'sourcemap',
        entry: { css: './client/app/shared/styles/main.less' },
        output: {
            path: outputBundle,
            filename: 'main.css'
        },
        module: {
            rules: [
                {
                    test: /\.less$/,
                    exclude: /(node_modules|bower_components)/,
                    use: extractLess.extract({
                        use: [{
                            loader: "css-loader", // translates CSS into CommonJS
                            options: {
                                url: false,
                                minimize: true
                            }
                        }, {
                            loader: "less-loader" // compiles Less to CSS
                        }]
                    })
                }
            ]
        },
        plugins: [
            extractLess
        ]
    }];
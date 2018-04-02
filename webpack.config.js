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
            beautify: false, // comment out or set to false for production
        },
    },
});

let jsPlugins = [];
const procssENV = new webpack.DefinePlugin({
    'process.env': {
        'NODE_ENV': process.env.NODE_ENV.trim() === 'production' ? JSON.stringify("production") : JSON.stringify("development")
    }
});

jsPlugins.push(procssENV);

const outputBundle = __dirname + '/client/dist/public/';

module.exports = () => {

    const minifyCss = process.env.NODE_ENV === 'production';
    const minizeJs = process.env.NODE_ENV === 'production';

    if (minizeJs) {
        jsPlugins.push(minifyJS);
    }

    let cssPlugins = [];
    cssPlugins.push(extractLess);

    return [
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
            plugins: jsPlugins
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
                                    minimize: minifyCss
                                }
                            }, {
                                loader: "less-loader" // compiles Less to CSS
                            }]
                        })
                    }
                ]
            },
            plugins: cssPlugins
        }
    ];
};
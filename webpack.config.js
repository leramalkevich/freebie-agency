const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/scripts/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode:'development',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 3200,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({template: "./src/index.html"}),
        new CopyPlugin({
            patterns: [
                { from: "./src/assets", to: "assets", noErrorOnMissing: true }
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
    watch: true
};
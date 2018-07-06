const nodeExternals = require("webpack-node-externals");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = [{
    entry:{
        browser: path.resolve(__dirname, "../client/src")
    },
    output:{
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", "jsx"]
    },
    devtool: "source-map",
    target: "web",
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "awesome-typescript-loader"
        }, {
            test: /\.js?$/,
            loader: "babel-loader"
        }]
    }
},{
    entry:{
        server: path.resolve(__dirname, "../server")
    },
    output:{
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", "jsx"]
    },
    devtool: "source-map",
    target: "node",
    externals: [nodeExternals()],
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "awesome-typescript-loader"
        }, {
            test: /\.js?$/,
            loader: "babel-loader"
        }]
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, "../server/templates/index.html"),
            to: path.resolve(__dirname, "../dist/index.html")
        }])
    ]
}];


const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    'app.bundle': './src/app.js',
    'contact': './src/contact.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
          options: {
            minimize: false,
            attrs: [':data-src']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/'
          }
        },
        {
          loader: 'image-webpack-loader',
          options: {
            bapassOndebug: true
          }
        }
        ]
      },
      {
        test: /\.js$/, use: {loader: "babel-loader"}, exclude: /node_modules/
      },
      {
        test: /\.jsx$/, use: {loader: "babel-loader"}, exclude: /node_modules/
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9002,
    open: true,
    hot:true
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: "demo",
      template: "./src/index.html",
      filename: "./index.html",
      minify: {
        collapseWithspace: true
      },
      hash: true,
      chunks: ["app.bundle"]
    }),
    new HtmlWebPackPlugin({
      title: "conatact",
      template: "./src/contact.html",
      filename: "./contact.html",
      minify: {
        collapseWithspace: true
      },
      hash: true,
      chunks: ["contact"]
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new CleanWebpackPlugin(["dist"]),
    new webpack.HotModuleReplacementPlugin()
  ]
};
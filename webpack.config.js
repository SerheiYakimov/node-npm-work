const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
entry: './index.js',
 output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'),
    },
    module: {
        rules: [
            {
              test: /\.css$/i,
              use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                  test: /\.js$/,
                  exclude: /node_modules/,
                  use: {
                    loader: "babel-loader",
                    options: {
                      presets: ['@babel/preset-env']
                    }
                  }
            },
        ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    new MiniCssExtractPlugin({filename: 'style.css'}),
  ],
    devServer: {
               open: true,
        port: 9000,
      },
 
};
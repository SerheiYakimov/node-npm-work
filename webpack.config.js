const path = require('path');

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
              use: ["style-loader", "css-loader"],
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
    devServer: {
               open: true,
        port: 9000,
      },
 
};
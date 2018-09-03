const path = require('path');
// const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// "dotenv": "^6.0.0",
// // Heroku sets env variable by default
// process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// if (process.env.Node_ENV === 'development') {
//   require('dotenv').config();
// };

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new MiniCssExtractPlugin({filename: 'styles.css'});

  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.s?css$/, 
        //extract css files from bundle to own files
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }]
    },
    plugins: [
      CSSExtract,
      new Dotenv(),
      // // pass the env value down to client-side js
      // new webpack.DefinePlugin({
      //   'process.env.BETA_RANDOM_API_KEY': JSON.stringify(process.env.BETA_RANDOM_API_KEY)
      // })
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      publicPath: '/dist'
    }
  }
};

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  context: __dirname,
  entry: {
    application: path.join(process.cwd(),'application','index.js'),
	  vendor: ['inferno']
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  module: {
    rules: [
        {
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            options: 
            {	
              presets: [['es2015', {loose: true, modules: false}]],
	            plugins: ["babel-plugin-inferno", {"imports": true}]
            }
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: [
              {
                loader: 'css-loader',
                query: {
                  minimize: true,
                  modules: true,
                  importLoaders: 2,
                  localIdentName: '[name]__[local]__[hash:base64:5]',
                },
              },
              'postcss-loader'
            ],
          }),
        },
    ]
  },

  plugins: [
    new ExtractTextPlugin('[name].bundle.css'),
  ],
  // …
};
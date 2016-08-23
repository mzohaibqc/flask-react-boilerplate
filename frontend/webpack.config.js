const path = require('path');
const webpack = require('webpack');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const locals = {};
const paths = ['/', '/about', '/contacts', '*'];

module.exports = {
  entry: {
    // js entry point
    main: './src/index.js',
    // add you css files' paths here.
    css: [
      `${__dirname}/src/styles.css`,
      `${__dirname}/node_modules/materialize-css/dist/css/materialize.min.css`,
      `${__dirname}/node_modules/material-design-iconic-font/dist/css/material-design-iconic-font.min.css`
      ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(path.join(__dirname, '../static')),
    libraryTarget: 'umd' 
  },
  resolve: {
    modules: ['node_modules', 'src'],
      alias: {
        'mtd': `${__dirname}/node_modules/materialize-css/dist/css/materialize.min.css`,
        'styles': `${__dirname}/src/styles.css`
      }
  },
  module: {
    loaders: [
      {
        // match all js or jsx files except from `node_modules` folder
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: { presets: ['es2015', 'react'] }
      },
      { test: /\.ejs$/, loader: "ejs-loader" },
   
      {
        test: /\.css/,
        include: [
          path.resolve(__dirname, './node_modules/materialize-css/dist/css'),
          path.resolve(__dirname, './node_modules/material-design-iconic-font/dist/css/material-design-iconic-font.min.css'),
          path.resolve(__dirname, './src/styles.css')
          ],
        loader: ExtractTextPlugin.extract(
          'style-loader',
          '!css-loader'
        )
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url-loader?limit=10000&name=[name].[ext]',
      },
      {
        test   : /\.(mp3|wav|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader : 'file-loader?name=[name].[ext]'
      }
    ]
  },
  plugins: [
    new StaticSiteGeneratorPlugin('main', paths, locals),
    new ExtractTextPlugin('style.css'),
    new webpack.NoErrorsPlugin()
  ]
};

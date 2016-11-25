var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./scripts/scripts.js",
  module: {
    loaders: [
      {
        test: /\.js?$/, //<----anything that is a js file gets ran through the babel loader
        exclude:  /(node_modules|bower_components)/,
        loader:  'babel-loader',
        query:  {
          presets: ['react', 'es2015', 'stage-2', 'latest'],
          plugins: [ 'check-es2015-constants', 'transform-es2015-block-scoping', 'transform-es2015-arrow-functions', 'react-html-attrs', 'transform-class-properties','transform-decorators']
        }
      }
    ]
  },
  output: {
    path: __dirname + "/scripts",
    filename: "scripts.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
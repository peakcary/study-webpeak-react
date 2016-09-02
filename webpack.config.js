var webpack = require('webpack');
module.exports = {
  entry: [
    'webpack/hot/only-dev-server',
    "./js/app.js"
  ],
  output: {
    path: __dirname + '/build',
    filename: "bundle.js"
  },
  // resolve: { extensions: ['', '.js', '.jsx','.css'],//add '.css' "root": __dirname }
  module: {
    loaders: [{
      test: /\.js?$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      loader: "style!css"
    }, {
      test: /\.scss$/,
      loader: "style!css!scss"
    }]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};

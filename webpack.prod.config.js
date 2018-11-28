import pages from './src/data/pages';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';

const webpackConfigProd = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
	entry: pages,
  output: {
	  filename: '[name].bundle.js'
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: false,
      uglifyOptions: {
        output: {
          comments: false,
          beautify: false,
        },
      },
    })
  ]
};

export default webpackConfigProd;
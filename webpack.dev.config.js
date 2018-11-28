import pages from "./src/data/pages";

const webpackConfigDev = {
  mode: 'development',
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

  ]
};

export default webpackConfigDev;
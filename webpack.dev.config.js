import pages from "./src/data/pages";

const webpackConfigDev = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
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
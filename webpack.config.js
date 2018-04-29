const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, 'dist'),
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: { importLoaders: 1 },
            },
            'postcss-loader',
          ],
        })
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].bundle.css'),
  ],
};

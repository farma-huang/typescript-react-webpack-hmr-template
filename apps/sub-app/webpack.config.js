const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  devtool: "source-map",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(ts|tsx)?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', ".tsx", '.css']
  },
  devServer: {
    port: 3001,
    open: false,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      hash: true, // Cache busting
      filename: '../dist/index.html'
    }),
    new ModuleFederationPlugin({
      name: 'sub_app_1',
      filename: 'remoteEntry.js',
      // remotes: {
      //   remote: 'remote@http://localhost:8001/remoteEntry.js',
      // },
      exposes: {
        // './Nav': './src/components/Nav',
        // This is case you want to expose the entire App
        // no see the case but its possible
        // './App': './src/index',
      },
      shared: {},
    }),
  ]
}
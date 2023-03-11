const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const { dependencies } = require("./package.json");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

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
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
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
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
    extensions: ['.ts', '.js', '.json', ".tsx"],
  },
  devServer: {
    port: 3000,
    open: false,
    hot: true
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        // sub_app_1: `sub_app_1@http://localhost:3001/remoteEntry.js`,
        uapp1: `uapp1@https://typescriptreactwebpackhmrtempl-xuxo--3001.local-credentialless.webcontainer.io/remoteEntry.js`
      },
      shared: {
        // ...dependencies,
        // react: {
        //   eager: true,
        //   singleton: true,
        //   requiredVersion: dependencies["react"],
        // },
        // "react-dom": {
        //   eager: true,
        //   singleton: true,
        //   requiredVersion: dependencies["react-dom"],
        // },
      },
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      hash: true, // Cache busting
      filename: '../dist/index.html'
    })
  ]
}
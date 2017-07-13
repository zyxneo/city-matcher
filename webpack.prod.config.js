const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: "source-map",

  entry: [
    "./src/index"
  ],

  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "/public/"
  },

  plugins: [
    new ExtractTextPlugin("style.css"),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    })
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,         // Match both .js and .jsx files
        exclude: /node_modules/,
        loader: "babel-loader",
        query:
          {
            presets:["react", "es2015", "stage-0"],
            plugins: ["react-html-attrs", "transform-class-properties", "transform-decorators-legacy"]
          }
      },
      {
        test: /\.s?css$/,
        exclude: /main\.scss/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          //resolve-url-loader may be chained before sass-loader if necessary
          use: [
            { loader: "css-loader", options: {
              sourceMap: true,
              importLoaders: 1, // https://github.com/webpack-contrib/css-loader#importloaders
              modules: true,
              localIdentName: "[name]---[local]---[hash:base64:5]",
              minimize: true
            } },
            { loader: "postcss-loader", options: { sourceMap: true } },
            { loader: "sass-loader" }
          ]
        })
      },
      {
        test: /main\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            { loader: "css-loader", options: {
              sourceMap: true,
              minimize: true
            } },
            { loader: "postcss-loader", options: { sourceMap: true } },
            { loader: "sass-loader" }
          ]
        })
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: "file-loader?name=fonts/[name].[ext]"
      }
    ]
  }
};

var path = require("path");
var webpack = require("webpack");
 
module.exports = {
  entry: "./frontend/src/main.jsx",
  output: { path: "./build/frontend/js/", filename: "bundle.js" },
  module: {
    loaders: [
      {
        test: /frontend\/.*\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react"]
        }
      }
    ]
  },
};

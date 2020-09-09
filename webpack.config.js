const path = require("path")

module.exports = {
  mode: "none",
  entry: {
    index: path.join(__dirname, "./src/index.js"),
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "/lib"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
}

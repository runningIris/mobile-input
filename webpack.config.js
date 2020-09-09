const path = require("path")
const pkg = require("./package.json")

module.exports = {
  mode: "none",
  entry: {
    index: path.join(__dirname, "./src/index.js"),
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "/lib"),
    library: pkg.name,
    libraryTarget: "umd",
    libraryExport: "default",
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

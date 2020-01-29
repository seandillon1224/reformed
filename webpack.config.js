var path = require("path");

module.exports = {
  mode: "production",
  entry: "./Reformed/Reformed.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/
      },
      {
        exclude: /node_modules/,
        test: /\.(jpg|png)$/,
        use: {
          loader: "url-loader"
        }
      }
    ]
  },
  externals: {
    react: "commonjs react",
    "react-dom": "commonjs react-dom"
  }
};

const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/main.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
  },
  plugins: [new CleanWebpackPlugin(), new VueLoaderPlugin()],
  devServer: {
    port: 3030,
    historyApiFallback: true,
    overlay: false,
  },
};

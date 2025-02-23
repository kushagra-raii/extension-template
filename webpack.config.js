const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production", // Change to 'development' for debugging
  entry: {
    content: './src/scripts/content/main.ts',
    background: './src/scripts/background.ts',
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: "public", to: "." }, // Copy manifest.json and static files
        { from: "src/popup.html", to: "popup.html" },
      ],
    }),
  ],
  devtool: "source-map", // Helps with debugging
  watchOptions: {
    ignored: /node_modules/,
  },
};

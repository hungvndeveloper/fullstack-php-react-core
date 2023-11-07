const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

module.exports = {
  entry: "./src/index.js", //File nguồn

  //Thiết lập file đích
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "public"),
  },

  mode: "none",

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.s[ac]ss$/i, //sass, scss
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },

      {
        test: /\.(png|jpe?g|gif|mp3|mp4)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets/media",
            },
          },
        ],
      },

      {
        test: /\.html|tpl$/i,
        loader: "html-loader",
      },
    ],
  },

  devtool: "inline-source-map",

  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },

  devServer: {
    historyApiFallback: true,
    port: 3000,
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        a: 1,
      },
    }),
    // fix "process is not defined" error:
    new webpack.ProvidePlugin({
      process: "process",
    }),
  ],
};

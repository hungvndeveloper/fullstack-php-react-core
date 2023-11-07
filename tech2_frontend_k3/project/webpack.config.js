const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv").config({ path: "./.env" });

module.exports = (env, argv) => {
  //Check mode (developement hay production)

  //Nếu developement => gọi file .env.development
  //Nếu production => gọi file .env.production

  //CI/CD

  return {
    //config input
    entry: {
      index: "./src/index.js", //'./nguon/home.js'
    },

    //config output
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "public"),
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i, //scss, sass
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
          test: /\.css$/i, //css
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
          ],
        },

        {
          test: /\.(png|svg|jpg|jpeg|gif|mp3|mp4)$/i,
          use: [
            {
              loader: "file-loader",
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

    mode: "development",

    devServer: {
      static: {
        directory: path.join(__dirname, "public"),
      },
      compress: true,
      port: 3000,
      historyApiFallback: true,
    },

    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },

    plugins: [
      // ...
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(process.env),
      }),
    ],
  };
};

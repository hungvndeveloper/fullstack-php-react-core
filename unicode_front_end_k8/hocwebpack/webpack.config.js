const path = require("path");

module.exports = {
  mode: "development",

  entry: "./src/index.js",

  //output
  output: {
    filename: "index.bundle.js", //ten file
    path: path.resolve(__dirname, "public"), //tên folder
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },

      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
};

# Kết hợp Webpack và Package Manager (NPM)

## Cài đặt webpack

1. Khởi tạo dự án mới:

npm init -y

2. Cài webpack:

npm install webpack

3. Cài webpack-cli

npm install webpack-cli

## Bundle Javascript

npx webpack

## Cấu hình webpack

Tạo file webpack.config.js

```js
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
```

## Loader

### CSS Loader

npm install --save-dev style-loader

npm install --save-dev css-loader

### Sass Loader

npm install sass-loader sass webpack --save-dev

### File Loader

npm install file-loader --save-dev

### HTML Loader

npm install --save-dev html-loader

## Source Map

Thêm đoạn code sau vào file webpack.config.js
devtool: 'inline-source-map'

## Dev Server

npm install --save-dev webpack-dev-server

Thêm đoạn code sau vào package.json

"start": "webpack-dev-server --open",

## Thay đổi size limit

```
performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
}
```

## Routing

```
devServer: {
    historyApiFallback: true
  }
```

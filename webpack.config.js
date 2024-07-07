const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  output: {
    uniqueName: "atlys",
    publicPath: "/",
    path: path.join(__dirname, "/dist"),
    filename: `static/js/[name].[chunkhash:8].js`,
    chunkFilename: `static/js/[name].[chunkhash:8].js`,
    assetModuleFilename: `images/[path][name].[contenthash:8][ext]`,
    crossOriginLoading: "anonymous",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      favicon: "public/favicon.ico",
    }),
    new MiniCssExtractPlugin(),
  ],
  performance: {
    maxAssetSize: 250000,
    maxEntrypointSize: 1000000,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      maxSize: 500000,
      cacheGroups: {
        common: {
          test: /[\\/]node_modules[\\/]/,
          priority: -5,
          reuseExistingChunk: true,
          chunks: "initial",
          name: "common_app",
          minSize: 0,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
        defaultVendors: false,
        reactPackage: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom)[\\/]/,
          name: "vendor_react",
          chunks: "all",
          priority: 10,
        },
      },
    },
    sideEffects: true,
  },

  devServer: {
    port: 3000, // you can change the port
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
        loader: "url-loader",
        options: { limit: false },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};

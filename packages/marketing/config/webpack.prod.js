const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common.js");
const jsonPackage = require("../package.json");
const { merge } = require("webpack-merge");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./marketingApp": "./src/bootstrap.js",
      },
      shared: jsonPackage.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);

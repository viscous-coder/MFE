const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");
const path = require("path");

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:8089/",
    // path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 8089,

    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: "marketing@http://localhost:8081/remoteEntry.js",
        auth: "auth@http://localhost:8082/remoteEntry.js",
        dashboard: "dashboard@http://localhost:8083/remoteEntry.js",
      },
      // shared: ["react", "react-dom"],
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);

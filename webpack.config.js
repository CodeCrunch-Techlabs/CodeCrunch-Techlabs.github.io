const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");


module.exports={ 
    plugins: [
        new NodePolyfillPlugin()
    ],
    resolve: { 
        extensions: [".js", ".json", ".ts"], 
        fallback: {
          "fs": false,
          "path": require.resolve("path-browserify")
        }
      },
}
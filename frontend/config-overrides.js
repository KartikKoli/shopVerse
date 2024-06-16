const webpack=require("webpack");

module.exports = function override(config){
    const fallback = config.resolve.fallback || {};
    Object.assign(fallback,{
        zlib: require.resolve("browserify-zlib"),
        querystring: require.resolve("querystring-es3"),
        path: require.resolve("path-browserify"),
        crypto: require.resolve("crypto-browserify"),
        fs: false,
        stream: require.resolve("stream-browserify"),
        zlib: require.resolve("browserify-zlib"),
        http: require.resolve("stream-http"),
        net: false,
        buffer: require.resolve("buffer/"),
        util: require.resolve("util/"),
        assert: require.resolve("assert/")
    });
    config.resolve.fallback=fallback;
    config.plugins= (config.plugins || []).concat([
        new webpack.ProvidePlugin({
            process: "process/browser"
        })
    ])
    config.module.rules.unshift({
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false, // disable the behavior
        },
      });
    return config;
};
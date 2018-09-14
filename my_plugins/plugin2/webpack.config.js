const path = require('path');
var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const pluginName = __dirname.replace(/\\/g, "/").split("/").pop();
console.log(pluginName);

module.exports = {
    entry: [path.resolve(__dirname, './main.ts')],
    output: {
        filename: `${pluginName}.js`,
        path: path.resolve(__dirname, "../../js/plugins/"),
    },
    devtool: 'inline-source-map',
    mode: "development",
    module: {
        rules: [{
            test: /\.ts$/,
            use: { loader: 'ts-loader', options: { transpileOnly: true, configFile: path.resolve(__dirname, "../../tsconfig.json") } },
            include: [path.resolve(__dirname, "../../node_modules"), __dirname],
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin()
    ],
};
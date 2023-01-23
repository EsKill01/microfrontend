const { merge } = require('webpack-merge');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8079,
        historyApiFallback:{
            index: 'index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js'
            },
            shared: ['react', 'react-dom']
        }),
        new HtmlWebPackPlugin({
            template: './public/index.html'
        })
     ]
}

module.exports = merge(commonConfig, devConfig);

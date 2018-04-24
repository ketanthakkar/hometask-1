const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: "development",

    entry: [
        'react-hot-loader/patch',
        './src/index.jsx'
      ],
    devtool: 'inline-source-map',

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
      ],
    
      devServer: {
        contentBase: './dist',
        hot: true
      }
})
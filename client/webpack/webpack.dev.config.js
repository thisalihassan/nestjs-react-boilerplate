/* eslint @typescript-eslint/no-var-requires: "off" */
const merge = require('webpack-merge');

const common = require('./webpack.config.js');

module.exports = merge.mergeWithCustomize({
  customizeArray: merge.customizeArray({
    plugins: 'prepend',
  }),
})(common, {
  mode: 'development',
  devtool: 'inline-source-map',
});

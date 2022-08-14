/* eslint @typescript-eslint/no-var-requires: "off" */
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const merge = require('webpack-merge');
const WorkboxPlugin = require('workbox-webpack-plugin');

const common = require('./webpack.config.js');

module.exports = merge.mergeWithCustomize({
  customizeArray: merge.customizeArray({
    plugins: 'prepend',
  }),
})(common, {
  plugins: [
    ...common.plugins,
    new TerserPlugin(),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
      swDest: path.resolve('dist/web/sw'),
    }),
  ],
  mode: 'production',
});

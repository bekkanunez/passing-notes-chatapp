const path = require('path');

module.exports = {
  devtool: 'eval-source-map',
  mode: 'development',
  // The entry point file 
  entry: './src/index.js',
  // The location of the build folder
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
    
  },
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
    },
  watch: true,
};
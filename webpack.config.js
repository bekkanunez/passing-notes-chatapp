const path = require('path');

module.exports = {
  // The entry point file 
  entry: './src/index.js',
  // The location of the build folder
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  // This provides the ability to
  // map the built code back to the original source format when debugging.
  //when webpack is run, everytime a code is added, it is bundled into bundle.js
  watch: true,
};
const path = require('path');

module.exports = {
    entry: './examples/index.js',
    output: {
      path: path.resolve(__dirname, 'examples'),
      filename: 'bundle.js'
    }
  };
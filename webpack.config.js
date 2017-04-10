var path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'app.js',
    path: path.join(__dirname, '/public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'jshint-loader',
            options: {
              esversion: 6,
              camelcase: true,
              emitErrors: false,
              failOnHint: false,
              globalstrict: true,
              "browser": true
            }
          },
          { loader: 'babel-loader' }
        ]
      }
    ]
  }
}
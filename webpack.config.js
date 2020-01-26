module.exports = {
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: { fix: true },
      }
    ]
  }
}
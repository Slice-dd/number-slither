module.exports = {
  lintOnSave: false,
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  },
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html'
    }
  }
}
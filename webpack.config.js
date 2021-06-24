const path  = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  //documento de salida para producción, al que se hace referencia con nuestro archivo principal
  entry:'./src/index.js',
  //archivos a guardar los archivos resultantes
  output:{
    path: path.resolve(__dirname,'dist'),
    filename:'bundle.js'
  },
  resolve:{
    extensions:['.js','.jsx']
  },
  module:{
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use:{
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use:[
          {
          loader: 'html-loader'
          }
        ]
      },

    ]
  },
  plugins:[
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
  ]
}
var config = {
   entry: './main.js',
	
   output: {
      path:'./dist',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
				
            query: {
               presets: ['es2015', 'react']
            }
         },
         { test: /\.css$/, exclude: /node_modules/, loader: "style-loader!css-loader" }

      ]
   }
}

module.exports = config;


module.exports =
{
    module: {
      rules: [
        {
          test: /\.js$/, 
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          }
        },
        { test: /\.css$/, 
        use: 
        [ 'style-loader', 'css-loader' ] 
        },
        {
          test: /target-file.js$/,
          use: [
            {
              loader: `val-loader`,
            },
          ],
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/i,
          use: [
            {
              loader: 'url-loader',
              // options: {
              //   limit: 8192,
              // },
            },
          ],
        },
        {
          test: /\.(gif|svg|jpg|png)$/,
          use:[
          {
          loader: "file-loader",
          },
        ]
        },
        
      ]
    }
}

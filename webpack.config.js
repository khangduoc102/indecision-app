const path = require('path');

module.exports= {
    entry: './src/app.js',      //the main file
    output: {
        path: path.join(__dirname, 'public'),   //folder to be excuted
        filename: 'bundle.js'                   //main file will be linked to html page
    },
    module: {
        rules: [{
            loader: 'babel-loader',             //setup for babel to load 
            test: /\.js$/,                      //load all the js files
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};
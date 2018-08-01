module.exports = {
    entry: './src/js/application.js',
    output: {
        filename: 'todo.app.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
};
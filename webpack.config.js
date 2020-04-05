const path = require('path');

module.exports = {
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx')
    },
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\\.ts(x?)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                enforce: 'pre',
                test: /\\.js$/,
                loader: 'source-map-loader'
            }
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx'],
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}

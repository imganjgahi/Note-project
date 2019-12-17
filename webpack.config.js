module.exports = {
    mode: "production",
    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            { 
                test: /\.scss$/, 
                use: [ 
                    "style-loader", 
                    "css-loader", 
                    "sass-loader" 
                ] 
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};
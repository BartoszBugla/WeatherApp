module.exports = {
    //...
    module: {
        rules: [
            {
                test: /\.svg/,
                use: {
                    loader: "svg-url-loader",
                    options: {},
                },
            },
        ],
    },
    //...
};

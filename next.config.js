const next = {
    presets: [
        [
            "next/babel",
            {
                "preset-env": {
                    modules: "commonjs",
                    debug: true,
                },
            },
        ],
    ],
    plugins: [["inline-svg"]],
};

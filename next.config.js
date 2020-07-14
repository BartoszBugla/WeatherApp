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
module.exports = {
    env: {
        API_KEY_1: "FI0ZPYdRRTTdhdTKQwENNV-OAS4OA13qj97BqtkoU2M",
        API_KEY_2: "ba590e34cd2c5e9d9bfa284e3f0b6a6e",
    },
};

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    mode: isProduction ? "production" : "development",
    entry: "./src/js/main.js", // Entry point of your JavaScript file
    output: {
      filename: "main.js", // Output file name
      path: path.resolve(__dirname, "assets"), // Output directory path
    },
    devtool: isProduction ? false : "eval-source-map", // Use source maps in development mode
    module: {
      rules: [
        {
          test: /\.js$/, // Use babel-loader for JavaScript files
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
        {
          test: /\.s[ac]ss$/i,
          oneOf: [
            {
              resourceQuery: /inline/,
              use: [
                'to-string-loader',
                'css-loader',
                {
                  loader: 'postcss-loader',
                  options: {
                    postcssOptions: {
                      plugins: [
                        require('tailwindcss'),
                        require('autoprefixer'),
                      ],
                    },
                  },
                },
                'sass-loader',
              ],
            },
            {
              use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                {
                  loader: 'postcss-loader',
                  options: {
                    postcssOptions: {
                      plugins: [
                        require('tailwindcss'),
                        require('autoprefixer'),
                      ],
                    },
                  },
                },
                'sass-loader',
              ],
            },
          ],
        },        
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
      ],
    },
    plugins: [
      // ...other plugins...
      new MiniCssExtractPlugin({
        filename: "main.css", // Output CSS filename
      }),
    ],
  };
};

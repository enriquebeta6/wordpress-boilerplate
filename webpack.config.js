const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, 'src', 'scripts', 'commons.ts'),
  output: {
    filename: path.join('js', 'bundle.main.js'),
    publicPath: () => process.env.WP_THEME_URL,
    path: path.resolve(__dirname, process.env.WP_THEME_PATH),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          'resolve-url-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        type: 'asset',
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        generator: {
          filename: 'fonts/[name].[ext]',
        },
      },
      {
        type: 'asset',
        test: /\.(png|jpg|jpeg)$/,
        generator: {
          filename: 'imgs/[folder]/[name].[ext]',
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};

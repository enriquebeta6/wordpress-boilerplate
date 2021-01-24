module.exports = {
  parser: 'postcss-scss',
  plugins: {
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      stage: 0,
      autoprefixer: {
        flexbox: 'no-2009',
        grid: 'autoplace',
      },
    },
    'postcss-normalize': {},
  },
};

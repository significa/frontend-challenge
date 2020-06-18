module.exports = ({ env }) => ({
  plugins: {
    cssnano: env === 'prod' ? {} : false,
    'postcss-import': {},
    'postcss-nesting': {},
    'postcss-preset-env': {
      preserve: false
    }
  }
});

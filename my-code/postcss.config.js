module.exports = ({ env }) => ({
  plugins: {
    cssnano: env === 'prod' ? {} : false,
    'postcss-import': {},
    'postcss-nesting': {},
    'postcss-custom-media': {},
    'postcss-preset-env': {
      stage: 1,
      preserve: false
    }
  }
});

require('dotenv').config();

const withImages = require('next-images');
const withCss = require('@zeit/next-css');

const { NODE_ENV } = process.env;
const production = NODE_ENV === 'production';

const nextConfig = {
  distDir: '../build/_app'
};

module.exports = withImages(
  withCss({
    cssModules: true,
    cssLoaderOptions: {
      url: false,
      localIdentName: production
        ? 'app-[hash:base64:5]'
        : '[name]__[local]--[hash:base64:5]'
    },
    ...nextConfig
  })
);

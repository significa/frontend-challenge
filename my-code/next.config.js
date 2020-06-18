require('dotenv').config();

const withCss = require('@zeit/next-css');
const withImages = require('next-images');

const { NODE_ENV } = process.env;
const prod = NODE_ENV === 'production';

const nextConfig = {
  dir: './src'
};

module.exports = withImages(
  withCss({
    cssModules: true,
    cssLoaderOptions: {
      url: false,
      localIdentName: prod ? 'significa-challenge-[hash:base64:5]' : '[name]__[local]--[hash:base64:5]'
    },
    ...nextConfig
  })
);

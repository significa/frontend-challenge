require('dotenv').config();

const path = require('path');
const Dotenv = require('dotenv-webpack');
const withCss = require('@zeit/next-css');

const { NODE_ENV } = process.env;
const prod = NODE_ENV === 'production';


const nextConfig = {
  dir: './src',
  generateBuildId: () => Promise.resolve(version),
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

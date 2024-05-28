const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      include: [path.resolve(__dirname, '../components/src')],
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['next/babel'],
        },
      },
    });

    return config;
  },
  output: 'export',
};

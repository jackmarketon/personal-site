module.exports = {
  target: 'serverless',
  exportPathMap: async defaultPathMap => defaultPathMap,
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });

    config.module.rules.push({
      test: /\.jsx?$/,
      enforce: 'pre',
      exclude: /node_modules/,
      use: [{ loader: 'eslint-loader', options: { emitWarning: true } }],
    });

    return config;
  },
};

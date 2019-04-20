const fs = require('fs');

module.exports = {
  target: 'serverless',
  exportPathMap: async defaultPathMap => {
    const routes = await new Promise((resolve, reject) => {
      fs.readdir('./posts', (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    }).then(files =>
      files
        .map(file =>
          file
            .split('.')
            .slice(0, -1)
            .join('.'),
        )
        .reduce(
          (acc, slug) => ({
            ...acc,
            [`/post/${slug}`]: { page: '/post', query: { id: slug } },
          }),
          defaultPathMap,
        ),
    );
    delete routes['/post'];
    return routes;
  },
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

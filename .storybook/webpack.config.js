const path = require('path');
const { getWebpackScriptLoaders } = require('@rocket-scripts/webpack');
const { getWebpackAlias } = require('@rocket-scripts/use-webpack-alias');

function getBabelLoaderOptions(cwd) {
  return {
    presets: [
      [
        require.resolve('@rocket-scripts/babel-preset'),
        {
          modules: false,
          targets: ['last 1 chrome version', 'last 1 firefox version', 'last 1 safari version'],
        },
      ],
    ],
  };
}

const cwd = process.cwd();

module.exports = async ({ config }) => {
  const babelLoaderOptions = getBabelLoaderOptions(cwd);

  config.resolve.extensions.push('.ts', '.tsx');

  config.resolve.alias = {
    ...getWebpackAlias(cwd),
    ...(config.resolve.alias || {}),
  };

  // https://storybook.js.org/docs/configurations/default-config/
  // https://github.com/storybooks/storybook/blob/next/lib/core/src/server/preview/base-webpack.config.js
  config.module.rules.push(
    {
      oneOf: [
        // ts, tsx, js, jsx - script
        ...getWebpackScriptLoaders({
          include: path.join(cwd, 'src'),
          babelLoaderOptions,
          useWebWorker: false,
          chunkPath: '',
          publicPath: '',
        }),
      ],
    },
    {
      test: /\.stories\.(js|jsx)$/,
      loaders: [
        {
          loader: require.resolve('@storybook/source-loader'),
          options: { parser: 'javascript' },
        },
      ],
      enforce: 'pre',
    },
    {
      test: /\.stories\.(ts|tsx)$/,
      loaders: [
        {
          loader: require.resolve('@storybook/source-loader'),
          options: { parser: 'typescript' },
        },
      ],
      enforce: 'pre',
    },
  );

  return config;
};

import express from 'express';
import webpack from 'webpack';
import renderDocument from './render_document.js';
import webpackConfig from './webpack.dev.config.js';

const app = express();
const compiler = webpack(webpackConfig);
const { filename, publicPath } = webpackConfig.output;

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  const html = renderDocument({
    bundle: publicPath + filename,
  });

  res.send(html);
});

const port = process.env.PORT || 3000;

app.listen(port, '0.0.0.0', (error) => {
  /* eslint-disable no-console */
  if (error) return console.error(error);
  return console.log(`Dev server listening at http://0.0.0.0:${port}`);
});

import path from 'path';

module.exports = {
  mode: 'none',
  entry: './src/index.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist'),
  },
};

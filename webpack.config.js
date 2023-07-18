module.exports = {
    // ...
    module: {
      rules: [
        {
          test: /\.ts?$/,
          exclude: [/node_modules/, /pages\/canisters/],
          use: 'ts-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    // ...
  };
  
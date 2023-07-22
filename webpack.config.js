module.exports = {
    // ...
    module: {
      rules: [
        {
          test: /\.ts?$/,
          exclude: [/node_modules/, /canisters/, /src/],
          use: 'ts-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    // ...
  };
  
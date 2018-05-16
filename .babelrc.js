module.exports = {
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        alias: {
          '@': './src',
          components: './src/components',
          assets: './src/assets',
        },
      },
    ],
  ],
};

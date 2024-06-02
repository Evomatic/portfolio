export default {
  printWidth: 80,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: true,
  astroAllowShorthand: false,
  plugins: ['prettier-plugin-astro', 'prettier-plugin-css-order'],
  overrides: [
    {
      files: ['.*', '*.json', '*.md', '*.yml'],
      options: {
        useTabs: false,
      },
    },
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};

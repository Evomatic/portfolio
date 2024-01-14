export default {
  printWidth: 100,
	semi: true,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'es5',
    useTabs: true,
    astroAllowShorthand: false,
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
			files: ['.*', '*.json', '*.md', '*.yml'],
			options: {
				useTabs: false,
			},
		},
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};

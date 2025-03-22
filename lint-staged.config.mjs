/**
 * @type {import('lint-staged').Configuration}
 */
const config = {
  '*.{mjs,ts,vue}': (filenames) => {
    const onOneLine = filenames.join(' ');
    return `npm run lint ${onOneLine}`;
  },
};

export default config;

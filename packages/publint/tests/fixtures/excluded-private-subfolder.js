export default {
  'package.json': JSON.stringify({
    name: 'publint-excluded-private-subfolder',
    version: '0.0.1',
    private: true,
    type: 'module',
    exports: {
      './*': './dist/*',
      './browser/*': null,
    },
  }),
  dist: {
    'main.js': 'export const foo = "bar"',
    browser: {
      'main.umd.js': "module.exports = 'foo'",
    },
  },
}

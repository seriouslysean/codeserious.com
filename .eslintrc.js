module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
    },
    parserOptions: {
      parser: 'babel-eslint',
    },
    extends: [
      '@nuxtjs',
      'prettier',
      'prettier/vue',
      'plugin:prettier/recommended',
      'plugin:nuxt/recommended',
    ],
    plugins: [
      'prettier',
    ],
    rules: {
      'nuxt/no-cjs-in-config': 'off',
      'prettier/prettier': 'error',
      'semi': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
    },
  }
const { getESLintConfig } = require('@applint/spec');

module.exports = getESLintConfig('react-ts', {
  rules: {
    'no-negated-condition': 'off',
    'id-length': 'off',
  },
});

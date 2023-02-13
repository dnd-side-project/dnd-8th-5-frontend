module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'hotfix', 'refactor', 'docs', 'style', 'design', 'chore'],
    ],
    'type-case': [2, 'always', 'lower-case'],
  },
};

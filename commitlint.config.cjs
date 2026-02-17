module.exports = {
  extends: ['@commitlint/config-conventional'],

  rules: {
    // ---- Type rules ----
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
      ],
    ],

    // ---- Scope rules ----
    // Scope is optional, but if present it must be kebab-case
    'scope-case': [2, 'always', 'kebab-case'],

    // ---- Message rules ----
    'subject-case': [0], // let humans write readable subjects
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 100],

    // ---- UX improvements ----
    'body-leading-blank': [1, 'always'],
    'footer-leading-blank': [1, 'always'],
  },
}

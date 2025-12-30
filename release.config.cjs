module.exports = {
  branches: ['main'],

  tagFormat: 'v${version}',

  plugins: [
    // 1. Analyze commits
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
        releaseRules: [
          {type: 'docs', release: 'patch'},
          {type: 'refactor', release: 'patch'},
          {type: 'style', release: false},
          {type: 'test', release: false},
          {type: 'chore', release: false},
        ],
      },
    ],

    // 2. Generate release notes
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
      },
    ],

    // 3. Update CHANGELOG.md
    '@semantic-release/changelog',

    // 4. Update package.json version
    [
      '@semantic-release/npm',
      {
        npmPublish: true,
      },
    ],

    // 5. Commit version + changelog back
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'CHANGELOG.md'],
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],

    // 6. Create GitHub Release
    '@semantic-release/github',
  ],
}

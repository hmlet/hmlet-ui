module.exports = {
  branches: [
    'main',
    // RC / pre-release channel: commits merged to `next` produce
    // pre-release versions (e.g. v3.0.0-rc.1) that consuming repos
    // (Website, JP) can pin to and validate before a major release
    // is promoted to `main`.
    {name: 'next', channel: 'rc', prerelease: 'rc'},
  ],

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

    // 4. Update package.json version (no registry publish — this package is
    // consumed via git, e.g. `"@hmlet/ui": "github:hmlet/hmlet-ui#v1.2.3"`)
    [
      '@semantic-release/npm',
      {
        npmPublish: false,
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

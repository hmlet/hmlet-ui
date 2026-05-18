#!/usr/bin/env node

const command = process.argv[2]

if (command === 'sync' || command === 'doctor') {
  const {runSyncCli} = await import('./sync.mjs')
  await runSyncCli({mode: command, argv: process.argv.slice(3)})
} else {
  await import('./server.mjs')
}

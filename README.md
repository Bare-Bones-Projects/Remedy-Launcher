# Remedy Launcher // Alpha CLI

Companion to [Tuna Browser](https://github.com/Bare-Bones-Projects/Tuna-Browser).

This repository now contains an **initial executable Node.js CLI**, with read-only release URL discovery and platform identification. It is not yet a GUI installer, updater, or package manager.

## Run
```sh
npm run check
npm test
npm run start -- status
npm run start -- releases-url
```

No GitHub token is required for these local commands. No downloads, installations, updates, or privileged operations are performed. Cross-platform CI checks are in `.github/workflows/verify.yml`.

## Security boundary
The launcher must never request browser vault keys, cookies, tokens, or browsing history. Future release downloads must verify hashes/signatures before execution and require user confirmation.

License: Apache-2.0 (see LICENSE).

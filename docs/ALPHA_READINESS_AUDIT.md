# // Remedy-Launcher · Alpha readiness audit

**Audited:** 2026-10-31  
**Branch:** `docs/alpha-readiness-audit-20261031`  
**Status:** Review required; no runtime/build certification from this repository inventory.

## Current state
Read-only Node CLI, not a native installer or updater.

## Required alpha preparation
Validate manifest trust, hashes/signatures, atomic rollback and opt-in downloads; build native signed packages and cross-platform tests after full implementation.

## Suggested pull-request sequence
1. Documentation accuracy, quickstart, manifest and version alignment.
2. Reproducible tests, CI and dependency/security checks.
3. Functional completeness and permission-boundary checks.
4. Platform/package builds with hashes, install/uninstall and rollback validation.
5. Screenshot-backed release notes, changelog, known limitations and user-facing alpha test form.

## Documentation deliverables
- Root README: what exists, supported environments, quickstart, example usage, directory map, privacy/security limitations, tests, packaging and troubleshooting.
- `docs/ARCHITECTURE.md`, `docs/DEVELOPMENT.md`, `docs/TESTING.md`, `docs/RELEASE.md`, `docs/DECISIONS.md`, `CHANGELOG.md`, `SECURITY.md` where applicable.
- Avoid documenting proposed behavior as shipped; reference passing CI/job links before calling a feature verified.

## Related project conversation topics (context, not source files)
Tuna Browser & Remedy Launcher.

## Alpha acceptance checklist
- [ ] Fresh checkout installs/builds following README.
- [ ] Automated tests pass in CI and locally.
- [ ] No secrets, personal data, generated databases or unnecessary artifacts committed.
- [ ] Threat model and production limitations documented.
- [ ] Target platform manual acceptance evidence captured.
- [ ] Reproducible release package with checksum generated.
- [ ] Reviewer approves release tag; **do not merge this audit as proof of release readiness**.

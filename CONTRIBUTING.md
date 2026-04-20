# Contributing to Awesome Open Source

Thank you for contributing. This list only includes projects that are **genuinely open source** — no proprietary components, no bait-and-switch licensing.

## Before You Start

- Make sure the project isn't already on the list.
- Confirm it has been actively maintained within the past 12 months.
- It should have at least **50 GitHub stars**.

## Accepted Licenses

Only projects under the following licenses will be considered:

| License | SPDX Identifier |
|---|---|
| MIT License | `MIT` |
| Apache License 2.0 | `Apache-2.0` |
| GNU General Public License v2.0 / v3.0 | `GPL-2.0` / `GPL-3.0` |
| GNU Lesser General Public License | `LGPL-2.1` / `LGPL-3.0` |
| GNU Affero General Public License | `AGPL-3.0` |

Projects with no license, proprietary clauses, BSL, or Commons Clause restrictions will be rejected.

## Criteria for Inclusion

A project must meet **all** of the following:

- Licensed under one of the accepted licenses above
- Source code is fully and publicly available
- Actively maintained — last commit within the past 12 months
- Has a clear purpose and a descriptive README
- No proprietary dependencies required to run core functionality

## What We Don't Accept

- Projects under BSL, Commons Clause, or "source available" licenses
- Abandoned or unmaintained projects
- Open-source versions that are intentionally crippled compared to a paid tier
- Closed-source SaaS with an open-source SDK or plugin

## How to Submit a Pull Request

1. Fork this repository and create a new branch: `add/project-name`
2. Add your entry to the appropriate section in `README.md` following the format below.
3. Open a Pull Request with a title like `Add: Project Name` and a brief explanation of why it belongs.

### Commit Convention
 
This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification (Angular style). All commits must use one of the following types:
 
| Type | When to use |
|---|---|
| `feat` | Adding a new project to the list |
| `fix` | Correcting a broken link, typo, or wrong description |
| `docs` | Changes to README, CONTRIBUTING, or other documentation |
| `chore` | Maintenance tasks (reformatting, reorganizing categories) |
| `remove` | Removing a project from the list |
 
**Examples:**
```
feat: add Helix editor to code editors section
fix: update broken link for Flowbite repository
docs: clarify license criteria in CONTRIBUTING
remove: drop abandoned project from CLI tools
```
 
Commits that do not follow this convention will be asked to be amended before merging.
 
Commits must follow the [Conventional Commits](https://www.conventionalcommits.org/) spec (Angular convention):
 
```
feat: add Helix editor to code editors
fix: correct broken link for Flowbite
docs: update entry format in CONTRIBUTING
```
 
Common types: `feat`, `fix`, `docs`, `chore`. Pull requests with non-conforming commit messages will be asked to rebase before merging.

## Entry Format

```markdown
- [Project Name](https://github.com/owner/repo) - One sentence description starting with a capital letter, ending with a period.
```

- One sentence only — concise and factual, no marketing language
- Link directly to the repository, not the project website

## Categories

Add your entry to the most specific existing category. If no category fits, you may propose a new one, but it must include at least **3 entries** at the time of submission.

---
name: analyze-github-action-logs
description: Analyze recent GitHub Actions workflow runs to identify patterns, mistakes, and improvements. Use when asked to "analyze workflow logs", "review action runs", or "analyze GitHub Actions".
compatibility: Requires gh CLI and access to the GitHub repository.
---

# Analyze GitHub Action Logs

Fetch and analyze recent GitHub Actions runs for a given workflow. Review agent/step performance, identify wasted effort and mistakes, and produce a report with actionable improvements.

## Input

You need:

- **`workflow`** (required) — The workflow file name or ID (e.g., `label_pr.yml`, `check.yml`).
- **`repo`** (optional) — The GitHub repository in `OWNER/REPO` format. Defaults to `hadez8877/awesome-opensource`.
- **`count`** (optional) — Number of recent completed runs to analyze. Defaults to `5`.

## Step 1: List Recent Runs

Fetch the most recent completed runs for the workflow. Filter by `--status=completed`:

```bash
gh run list --workflow=<workflow> -R <repo> --status=completed -L <count>
```

Present the list to orient yourself: run IDs, titles, status (success/failure), and duration. Pick the runs to analyze — prefer a mix of successes and failures if available, and prefer runs that exercised more steps (longer runs tend to go through more stages, while shorter runs may exit early).

## Step 2: Fetch Logs

For each run you want to analyze, save the full log to a temp file:

```bash
gh run view <run_id> -R <repo> --log > /tmp/actions-run-<run_id>.log
```

## Step 3: Identify Step Boundaries

Search each log file for markers that indicate where each step starts and ends. Look for standard GitHub Actions step headers in the log output:

```bash
grep -n "^[0-9]\{4\}-[0-9]\{2\}-[0-9]\{2\}T.*##\[group\]\|^##\[group\]\|Run \|##\[section\]" /tmp/actions-run-<run_id>.log | head -50
```

If the above doesn't match, adapt by scanning the first 100 lines to detect the actual delimiter format used:

```bash
head -100 /tmp/actions-run-<run_id>.log
```

From this, determine which line ranges correspond to each step. Also find any result markers or custom delimiters the workflow may use:

```bash
grep -n "RESULT_START\|RESULT_END\|START\|END\|error\|failed\|success" /tmp/actions-run-<run_id>.log | head -50
```

Note: Some log files may contain binary/null bytes. Use `grep -a` if needed.

## Step 4: Analyze Each Step (Use Subagents)

For each step that ran, **launch a subagent** to analyze that section's log. This is critical to avoid polluting your context with thousands of log lines.

For each subagent, provide:

1. The log file path and the line range for that step
2. If workflow instruction files exist, tell the subagent to read them first for context
3. The run title/context so the subagent understands what was being done
4. The analysis criteria below

### Analysis Criteria

Tell each subagent to evaluate:

1. **Correctness** — Was the step's final result/verdict correct?
2. **Efficiency** — How long did it take? What's a reasonable baseline? Where was time wasted?
3. **Mistakes** — Wrong tool calls, failed commands retried without changes, unnecessary rebuilds, etc.
4. **Instruction compliance** — If workflow instructions exist, did the agent follow them? Where did it deviate?
5. **Scope creep** — Did the agent do work that belongs in a different step?
6. **Suggestions** — Specific, actionable changes that would prevent the issues found.

Tell each subagent to return a structured response with: Summary, Time Analysis, Issues Found (with estimated time wasted for each), and Suggestions for Improvement.

## Step 5: Consolidate Report

After all subagents return, synthesize their findings into a single report. Structure it as:

### Per-Run Summary Table

For each run analyzed, include a table:

| Step | Time | Result | Time Wasted | Top Issue |
| ---- | ---- | ------ | ----------- | --------- |

### Cross-Cutting Patterns

Identify issues that appeared across multiple runs or multiple steps. These are the highest-value improvements. Common patterns to look for:

- **Server management failures** — Port conflicts, failed process kills, stale log files
- **Tool misuse** — Using `curl` instead of `gh`, `jq` not found, etc.
- **Scope creep** — One step doing work that belongs in another
- **Unnecessary rebuilds** — Building packages multiple times without changes
- **Test timeouts** — Running slow E2E/Playwright tests that time out
- **Instruction violations** — Agent doing something the instructions explicitly forbid
- **Redundant work** — Re-reading files, re-running searches, re-installing dependencies

### Prioritized Recommendations

Rank your improvement suggestions by estimated time savings across all runs. For each recommendation:

1. **What to change** — Which file(s) to edit and what to add/modify
2. **Why** — What pattern it addresses, with evidence from the runs
3. **Estimated impact** — How much time it would save per run

## Output

Present the full consolidated report. Do NOT edit any workflow files — only report findings and recommendations. The user will decide which changes to apply.

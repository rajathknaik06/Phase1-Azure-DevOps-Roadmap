# Week 7, Lesson 2: Error handling

> **Week 7 - PowerShell Validation and Errors** - Topic 2 of 2 | Shell used: **Windows PowerShell** (5.1 or 7) in the VS Code terminal, started from the repository root unless stated

Good scripts explain failures and tell automation whether they succeeded.

## 1. Explanation from scratch

**Errors** happen: missing files, no permission, typos. PowerShell has two broad kinds:

- **Terminating errors** stop the current script block (and can be caught).
- **Non-terminating errors** print a red message but the script keeps going; `try/catch` does **not** catch them unless you convert them.

`-ErrorAction Stop` turns a non-terminating error from a command into a terminating one:

```powershell
try {
    Get-Content -LiteralPath ".\nope.txt" -ErrorAction Stop
}
catch {
    Write-Host "Could not read the file: $($_.Exception.Message)"
}
```

Inside `catch`, `$_` is the error. Without `-ErrorAction Stop`, the `catch` block would not run for this failure.

**Exit codes** tell other programs the outcome: `0` means success; non-zero means failure. After a script ends you can read the last code in `$LASTEXITCODE` (for `powershell.exe -File` runs).

The convention used by this project's validator:

| Code | Meaning |
|---|---|
| 0 | validation succeeded |
| 1 | required files or directories are missing |
| 2 | unexpected validation failure |

CI/CD systems read exit codes to decide whether a build passed.

## 2. Simple analogy

Exit codes are like a **traffic light for robots**: green (0) means carry on; any other colour tells the next step to stop and why.

## 3. Key terms

- **`try`/`catch`** - Run code and handle errors.
- **Terminating error** - Stops execution; catchable.
- **Non-terminating error** - Reported but continues.
- **`-ErrorAction Stop`** - Makes errors catchable.
- **Exit code** - Number returned when a script ends.
- **`$LASTEXITCODE`** - Last exit code from an external program.

## 4. Examples and commands

Create `errors-demo.ps1` in `ps-lab`:

```powershell
try {
    Get-Content -LiteralPath ".\nope.txt" -ErrorAction Stop
    Write-Host "Read succeeded"
    exit 0
}
catch {
    Write-Host "ERROR: $($_.Exception.Message)"
    exit 2
}
```

Run it as a separate process to see the code:

```powershell
powershell.exe -NoProfile -File .\errors-demo.ps1
$LASTEXITCODE
```

Expected: an `ERROR:` line mentioning the missing path, then `2`.

## 5. Step-by-step instructions

1. Create the demo script.
2. Run it with `powershell.exe -NoProfile -File`.
3. Print `$LASTEXITCODE` straight after.
4. Create `nope.txt` with `New-Item`, rerun: output `Read succeeded` and `0`.
5. Remove `-ErrorAction Stop`, rerun with the file missing, and observe that `catch` is skipped.

## 6. Hands-on exercise

Write a script that exits `0` if `.\README.md` exists, `1` if it does not, and `2` if an unexpected error occurs.

## 7. Worked solution

```powershell
try {
    if (Test-Path -LiteralPath ".\README.md" -PathType Leaf) { exit 0 }
    else { Write-Host "README.md is missing"; exit 1 }
}
catch {
    Write-Host "Unexpected error: $($_.Exception.Message)"
    exit 2
}
```

Missing is an *expected* failure (1); a thrown exception is *unexpected* (2).

## 8. Common mistakes

1. **Expecting `catch` to run for non-terminating errors** - Add `-ErrorAction Stop`.
2. **Printing errors but exiting 0** - Automation will think it passed.
3. **Empty `catch` blocks** - Always report what failed.

## 9. Revision notes

- `try { } catch { }`.
- `-ErrorAction Stop`.
- Exit codes: 0 success, 1 missing, 2 unexpected.
- `$LASTEXITCODE`.

## 10. Practical task for the project

Run the real validator and read its exit code; then break the project in a temp copy and read it again (see Week 8).

## 11. Progress checklist

- [ ] I can explain **Week 7, Lesson 2: Error handling** in my own words.
- [ ] I ran the example commands and compared my output with the expected output.
- [ ] I completed the hands-on exercise before reading the solution.
- [ ] I completed the practical task for the project.
- [ ] I noted anything confusing in [`docs/progress-tracker.md`](../../docs/progress-tracker.md).

---
Previous: [File checks](01-file-checks.md) | Next: [Week 8: Revision](../week-08-revision-integration/01-revision.md) | [Topic index](../../docs/topic-index.md)

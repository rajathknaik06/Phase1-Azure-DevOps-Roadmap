# Week 6, Lesson 2: Conditions

> **Week 6 - PowerShell Fundamentals** - Topic 2 of 3 | Shell used: **Windows PowerShell** (works in Windows PowerShell 5.1 and PowerShell 7) in the VS Code terminal

Conditions let a script make decisions.

## 1. Explanation from scratch

A **condition** runs different code depending on whether something is true. PowerShell uses `if`, `elseif` and `else`. The test goes in **parentheses** and the code in **curly braces**.

```powershell
if ($count -ge 3) {
    Write-Host "At least three items"
}
else {
    Write-Host "Fewer than three items"
}
```

**Comparison operators** (not `>` or `==`):

| Operator | Meaning |
|---|---|
| `-eq` | equal to |
| `-ne` | not equal to |
| `-gt` | greater than |
| `-ge` | greater than or equal to |
| `-lt` | less than |
| `-le` | less than or equal to |

`-ge` means *greater than or equal to*, so `3 -ge 3` is `True`.

Combine tests with `-and`, `-or`, and negate with `-not` (or `!`).

## 2. Simple analogy

A condition is a **fork in the road with a sign**: 'if the river is shallow, walk across; otherwise take the bridge'.

## 3. Key terms

- **Condition** - A test that is true or false.
- **`if` / `elseif` / `else`** - Decision branches.
- **Comparison operator** - `-eq`, `-ne`, `-gt`, `-ge`...
- **Block** - Code in `{ }`.

## 4. Examples and commands

```powershell
$count = 3
if ($count -ge 3) {
    Write-Host "At least three items"
}
else {
    Write-Host "Fewer than three items"
}

$score = 72
if ($score -ge 90) { Write-Host "Grade A" }
elseif ($score -ge 60) { Write-Host "Grade B" }
else { Write-Host "Needs revision" }
```

Expected output:

```text
At least three items
Grade B
```

## 5. Step-by-step instructions

1. Save the example in a file `cond.ps1` inside `ps-lab` or type it into the terminal.
2. Change `$count` to `2` and run again: output flips to `Fewer than three items`.
3. Change `$score` to `95`, then `40`.
4. Replace `-ge` with `-gt` and observe what happens at exactly `3`.

## 6. Hands-on exercise

Write a condition: if `$fileCount` is 0 print `No files`, if it is 1 to 4 print `Few files`, otherwise `Many files`. Test with 0, 3 and 10.

## 7. Worked solution

```powershell
$fileCount = 3
if ($fileCount -eq 0) { Write-Host "No files" }
elseif ($fileCount -le 4) { Write-Host "Few files" }
else { Write-Host "Many files" }
```

With 0 -> `No files`; 3 -> `Few files`; 10 -> `Many files`. The first true branch wins and the rest are skipped.

## 8. Common mistakes

1. **Using `>=` or `==`** - Use `-ge` and `-eq`.
2. **Missing parentheses `if $count -ge 3`** - Write `if ($count -ge 3)`.
3. **Placing `else` on a new line without a closing brace before it** - Keep `}` then `else {` structure as shown.

## 9. Revision notes

- Syntax: `if (test) { } elseif (test) { } else { }`.
- `-eq -ne -gt -ge -lt -le`.
- `-ge` = greater than or equal to.

## 10. Practical task for the project

Write a condition that prints `Enough required files` when the number of items in `$requiredFiles` is `-ge 3`.

## 11. Progress checklist

- [ ] I can explain **Week 6, Lesson 2: Conditions** in my own words.
- [ ] I ran the example commands and compared my output with the expected output.
- [ ] I completed the hands-on exercise before reading the solution.
- [ ] I completed the practical task for the project.
- [ ] I noted anything confusing in [`docs/progress-tracker.md`](../../docs/progress-tracker.md).

---
Previous: [Variables](01-variables.md) | Next: [Loops](03-loops.md) | [Topic index](../../docs/topic-index.md)

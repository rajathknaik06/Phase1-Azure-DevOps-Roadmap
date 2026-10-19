# Week 6, Lesson 3: Loops

> **Week 6 - PowerShell Fundamentals** - Topic 3 of 3 | Shell used: **Windows PowerShell** (works in Windows PowerShell 5.1 and PowerShell 7) in the VS Code terminal

Loops repeat work so you do not copy and paste commands.

## 1. Explanation from scratch

A **loop** repeats a block of code. The most useful one for beginners is `foreach`, which runs the block **once for each item** in a collection.

```powershell
$files = @("index.html", "styles.css", "app.js")

foreach ($file in $files) {
    Write-Host $file
}
```

Read it as: *for each `$file` in `$files`, print `$file`*. `$file` is a temporary variable that takes each value in turn.

Combine with conditions and `Test-Path` to check many paths:

```powershell
foreach ($file in $files) {
    if (Test-Path -LiteralPath $file) { Write-Host "FOUND   $file" }
    else { Write-Host "MISSING $file" }
}
```

Other loops: `for` (counting), `while` (repeat while a condition holds). Beware infinite loops: stop one with `Ctrl+C`.

## 2. Simple analogy

`foreach` is a **teacher calling out each name on a register**; for every name the same routine happens.

## 3. Key terms

- **Loop** - Repeats code.
- **`foreach`** - Runs once per item.
- **Collection** - A group such as an array.
- **Iteration** - One pass through the loop.
- **Loop variable** - `$file`, holds the current item.

## 4. Examples and commands

```powershell
$files = @("index.html", "styles.css", "app.js")
foreach ($file in $files) {
    Write-Host $file
}
```

Expected output:

```text
index.html
styles.css
app.js
```

Check which exist in the portal folder (run from the course root):

```powershell
$portal = ".\project\student-placement-portal"
foreach ($file in $files) {
    $full = Join-Path $portal $file
    if (Test-Path -LiteralPath $full) { Write-Host "FOUND   $full" }
    else { Write-Host "MISSING $full" }
}
```

Expected: three `FOUND` lines when the project is complete.

## 5. Step-by-step instructions

1. Create the array and loop; confirm three lines print.
2. Add a fourth name `"data\students.json"` to the array and rerun.
3. Add the `Test-Path` check inside the loop.
4. Count how many were missing using a counter: `$missing = 0` then `$missing++` in the else block.

## 6. Hands-on exercise

Write a script that loops through `README.md`, `index.html` and `nothing.txt` in the portal folder and prints how many are missing.

## 7. Worked solution

```powershell
$portal = ".\project\student-placement-portal"
$items = @("README.md", "index.html", "nothing.txt")
$missing = 0
foreach ($item in $items) {
    if (-not (Test-Path -LiteralPath (Join-Path $portal $item))) {
        Write-Host "MISSING $item"
        $missing++
    }
}
Write-Host "Missing count: $missing"
```

Output: `MISSING nothing.txt` and `Missing count: 1`.

## 8. Common mistakes

1. **Using the same name for the collection and the item** - Use `$files` and `$file`.
2. **Forgetting the braces** - Each loop needs `{ }`.
3. **Modifying the array inside the loop** - Avoid it as a beginner.

## 9. Revision notes

- `foreach ($item in $collection) { }`.
- Combine with `if` and `Test-Path`.
- `$missing++` adds one.

## 10. Practical task for the project

Your Week 6 deliverable: a script `week6-check.ps1` (in your own practice folder) that loops through the required portal paths and checks each. Compare it with `Check-PortalStructure.ps1`.

## 11. Progress checklist

- [ ] I can explain **Week 6, Lesson 3: Loops** in my own words.
- [ ] I ran the example commands and compared my output with the expected output.
- [ ] I completed the hands-on exercise before reading the solution.
- [ ] I completed the practical task for the project.
- [ ] I noted anything confusing in [`docs/progress-tracker.md`](../../docs/progress-tracker.md).

---
Previous: [Conditions](02-conditions.md) | Next: [Week 7: File checks](../week-07-powershell-validation-errors/01-file-checks.md) | [Topic index](../../docs/topic-index.md)

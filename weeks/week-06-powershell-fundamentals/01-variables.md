# Week 6, Lesson 1: Variables

> **Week 6 - PowerShell Fundamentals** - Topic 1 of 3 | Shell used: **Windows PowerShell** (works in Windows PowerShell 5.1 and PowerShell 7) in the VS Code terminal

Variables are the building block of every script, including the portal validator.

## 1. Explanation from scratch

A **variable** is a named box that stores a value. In PowerShell a variable name starts with `$`. You put a value in with `=` (the **assignment** operator).

```powershell
$name = "Student Portal"
$count = 3
```

Value kinds you will meet:

- **String** - text in quotes: `"Student Portal"`.
- **Number (integer)** - `3`.
- **Boolean** - `$true` or `$false`.
- **Array** - a list: `@("index.html", "styles.css", "app.js")`.

**Key idea:** assigning a value only stores it in memory. `$fileName = "report.txt"` does **not** create a file. To create a file you need a command such as `New-Item`.

Double quotes expand variables: `"Project: $name"` prints `Project: Student Portal`. Single quotes do not: `'Project: $name'` prints literally `$name`.

## 2. Simple analogy

A variable is a **labelled jar**: the label is the name (`$count`), the contents are the value (`3`). Writing `report.txt` on a label does not put a real file in the cupboard.

## 3. Key terms

- **Variable** - Named storage for a value.
- **Assignment `=`** - Puts a value into a variable.
- **String** - Text.
- **Array** - Ordered list of items.
- **`$true` / `$false`** - Boolean values.
- **Interpolation** - Variable value inserted in double-quoted text.

## 4. Examples and commands

```powershell
$name = "Student Portal"
$count = 3
Write-Host "Project: $name"
Write-Host "Count: $count"
$files = @("index.html", "styles.css", "app.js")
Write-Host "Number of files: $($files.Count)"
$fileName = "report.txt"
Test-Path $fileName
```

Expected output:

```text
Project: Student Portal
Count: 3
Number of files: 3
False
```

The last line is `False` because the variable `$fileName` holds only text; no file named `report.txt` exists.

Now create it on purpose:

```powershell
New-Item -Path $fileName -ItemType File
Test-Path $fileName     # True
Remove-Item $fileName   # clean up this practice file
```

## 5. Step-by-step instructions

1. Open the VS Code terminal in PowerShell.
2. `cd $HOME` then `mkdir ps-lab` and `cd ps-lab` (a safe practice folder).
3. Type each line of the examples and press Enter. Compare your output.
4. Run `Test-Path $fileName` **before** and **after** `New-Item` to see the difference.
5. Use `$files.Count` to count items.

## 6. Hands-on exercise

Create variables `$course = "B.Tech CSE"` and `$year = 3`. Print `I study B.Tech CSE in year 3` using the variables. Then prove that setting `$report = "summary.txt"` does not create the file.

## 7. Worked solution

```powershell
$course = "B.Tech CSE"
$year = 3
Write-Host "I study $course in year $year"
$report = "summary.txt"
Test-Path $report      # False
```

Double quotes insert the variable values. `Test-Path` returns `False` because no file exists; only `New-Item` (or `Set-Content`) would create one.

## 8. Common mistakes

1. **Believing assignment creates a file** - It stores text only; use `New-Item`.
2. **Spaces around `$` or typing `$ name`** - The name must follow `$` directly.
3. **Using single quotes and expecting expansion** - Use double quotes to insert values.

## 9. Revision notes

- `$name = value` stores a value.
- String, number, boolean, array.
- Double quotes expand variables.
- Assignment never creates files.

## 10. Practical task for the project

Create `$projectName = "Student Placement Portal"` and an array `$requiredFiles` with `index.html`, `styles.css`, `app.js`. You will reuse the array in the next lessons.

## 11. Progress checklist

- [ ] I can explain **Week 6, Lesson 1: Variables** in my own words.
- [ ] I ran the example commands and compared my output with the expected output.
- [ ] I completed the hands-on exercise before reading the solution.
- [ ] I completed the practical task for the project.
- [ ] I noted anything confusing in [`docs/progress-tracker.md`](../../docs/progress-tracker.md).

---
Previous: [Week 5: Firewalls](../week-05-networking-fundamentals/07-firewalls.md) | Next: [Conditions](02-conditions.md) | [Topic index](../../docs/topic-index.md)

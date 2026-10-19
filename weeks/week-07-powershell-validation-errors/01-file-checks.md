# Week 7, Lesson 1: File checks

> **Week 7 - PowerShell Validation and Errors** - Topic 1 of 2 | Shell used: **Windows PowerShell** (5.1 or 7) in the VS Code terminal, started from the repository root unless stated

Checking before acting is the heart of reliable automation.

## 1. Explanation from scratch

`Test-Path` returns `True` if a path exists and `False` if it does not. It never creates anything.

Useful options:

- `-LiteralPath` - treat the path exactly as written (no wildcard surprises with characters like `[` or `*`).
- `-PathType Leaf` - succeed only if the path is a **file**.
- `-PathType Container` - succeed only if it is a **directory**.

Distinguishing matters: a *folder* named `app.js` would pass a bare `Test-Path` but is not the file you need.

`Join-Path` safely combines parts into a path using the right separator: `Join-Path "project" "index.html"`.

Remember: `$path = ".\README.md"` stores text only. To create a file, use `New-Item -ItemType File`; for a directory use `New-Item -ItemType Directory`. Creating is a separate, deliberate step.

## 2. Simple analogy

`Test-Path` is **looking at the shelf** to see if the book is there. `New-Item` is **writing a new book**. Reading the label does not produce the book.

## 3. Key terms

- **`Test-Path`** - Checks whether a path exists.
- **Leaf** - A file.
- **Container** - A directory.
- **`Join-Path`** - Builds a path from parts.
- **`-LiteralPath`** - Exact path, no wildcards.
- **`New-Item`** - Creates a file or directory.

## 4. Examples and commands

```powershell
$path = ".\README.md"

if (Test-Path -LiteralPath $path -PathType Leaf) {
    Write-Host "File exists"
}
else {
    Write-Host "File is missing"
}
```

Run from the repo root: `File exists`. Now the portal:

```powershell
$portal = Join-Path "." "project\student-placement-portal"
Test-Path -LiteralPath (Join-Path $portal "index.html") -PathType Leaf       # True
Test-Path -LiteralPath (Join-Path $portal "data") -PathType Container        # True
Test-Path -LiteralPath (Join-Path $portal "data") -PathType Leaf             # False (it's a folder)
```

Creating things deliberately (in your practice folder, not the repo):

```powershell
cd $HOME\ps-lab
New-Item -Path "demo.txt" -ItemType File
New-Item -Path "demo-folder" -ItemType Directory
```

## 5. Step-by-step instructions

1. Open a terminal in the repo root (`pwd` should end in `Phase1-Azure-DevOps-Roadmap`).
2. Run the `README.md` check.
3. Run the three `Test-Path` lines and explain why the last returns `False`.
4. Change `$path` to `.\missing.md` and rerun to see the failure branch.
5. Move to `ps-lab` and practise `New-Item`.

## 6. Hands-on exercise

Write code that checks `project\student-placement-portal\app.js` is a **file** and `project\student-placement-portal\scripts` is a **directory**, printing a clear message for each.

## 7. Worked solution

```powershell
$root = "project\student-placement-portal"
$file = Join-Path $root "app.js"
$dir  = Join-Path $root "scripts"

if (Test-Path -LiteralPath $file -PathType Leaf) { Write-Host "OK file: $file" }
else { Write-Host "MISSING file: $file" }

if (Test-Path -LiteralPath $dir -PathType Container) { Write-Host "OK directory: $dir" }
else { Write-Host "MISSING directory: $dir" }
```

`-PathType` makes the check strict about type.

## 8. Common mistakes

1. **Assuming assignment creates a file** - Use `New-Item`.
2. **Checking only existence** - Add `-PathType` to separate files and folders.
3. **Building paths with string concatenation and `\`** - Use `Join-Path`.

## 9. Revision notes

- `Test-Path -LiteralPath $p -PathType Leaf/Container`.
- `Join-Path` for paths.
- `New-Item` creates; `Test-Path` only checks.

## 10. Practical task for the project

Read `scripts/Check-PortalStructure.ps1` and find where it uses `Join-Path`, `-LiteralPath` and `-PathType`.

## 11. Progress checklist

- [ ] I can explain **Week 7, Lesson 1: File checks** in my own words.
- [ ] I ran the example commands and compared my output with the expected output.
- [ ] I completed the hands-on exercise before reading the solution.
- [ ] I completed the practical task for the project.
- [ ] I noted anything confusing in [`docs/progress-tracker.md`](../../docs/progress-tracker.md).

---
Previous: [Week 6: Loops](../week-06-powershell-fundamentals/03-loops.md) | Next: [Error handling](02-error-handling.md) | [Topic index](../../docs/topic-index.md)

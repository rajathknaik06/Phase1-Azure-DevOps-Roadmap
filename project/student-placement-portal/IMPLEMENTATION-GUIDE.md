# Implementation Guide: building the portal step by step

Work in a **copy** if you want to rebuild from scratch (e.g. `Copy-Item -Recurse project\student-placement-portal $HOME\portal-rebuild`). Commit after each step.

## Step 1 - Folder skeleton

Create the folders and empty files (PowerShell):

```powershell
mkdir portal-rebuild ; cd portal-rebuild
mkdir data, scripts
New-Item README.md, index.html, styles.css, app.js -ItemType File
New-Item data\students.json -ItemType File
git init ; git add . ; git commit -m "Create portal skeleton"
```

## Step 2 - Semantic HTML (`index.html`)

- `<!DOCTYPE html>`, `<html lang="en">`, `<meta charset>` and the `viewport` meta tag (needed for mobile layouts).
- Landmarks: `<header>`, `<main>`, `<footer>`.
- A `<form role="search">` with a `<label for="...">` for each control. Labels make controls usable by screen readers.
- A results `<ul id="results">` and a status paragraph `role="status" aria-live="polite"` so changes are announced.
- Link `styles.css` in `<head>`; load `app.js` at the end of `<body>`.

Commit: `Add page structure`.

## Step 3 - Responsive CSS (`styles.css`)

1. CSS variables in `:root` for colours.
2. Mobile-first: one column by default.
3. `@media (min-width: 40rem)` for two columns, `62rem` for three.
4. `:focus-visible` outlines so keyboard users can see where they are.

Commit: `Add responsive styles`.

## Step 4 - Data (`app.js` + `data/students.json`)

Create 12 fictional records: `id`, `name`, `course`, `year`, `skills[]`. Embed them in `app.js` as `FALLBACK_STUDENTS`, and save the same list to `data/students.json`.

*Why embed?* `file://` pages often cannot `fetch()` local files.

## Step 5 - Pure logic

Write functions that do not touch the page:

- `normalize(value)` - lower-case and trim.
- `filterStudents(students, query, course)` - keeps a student only if the course matches (or is empty) **and** the text matches the name or any skill.
- `uniqueCourses(students)` - for the drop-down.
- `statusMessage(count, total, query, course)` - includes the **no-match** message.

Pure functions are easy to test (see the Node check in Week 8).

## Step 6 - Rendering

- `createCard(student)` builds elements with `createElement` and `textContent` (never `innerHTML` with data) so the page cannot be tricked by odd text.
- `render(students)` reads the inputs, filters, clears `#results`, appends cards, and updates `#status`.
- `fillCourses` fills the `<select>`.

## Step 7 - Events and data loading

- On `input`/`change` in the form, call `render`.
- On `reset`, re-render after the fields clear.
- `loadStudents()` uses the embedded data on `file://`, and tries `data/students.json` when served over `http(s)`, falling back on failure.

## Step 8 - Validator (`scripts/Check-PortalStructure.ps1`)

1. Decide the project root (`Split-Path $PSScriptRoot -Parent`).
2. Build an array of required items with a type (File/Directory).
3. `foreach` item: `Join-Path`, then `Test-Path -LiteralPath ... -PathType`.
4. Print PASS/FAIL, count problems.
5. `exit 0`, `exit 1`, and `catch { exit 2 }`.

## Step 9 - Test by hand

1. Open `index.html` by double-click. Confirm 12 cards.
2. Search `python` -> 4 cards. Course `BCA` -> 2 cards. `zzzz` -> the no-match message.
3. Press `Tab` through the page; every control shows a focus outline.
4. Run the validator -> exit code 0.
5. In a **temporary copy** delete `app.js` and run it again -> exit code 1 and `MISSING FILE: app.js`.

## Step 10 - Document and commit

Write the README, then:

```powershell
git add .
git commit -m "Complete Student Placement Portal Foundation"
```

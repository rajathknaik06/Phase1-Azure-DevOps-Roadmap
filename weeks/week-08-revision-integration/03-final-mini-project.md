# Week 8, Lesson 3: Final mini-project

> **Week 8 - Revision and Integration** - Topic 3 of 3 | Shell used: Mixed: Windows PowerShell for Git/PowerShell/portal; Linux shell for Linux topics; browser for the portal and GitHub

You will now run, test, break, fix, document and publish the Student Placement Portal Foundation.

## 1. Explanation from scratch

The final project lives in [`project/student-placement-portal`](../../project/student-placement-portal/). Read its [README](../../project/student-placement-portal/README.md) and [implementation guide](../../project/student-placement-portal/IMPLEMENTATION-GUIDE.md) first.

You will complete **eight project tasks**:

1. Open and explore the portal in the browser.
2. Test search and filtering.
3. Run the validator (expect exit code 0).
4. Create a missing-file failure in a safe **temporary copy** (expect exit code 1).
5. Diagnose and fix it.
6. Make an improvement on a feature branch (add a student or a style tweak).
7. Merge and commit.
8. Push to GitHub and complete the final checklist.

**How the pieces work (short code tour):**

- `filterStudents` keeps a student if the course matches **and** the text appears in the name or a skill. Empty filters match everything.
- `statusMessage` returns the user-facing no-match text when the count is 0.
- `createCard` uses `textContent`, not `innerHTML`, to avoid injecting HTML.
- `loadStudents` embeds data for `file://` and tries `data/students.json` over http(s).
- The validator loops over a required-items array, uses `Join-Path` and `Test-Path -LiteralPath -PathType`, prints PASS/FAIL and exits 0/1/2.

## 2. Simple analogy

The final project is the **driving test** after the lessons: you apply everything together on a real route.

## 3. Key terms

- **Acceptance check** - A test that the project does what was promised.
- **Temporary copy** - A throw-away copy used for safe experiments.
- **Regression** - Something that used to work and broke.

## 4. Examples and commands

**Task 3: validate** (repository root):

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File ".\project\student-placement-portal\scripts\Check-PortalStructure.ps1"
$LASTEXITCODE
```

Expected last lines: `RESULT: PASSED (exit code 0)` and `0`.

**Task 4: safe failure in a temp copy**

```powershell
$tmp = Join-Path $env:TEMP "portal-test"
if (Test-Path -LiteralPath $tmp) { Remove-Item -LiteralPath $tmp -Recurse -Force }
Copy-Item -Recurse ".\project\student-placement-portal" $tmp
Remove-Item -LiteralPath (Join-Path $tmp "app.js")
powershell.exe -NoProfile -ExecutionPolicy Bypass -File (Join-Path $tmp "scripts\Check-PortalStructure.ps1")
$LASTEXITCODE
```

Expected: `[FAIL] MISSING FILE: app.js`, `RESULT: FAILED (exit code 1)`, `1`. (On Linux/macOS PowerShell 7 replace `$env:TEMP` with `[IO.Path]::GetTempPath()`.) The only thing deleted is inside the temp folder.

## 5. Step-by-step instructions

1. **Explore:** double-click `index.html`. Count 12 cards.
2. **Test search:** `python` -> 4; course `BCA` -> 2; `azure` + `B.Tech IT` -> 1; `zzzz` -> no-match message; **Clear filters** -> 12 again.
3. **Keyboard test:** press `Tab` through every control.
4. **Validate** (task 3), then **break and diagnose** (task 4). Fix by copying `app.js` back into the temp copy and rerun: exit 0.
5. **Improve on a branch:** `git switch -c feature/add-student`. Add a 13th fictional record to **both** `app.js` and `data/students.json`. Reload: 13 cards.
6. Run the validator again, then commit and merge:

```powershell
git add .
git commit -m "Add a fictional student record"
git switch main
git merge feature/add-student
```

7. **Push** following the [GitHub upload guide](../../docs/github-upload-guide.md).
8. Tick every box in the [final assessment](../../docs/final-assessment.md).

## 6. Hands-on exercise

Add the fictional student `S013 / Hari Varma / B.Tech IT / year 2 / skills: Azure, Python, Git` to the portal so that searching `varma` returns exactly one card. Then rerun the validator.

## 7. Worked solution

Add this object to the end of `FALLBACK_STUDENTS` in `app.js` (before the closing `]`, after a comma) **and** to `data/students.json`:

```json
{ "id": "S013", "name": "Hari Varma", "course": "B.Tech IT", "year": 2, "skills": ["Azure", "Python", "Git"] }
```

Reload the page: search `varma` shows one card; the footer line shows the data source. Validator: still exit code 0 because the structure did not change. *Why both files:* double-click uses the embedded copy, a local web server uses the JSON file.

## 8. Common mistakes

1. **Editing only one data copy** - Keep `app.js` and `students.json` in sync.
2. **Trailing comma in JSON** - JSON forbids a comma after the last item.
3. **Deleting from the real project when testing failure** - Always use the temp copy.

## 9. Revision notes

- Run, test, break (safely), fix, commit, push.
- Both data copies must match.
- Exit code 0 = good, 1 = missing, 2 = unexpected.

## 10. Practical task for the project

Finish the [final checklist](../../docs/final-assessment.md#final-project-checklist) and push your repository.

## 11. Progress checklist

- [ ] I can explain **Week 8, Lesson 3: Final mini-project** in my own words.
- [ ] I ran the example commands and compared my output with the expected output.
- [ ] I completed the hands-on exercise before reading the solution.
- [ ] I completed the practical task for the project.
- [ ] I noted anything confusing in [`docs/progress-tracker.md`](../../docs/progress-tracker.md).

---
Previous: [Integration](02-integration.md) | Next: [Final assessment](../../docs/final-assessment.md) | [Topic index](../../docs/topic-index.md)

# Week 2, Lesson 2: Branches

> **Week 2 - GitHub Collaboration** - Topic 2 of 5 | Shell used: Windows PowerShell / VS Code terminal (Git commands are identical in any shell)

Branches let you try changes without touching the stable version.

## 1. Explanation from scratch

A **branch** is an independent line of commits. `main` is the stable line. A **feature branch** (for example `feature/update-readme`) is a safe place to work. If the idea fails, you delete the branch and `main` is untouched. If it succeeds, you merge it.

Commands:

- `git branch` - list branches (`*` marks the current one).
- `git switch -c feature/update-readme` - create and switch.
- `git switch main` - go back.
- `git branch -d feature/update-readme` - delete a merged branch.

Branch names should describe the work. Slashes group names (`feature/`, `fix/`).

## 2. Simple analogy

A branch is a **photocopy of a document that you scribble on**; the original stays clean until you decide to merge the good edits.

## 3. Key terms

- **Branch** - A line of commits.
- **`main`** - The default stable branch.
- **Switch** - Move to another branch.
- **Feature branch** - A branch for one piece of work.

## 4. Examples and commands

```powershell
git branch
git switch -c feature/update-readme
"New section" | Out-File -Append README.md -Encoding utf8
git add .
git commit -m "Update project documentation"
git branch
git switch main
Get-Content README.md     # the new line is NOT here
git switch feature/update-readme
Get-Content README.md     # the new line IS here
```

The files in your folder change when you switch branches. That is normal.

## 5. Step-by-step instructions

1. Make sure `git status` is clean on `main`.
2. Run `git switch -c feature/update-readme`.
3. Edit `README.md`, then `git add .` and `git commit -m "Update project documentation"`.
4. Run `git switch main` and open the README: your change disappears.
5. Run `git switch feature/update-readme`: it reappears.

## 6. Hands-on exercise

Create branch `feature/add-notes`, add `notes.txt`, commit, return to `main`, and prove `notes.txt` is not on `main`.

## 7. Worked solution

```powershell
git switch -c feature/add-notes
"notes" | Out-File notes.txt -Encoding utf8
git add notes.txt ; git commit -m "Add notes file"
git switch main
Test-Path notes.txt        # False
```

`Test-Path` returns `False` because the file only exists in the commits of the feature branch.

## 8. Common mistakes

1. **Switching with uncommitted changes** - Commit them first (or use `git stash`).
2. **Committing on `main` by accident** - Run `git branch` before working.
3. **Deleting an unmerged branch** - `-d` refuses; do not use `-D` unless you are sure.

## 9. Revision notes

- Branch = independent line of work.
- `git switch -c name` creates and switches.
- `git branch` lists, `-d` deletes.
- Files change when you switch.

## 10. Practical task for the project

Do all further edits to this course repo on a branch such as `feature/my-notes`.

## 11. Progress checklist

- [ ] I can explain **Week 2, Lesson 2: Branches** in my own words.
- [ ] I ran the example commands and compared my output with the expected output.
- [ ] I completed the hands-on exercise before reading the solution.
- [ ] I completed the practical task for the project.
- [ ] I noted anything confusing in [`docs/progress-tracker.md`](../../docs/progress-tracker.md).

---
Previous: [GitHub](01-github.md) | Next: [Merging](03-merging.md) | [Topic index](../../docs/topic-index.md)

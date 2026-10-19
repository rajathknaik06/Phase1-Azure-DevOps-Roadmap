# Week 1, Lesson 3: Staging

> **Week 1 - Git Fundamentals** - Topic 3 of 9 | Shell used: Windows PowerShell / VS Code terminal (Git commands behave the same in any shell)

Staging lets you choose exactly what goes into the next commit.

## 1. Explanation from scratch

The **staging area** is a holding area between your working tree and the commit history. `git add <file>` moves a change into the staging area. `git commit` then saves everything staged as one snapshot.

Why two steps? Suppose you fixed a bug **and** started an unrelated feature. Staging lets you commit the bug fix alone with a clear message, and commit the feature later. Small, focused commits are far easier to review.

Useful commands:

- `git add README.md` - stage one file.
- `git add .` - stage everything in the current folder (check with `git status` first).
- `git diff` - show changes **not yet** staged.
- `git diff --staged` - show what **is** staged and will be committed.
- `git restore --staged README.md` - unstage a file (keeps your edits). **Needs at least one commit to exist.** In a brand-new repository with no commits yet, use `git rm --cached README.md` instead (also keeps your file).

## 2. Simple analogy

Packing a **shipping box**: you choose which items to put in the box (staging), check the box contents (`git diff --staged`), then seal and label it (commit).

## 3. Key terms

- **Staging area / index** - Where changes wait before being committed.
- **Stage** - To mark a change for the next commit with `git add`.
- **Diff** - A line-by-line comparison showing added and removed lines.
- **Unstage** - Remove a file from staging without losing your edits.

## 4. Examples and commands

Inside `git-practice`:

```powershell
"# Practice project" | Out-File README.md -Encoding utf8
git status
git add README.md
git status
git diff --staged
```

After `git add`, `git status` shows `README.md` under **Changes to be committed** in green. `git diff --staged` prints something like:

```text
+++ b/README.md
@@ -0,0 +1 @@
+# Practice project
```

To unstage (both keep your file and your edits):

```powershell
git rm --cached README.md        # use this while the repository has NO commits yet
git restore --staged README.md   # use this once at least one commit exists
```

If you run `git restore --staged` too early Git answers `fatal: could not resolve HEAD`. That is not damage; it just means there is no commit to compare with yet.

## 5. Step-by-step instructions

1. Make sure you are inside `git-practice` (`pwd`).
2. Create `README.md` as shown.
3. Run `git status`: the file is red (untracked).
4. Run `git add README.md`, then `git status`: the file is green (staged).
5. Run `git diff --staged` to read exactly what will be committed.
6. Practise unstaging with `git rm --cached README.md` (no commits exist yet), run `git status` to see the file become untracked again, then stage it again with `git add README.md`.

## 6. Hands-on exercise

Create two files, `a.txt` and `b.txt`. Stage **only** `a.txt`. Prove with a Git command that `a.txt` is staged and `b.txt` is not.

## 7. Worked solution

```powershell
"A" | Out-File a.txt -Encoding utf8
"B" | Out-File b.txt -Encoding utf8
git add a.txt
git status
```

`a.txt` appears under *Changes to be committed*, `b.txt` under *Untracked files*. `git diff --staged` shows only `a.txt`.

## 8. Common mistakes

1. **Editing after `git add`** - If you change a file after staging it, the new edits are *not* staged. Run `git add` again.
2. **`fatal: could not resolve HEAD` when unstaging** - `git restore --staged` needs an existing commit. In a repo with no commits use `git rm --cached <file>`.
3. **Using `git add .` blindly** - It can stage logs, secrets or junk. Run `git status` first and keep a good `.gitignore`.
4. **Thinking `git add` saves history** - Only `git commit` creates history.

## 9. Revision notes

- Staging = choosing what goes into the next commit.
- `git add`, `git diff --staged`, `git restore --staged` (after the first commit) or `git rm --cached` (before it).
- Always check `git status` before committing.

## 10. Practical task for the project

In the course repo, stage `README.md` alone with `git add README.md` and read `git diff --staged` before moving on to the next lesson.

## 11. Progress checklist

- [ ] I can explain **Week 1, Lesson 3: Staging** in my own words.
- [ ] I ran the example commands and compared my output with the expected output.
- [ ] I completed the hands-on exercise before reading the solution.
- [ ] I completed the practical task for the project.
- [ ] I noted anything confusing in [`docs/progress-tracker.md`](../../docs/progress-tracker.md).

---
Previous: [Repositories](02-repositories.md) | Next: [Commits](04-commits.md) | [Topic index](../../docs/topic-index.md)

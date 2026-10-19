# Week 1, Lesson 6: Pull

> **Week 1 - Git Fundamentals** - Topic 6 of 9 | Shell used: Windows PowerShell / VS Code terminal (Git commands behave the same in any shell)

Pulling brings other people's new commits (or your own from another computer) into your copy.

## 1. Explanation from scratch

`git pull` downloads new commits from the remote and merges them into your current branch. It is really two steps: `git fetch` (download) then `git merge` (combine).

Safe habit: commit or stash your own work first, then `git pull`. Pull **before** you start new work and **before** you push, to reduce conflicts.

Useful checks: `git remote -v` (where will I pull from?), `git status` (am I behind?), `git fetch` (download without merging).

## 2. Simple analogy

Pulling is **checking the shared team notebook for new pages** and adding them to your copy.

## 3. Key terms

- **Fetch** - Download remote changes without changing your files.
- **Merge** - Combine two lines of work.
- **Upstream** - The remote branch your branch tracks.
- **Up to date** - You already have all remote commits.

## 4. Examples and commands

```powershell
cd $HOME\clone-lab
git pull
```

If nothing is new:

```text
Already up to date.
```

If someone pushed new work you would see a summary like `2 files changed, 10 insertions(+)`.

Preview before merging:

```powershell
git fetch
git status
git log --oneline main..origin/main
```

## 5. Step-by-step instructions

1. `cd` into a cloned repository.
2. Run `git status` and ensure the tree is clean.
3. Run `git pull`.
4. Read the output: either *Already up to date* or a list of updated files.
5. Run `git log --oneline -3` to see the newest commits.

## 6. Hands-on exercise

Simulate a team member locally: clone `git-practice` into `git-practice-b`, commit a new file in the **original**, then pull in the copy and confirm the file arrives.

## 7. Worked solution

```powershell
cd $HOME
git clone git-practice git-practice-b
cd git-practice
"new" | Out-File teammate.txt -Encoding utf8
git add teammate.txt ; git commit -m "Add teammate file"
cd ..\git-practice-b
git pull
Get-ChildItem teammate.txt
```

The copy remembers `git-practice` as `origin`, so `git pull` fetches the new commit and merges it.

## 8. Common mistakes

1. **Pulling with uncommitted edits to the same file** - Commit or stash first.
2. **`There is no tracking information`** - The branch has no upstream. Use `git pull origin main` or `git push -u origin main` first.
3. **Expecting `pull` to upload** - Pull downloads; push uploads.

## 9. Revision notes

- `git pull` = fetch + merge.
- Pull before you start work and before you push.
- `Already up to date` means no new commits.

## 10. Practical task for the project

Before every study session on this repo, run `git pull` once it has a remote.

## 11. Progress checklist

- [ ] I can explain **Week 1, Lesson 6: Pull** in my own words.
- [ ] I ran the example commands and compared my output with the expected output.
- [ ] I completed the hands-on exercise before reading the solution.
- [ ] I completed the practical task for the project.
- [ ] I noted anything confusing in [`docs/progress-tracker.md`](../../docs/progress-tracker.md).

---
Previous: [Clone](05-clone.md) | Next: [Push](07-push.md) | [Topic index](../../docs/topic-index.md)

# Week 2, Lesson 5: Merge conflicts

> **Week 2 - GitHub Collaboration** - Topic 5 of 5 | Shell used: Windows PowerShell / VS Code terminal (Git commands are identical in any shell)

Conflicts look scary but follow a simple, repeatable recipe.

## 1. Explanation from scratch

A **merge conflict** happens when two branches changed the *same lines* of the same file in different ways. Git stops and marks the file so a human can decide.

Markers Git inserts:

```text
<<<<<<< HEAD
line from the branch you are on
=======
line from the branch being merged
>>>>>>> feature/conflict-demo
```

Recipe:

1. Run `git status` to see which files are conflicted.
2. Open the file and decide the final text.
3. **Delete** all three marker lines (`<<<<<<<`, `=======`, `>>>>>>>`).
4. `git add <file>` to say it is resolved.
5. `git commit` to complete the merge.

`git merge --abort` cancels the merge and returns to the state before it.

## 2. Simple analogy

Two editors changed the **same sentence** in two photocopies. You, the author, choose which wording stays.

## 3. Key terms

- **Conflict** - Git cannot merge automatically.
- **Conflict markers** - `<<<<<<<`, `=======`, `>>>>>>>`.
- **HEAD** - Your current branch's version.
- **Resolve** - Choose final content, stage it, commit.

## 4. Examples and commands

Safe practice repo (never use your real work for this):

```powershell
cd $HOME
mkdir conflict-lab ; cd conflict-lab
git init
"Color: blue" | Out-File colors.txt -Encoding utf8
git add . ; git commit -m "Add colors"
git switch -c feature/conflict-demo
"Color: green" | Out-File colors.txt -Encoding utf8
git commit -am "Change color to green"
git switch main
"Color: red" | Out-File colors.txt -Encoding utf8
git commit -am "Change color to red"
git merge feature/conflict-demo
```

Output ends with `CONFLICT (content): Merge conflict in colors.txt`. Open the file:

```text
<<<<<<< HEAD
Color: red
=======
Color: green
>>>>>>> feature/conflict-demo
```

## 5. Step-by-step instructions

1. Run the example to create the conflict.
2. `git status` - note `both modified: colors.txt`.
3. Open `colors.txt` in VS Code. Choose **Accept Current**, **Accept Incoming**, or edit manually.
4. Make sure no marker lines remain.
5. `git add colors.txt`
6. `git commit -m "Resolve colour conflict"` (an editor message may open: save and close).
7. `git log --oneline --graph` to see the merge.

## 6. Hands-on exercise

Resolve the conflict so the file reads exactly `Color: teal`, then complete the merge.

## 7. Worked solution

Edit `colors.txt` so it contains only `Color: teal` (no markers), then:

```powershell
git add colors.txt
git commit -m "Resolve colour conflict with teal"
git status
```

The merge is complete when `git status` says the tree is clean. *Why:* Git only needs you to supply the final text and tell it the file is resolved with `git add`.

## 8. Common mistakes

1. **Leaving marker lines in the file** - They are not valid content; search for `<<<<<<<`.
2. **Committing without `git add`** - Git refuses; stage the resolved file.
3. **Giving up** - `git merge --abort` returns to safety.

## 9. Revision notes

- Same lines changed = conflict.
- Edit, remove markers, `git add`, `git commit`.
- `git merge --abort` cancels.

## 10. Practical task for the project

Re-do the conflict in `conflict-lab` once more without looking at the steps, and record how long it took in your progress tracker.

## 11. Progress checklist

- [ ] I can explain **Week 2, Lesson 5: Merge conflicts** in my own words.
- [ ] I ran the example commands and compared my output with the expected output.
- [ ] I completed the hands-on exercise before reading the solution.
- [ ] I completed the practical task for the project.
- [ ] I noted anything confusing in [`docs/progress-tracker.md`](../../docs/progress-tracker.md).

---
Previous: [Pull requests](04-pull-requests.md) | Next: [Week 3: Linux files](../week-03-linux-files-and-permissions/01-linux-files.md) | [Topic index](../../docs/topic-index.md)

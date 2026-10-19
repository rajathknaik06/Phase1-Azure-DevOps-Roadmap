# Week 2, Lesson 3: Merging

> **Week 2 - GitHub Collaboration** - Topic 3 of 5 | Shell used: Windows PowerShell / VS Code terminal (Git commands are identical in any shell)

Merging combines finished work back into another branch.

## 1. Explanation from scratch

`git merge <branch>` brings the commits of `<branch>` into the branch you are **currently on**. You normally switch to `main` and merge the feature in.

Two outcomes:

1. **Fast-forward** - `main` had no new commits, so Git just moves `main` forward.
2. **Merge commit** - both branches changed; Git creates a new commit joining them.

If both branches edited the *same lines*, Git cannot decide and you get a **merge conflict** (lesson 5).

## 2. Simple analogy

Merging is **folding the edited photocopy's pages back into the master document**.

## 3. Key terms

- **Merge** - Combine histories.
- **Fast-forward** - Move the branch pointer without a new commit.
- **Merge commit** - A commit with two parents.
- **Target branch** - The branch you are on when merging.

## 4. Examples and commands

```powershell
git switch main
git merge feature/update-readme
git log --oneline --graph
git branch -d feature/update-readme
```

Typical output:

```text
Updating 3f2a9c1..8d4e2b7
Fast-forward
 README.md | 1 +
 1 file changed, 1 insertion(+)
```

## 5. Step-by-step instructions

1. Finish and commit work on the feature branch.
2. `git switch main`.
3. `git pull` (once a remote exists).
4. `git merge feature/update-readme`.
5. Run your checks, then `git branch -d feature/update-readme`.

## 6. Hands-on exercise

Merge `feature/add-notes` into `main`, then delete the branch and show the graph.

## 7. Worked solution

```powershell
git switch main
git merge feature/add-notes
git branch -d feature/add-notes
git log --oneline --graph
```

The merge runs on `main` because merging pulls *into* the current branch.

## 8. Common mistakes

1. **Merging while on the wrong branch** - Run `git branch` first; the `*` is the target.
2. **Forgetting to delete merged branches** - Clutter; delete with `-d`.
3. **Panicking at conflict text** - See lesson 5; it is fixable.

## 9. Revision notes

- Switch to the target, then `git merge source`.
- Fast-forward vs merge commit.
- `git log --oneline --graph` visualises it.

## 10. Practical task for the project

Merge your documentation branch of this course repo into `main`.

## 11. Progress checklist

- [ ] I can explain **Week 2, Lesson 3: Merging** in my own words.
- [ ] I ran the example commands and compared my output with the expected output.
- [ ] I completed the hands-on exercise before reading the solution.
- [ ] I completed the practical task for the project.
- [ ] I noted anything confusing in [`docs/progress-tracker.md`](../../docs/progress-tracker.md).

---
Previous: [Branches](02-branches.md) | Next: [Pull requests](04-pull-requests.md) | [Topic index](../../docs/topic-index.md)

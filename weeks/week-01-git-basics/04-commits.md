# Week 1, Lesson 4: Commits

> **Week 1 - Git Fundamentals** - Topic 4 of 9 | Shell used: Windows PowerShell / VS Code terminal (Git commands behave the same in any shell)

A commit is the permanent snapshot that makes Git useful.

## 1. Explanation from scratch

A **commit** records everything that is currently staged, plus an author, a time, and a **message**. Each commit has a unique ID (a hash such as `a1b2c3d`). Commits form a chain, so Git knows the order of your work.

Good commit messages are short, written in the imperative, and say *why or what*: `Add portal search box`, not `stuff` or `changes`.

Commands:

- `git commit -m "Document project setup"` - commit staged changes.
- `git log` - full history. `git log --oneline` - one line per commit.
- `git show` - details of the latest commit.

## 2. Simple analogy

A commit is a **dated photo** of your project with a caption. The log is the photo album.

## 3. Key terms

- **Commit hash** - A unique ID for a commit, e.g. `a1b2c3d`.
- **Commit message** - The caption describing the change.
- **HEAD** - A pointer to your current commit.
- **Clean working tree** - No uncommitted changes.

## 4. Examples and commands

```powershell
git add README.md
git commit -m "Document project setup"
git log --oneline
```

Expected output:

```text
[main (root-commit) 3f2a9c1] Document project setup
 1 file changed, 1 insertion(+)
 create mode 100644 README.md
3f2a9c1 Document project setup
```

Make a second commit:

```powershell
"More notes" | Out-File -Append README.md -Encoding utf8
git add README.md
git commit -m "Add more notes to README"
git log --oneline
```

Newest commit is listed first.

## 5. Step-by-step instructions

1. Stage a file with `git add`.
2. Run `git commit -m "Your message"`. Keep the message inside double quotes.
3. Run `git status`: it should say `nothing to commit, working tree clean`.
4. Run `git log --oneline` and find your commit.
5. Repeat with a second change so your history has two commits.

## 6. Hands-on exercise

Make three commits in `git-practice`: one creating `README.md`, one adding a line to it, one creating `notes.txt`. Then show the history on one line per commit.

## 7. Worked solution

```powershell
"# Practice" | Out-File README.md -Encoding utf8
git add README.md ; git commit -m "Create README"
"Second line" | Out-File -Append README.md -Encoding utf8
git add README.md ; git commit -m "Add second line to README"
"notes" | Out-File notes.txt -Encoding utf8
git add notes.txt ; git commit -m "Add notes file"
git log --oneline
```

Three lines appear, newest first. In Windows PowerShell 5.1 use `;` to put two commands on one line.

## 8. Common mistakes

1. **`nothing added to commit`** - You forgot `git add`. Stage first.
2. **Vague messages like `update`** - Write what changed so future you understands.
3. **Opening an editor by omitting `-m`** - Git opens a text editor. Save and close it, or abort and retry with `-m`.

## 9. Revision notes

- Commit = snapshot + message + author.
- `git commit -m` and `git log --oneline`.
- Small focused commits with clear messages.

## 10. Practical task for the project

Commit your own changes to this course repo, for example after ticking a checklist box: `git add docs/progress-tracker.md` then `git commit -m "Update progress tracker"`.

## 11. Progress checklist

- [ ] I can explain **Week 1, Lesson 4: Commits** in my own words.
- [ ] I ran the example commands and compared my output with the expected output.
- [ ] I completed the hands-on exercise before reading the solution.
- [ ] I completed the practical task for the project.
- [ ] I noted anything confusing in [`docs/progress-tracker.md`](../../docs/progress-tracker.md).

---
Previous: [Staging](03-staging.md) | Next: [Clone](05-clone.md) | [Topic index](../../docs/topic-index.md)

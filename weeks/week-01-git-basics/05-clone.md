# Week 1, Lesson 5: Clone

> **Week 1 - Git Fundamentals** - Topic 5 of 9 | Shell used: Windows PowerShell / VS Code terminal (Git commands behave the same in any shell)

Cloning copies an existing repository, with its full history, onto your computer.

## 1. Explanation from scratch

`git clone <repository-url>` downloads a repository from a remote location (usually GitHub or Azure Repos) into a new folder. It copies every file **and** the entire history, and it remembers the source as a remote called `origin`.

The text `<repository-url>` is a **placeholder**. You must replace it with a real address such as `https://github.com/octocat/Hello-World.git`. Typing the angle brackets literally will fail.

After cloning, you can immediately run `git log`, make commits, and later `git pull` / `git push` to stay in sync.

## 2. Simple analogy

Cloning is like **photocopying an entire notebook, including all earlier drafts**, so you can work on your own copy while still being able to compare with the original.

## 3. Key terms

- **Remote** - A copy of the repository hosted elsewhere.
- **`origin`** - The default name for the remote you cloned from.
- **URL** - The web address of the repository.
- **Placeholder** - Text like `<repository-url>` that you must replace.

## 4. Examples and commands

Clone a small public practice repository (requires internet):

```powershell
cd $HOME
git clone https://github.com/octocat/Hello-World.git
cd Hello-World
git log --oneline -3
git remote -v
```

Expected for `git remote -v`:

```text
origin  https://github.com/octocat/Hello-World.git (fetch)
origin  https://github.com/octocat/Hello-World.git (push)
```

Clone into a chosen folder name:

```powershell
git clone https://github.com/octocat/Hello-World.git my-copy
```

## 5. Step-by-step instructions

1. Run `cd $HOME` so the clone lands in a known place.
2. Run the clone command with the real URL.
3. Run `cd Hello-World`.
4. Run `git log --oneline -3` to see inherited history.
5. Run `git remote -v` to see `origin`.

## 6. Hands-on exercise

Clone `Hello-World` into a folder called `clone-lab`, then print its remote address and the last two commits.

## 7. Worked solution

```powershell
cd $HOME
git clone https://github.com/octocat/Hello-World.git clone-lab
cd clone-lab
git remote -v
git log --oneline -2
```

The second argument to `git clone` names the destination folder. `git remote -v` proves where the copy came from.

*If you have no internet,* clone a local repo instead: `git clone $HOME\git-practice local-copy`.

## 8. Common mistakes

1. **Leaving `<repository-url>` in the command** - Replace it completely, without the brackets.
2. **Cloning into an existing repo** - Run clone from a normal folder like `$HOME`.
3. **`destination path already exists`** - Choose another folder name or delete the old folder.

## 9. Revision notes

- `git clone URL` copies code and history.
- Creates a remote named `origin`.
- `git remote -v` shows remotes.

## 10. Practical task for the project

Find the URL of your own GitHub repository later (Week 2) and practise cloning it into a different folder to prove your upload worked.

## 11. Progress checklist

- [ ] I can explain **Week 1, Lesson 5: Clone** in my own words.
- [ ] I ran the example commands and compared my output with the expected output.
- [ ] I completed the hands-on exercise before reading the solution.
- [ ] I completed the practical task for the project.
- [ ] I noted anything confusing in [`docs/progress-tracker.md`](../../docs/progress-tracker.md).

---
Previous: [Commits](04-commits.md) | Next: [Pull](06-pull.md) | [Topic index](../../docs/topic-index.md)

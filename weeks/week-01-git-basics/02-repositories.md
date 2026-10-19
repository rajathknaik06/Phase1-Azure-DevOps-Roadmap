# Week 1, Lesson 2: Repositories

> **Week 1 - Git Fundamentals** - Topic 2 of 9 | Shell used: Windows PowerShell / VS Code terminal (Git commands behave the same in any shell)

A repository is where Git keeps your project and its history.

## 1. Explanation from scratch

A **repository** (or *repo*) is a normal project folder that Git has been told to track. When you run `git init`, Git creates a hidden folder called `.git` inside your project. That hidden folder *is* the history database. Your visible files are called the **working tree**.

Three places matter:

1. **Working tree** - the files you see and edit.
2. **Staging area (index)** - a waiting room for changes you plan to commit (next lesson).
3. **Repository history** - the saved commits inside `.git`.

`git status` is your most-used command. It tells you which files are new, changed, or staged. Run it whenever you are unsure what state you are in.

## 2. Simple analogy

A repository is like a **filing cabinet for one project**. The folder on your desk is the working tree; the cabinet drawer (`.git`) holds every older version.

## 3. Key terms

- **`git init`** - Turns the current folder into a Git repository.
- **`.git` folder** - Hidden folder holding all history. Never delete or edit it by hand.
- **Working tree** - The files you can see and edit.
- **Untracked file** - A file inside the repo that Git is not recording yet.
- **Branch** - A line of commits. The default is called `main` (Week 2).

## 4. Examples and commands

Create a practice repository **outside** the course repository (so you do not put a repo inside a repo):

```powershell
cd $HOME
mkdir git-practice
cd git-practice
git init
git status
```

Expected output:

```text
Initialized empty Git repository in C:/Users/you/git-practice/.git/
On branch main

No commits yet

nothing to commit (create/copy files and use "git add" to track)
```

Create a file and look again:

```powershell
"Hello Git" | Out-File notes.txt -Encoding utf8
git status
```

Git now lists `notes.txt` under **Untracked files**.

## 5. Step-by-step instructions

1. In the VS Code terminal run `cd $HOME` (goes to your user folder).
2. Run `mkdir git-practice`, then `cd git-practice`.
3. Run `git init`. Read the message it prints.
4. Run `git status`. Note the words *No commits yet*.
5. Create `notes.txt` with the `Out-File` command above and run `git status` again.
6. To see the hidden folder: `Get-ChildItem -Force` (look for `.git`).

## 6. Hands-on exercise

Create a folder `repo-lab` in your home folder, initialise it as a repository, add a file `hello.txt` containing `hello`, and use `git status` to prove that Git sees the file as untracked.

## 7. Worked solution

```powershell
cd $HOME
mkdir repo-lab
cd repo-lab
git init
"hello" | Out-File hello.txt -Encoding utf8
git status
```

`git status` lists `hello.txt` under *Untracked files* because it exists in the working tree but has never been added.

## 8. Common mistakes

1. **Running `git init` in the wrong folder** - Check with `pwd` first. Running it in `C:\Users\you` would make your whole profile a repo. If that happens, delete the `.git` folder inside it.
2. **Nested repositories** - Do not run `git init` inside another repo.
3. **Deleting `.git`** - That erases all history. The files stay but the repo is gone.

## 9. Revision notes

- `git init` creates a repo by adding `.git`.
- `git status` shows the current state.
- Untracked = exists but not recorded.
- Keep practice repos outside this course repo.

## 10. Practical task for the project

Open a terminal in the course root and run `git status`. If it says `not a git repository`, run `git init` (the [GitHub upload guide](../../docs/github-upload-guide.md) uses this repo later).

## 11. Progress checklist

- [ ] I can explain **Week 1, Lesson 2: Repositories** in my own words.
- [ ] I ran the example commands and compared my output with the expected output.
- [ ] I completed the hands-on exercise before reading the solution.
- [ ] I completed the practical task for the project.
- [ ] I noted anything confusing in [`docs/progress-tracker.md`](../../docs/progress-tracker.md).

---
Previous: [Git](01-git.md) | Next: [Staging](03-staging.md) | [Topic index](../../docs/topic-index.md)

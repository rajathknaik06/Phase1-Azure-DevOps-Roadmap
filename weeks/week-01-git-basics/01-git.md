# Week 1, Lesson 1: Git

> **Week 1 - Git Fundamentals** - Topic 1 of 9 | Shell used: Windows PowerShell / VS Code terminal (Git commands behave the same in any shell)

Git is the tool you will use in every other week of this roadmap. Take your time here.

## 1. Explanation from scratch

**Git** is a *version control system*. It records snapshots of your project over time so you can see what changed, when, and why, and go back to an earlier snapshot if something breaks.

Without version control, people end up with files like `report_final.docx`, `report_final_v2.docx` and `report_REALLY_final.docx`. Git replaces that mess with one folder plus a hidden history that lives inside it.

Important facts for a beginner:

1. Git runs **on your own computer**. It works without internet.
2. Git is **not** GitHub. GitHub is a website that stores Git repositories (Week 2).
3. Git stores *snapshots* (called commits) that you choose to create. It does not save automatically.
4. Git is used by almost every DevOps team, and Azure DevOps and GitHub Actions both start from a Git repository.

## 2. Simple analogy

Think of writing a long essay with a **save-game system**. Every time you reach a good point you create a named save. If you later ruin the essay you can load an earlier save. Git is the save-game system, and each save has a message describing what you did.

## 3. Key terms

- **Version control** - A system that records changes to files over time.
- **Repository (repo)** - A project folder that Git is tracking, plus its hidden history.
- **Commit** - One saved snapshot with a message.
- **Terminal** - A text window where you type commands. In VS Code: Terminal > New Terminal.
- **Command** - A line of text you type and run by pressing Enter.

## 4. Examples and commands

Check that Git is installed (PowerShell):

```powershell
git --version
```

Expected output (your number will differ):

```text
git version 2.47.0.windows.1
```

Tell Git who you are. Git stamps this on every commit. Use your own name and email (the email can be the one on your GitHub account):

```powershell
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --global init.defaultBranch main
git config --global --list
```

`--global` means "for every repository on this computer". The last command prints the settings so you can confirm them.

## 5. Step-by-step instructions

1. Open VS Code, then **File > Open Folder** and choose the extracted `Phase1-Azure-DevOps-Roadmap` folder.
2. Open the terminal: **Terminal > New Terminal**. Confirm it says *PowerShell* in the dropdown at the top right of the terminal panel.
3. Type `git --version` and press Enter. If you see `git is not recognized`, install Git for Windows using [setup-and-tools.md](../../docs/setup-and-tools.md), then **close and reopen VS Code**.
4. Run the three `git config` commands from the examples with your own details.
5. Run `git config --global --list` and check that `user.name` and `user.email` appear.

Success looks like: a version number, and your name and email listed.

## 6. Hands-on exercise

1. Find out which Git version you have.
2. Set your name and email.
3. In your own words (one sentence each) answer: What problem does Git solve? Does Git need the internet? Is Git the same as GitHub?

## 7. Worked solution

1. `git --version` prints the version.
2. `git config --global user.name "Your Name"` and `git config --global user.email "you@example.com"`.
3. Git records the history of changes so you can review or undo them. No: Git works fully offline, you only need the internet to talk to a remote such as GitHub. No: Git is the tool, GitHub is a hosting service built around Git.

*Why it works:* `git config` writes settings to a file in your user profile, so Git can label commits with the right author.

## 8. Common mistakes

1. **Typing `Git` or `git version` wrongly** - The command is `git --version` (two dashes). Commands are lower case.
2. **Forgetting to reopen VS Code after installing Git** - Terminals read the PATH when they start. Close VS Code fully and open it again.
3. **Confusing Git with GitHub** - Git = local tool. GitHub = website. You can use Git without GitHub.

## 9. Revision notes

- Git is a local version control system.
- A commit is a saved snapshot with a message.
- `git --version` checks installation.
- Set `user.name` and `user.email` once per computer.
- Git is not GitHub.

## 10. Practical task for the project

In [`docs/progress-tracker.md`](../../docs/progress-tracker.md), write the output of `git --version` in the *Notes* area for Week 1. You will use Git to track every change you make to this repository.

## 11. Progress checklist

- [ ] I can explain **Week 1, Lesson 1: Git** in my own words.
- [ ] I ran the example commands and compared my output with the expected output.
- [ ] I completed the hands-on exercise before reading the solution.
- [ ] I completed the practical task for the project.
- [ ] I noted anything confusing in [`docs/progress-tracker.md`](../../docs/progress-tracker.md).

---
Previous: [Root README](../../README.md) | Next: [Repositories](02-repositories.md) | [Topic index](../../docs/topic-index.md)

# Week 2, Lesson 1: GitHub

> **Week 2 - GitHub Collaboration** - Topic 1 of 5 | Shell used: Windows PowerShell / VS Code terminal (Git commands are identical in any shell)

Week 2 turns your solo Git skills into team skills.

## 1. Explanation from scratch

**GitHub** is a website (owned by Microsoft) that hosts Git repositories online. Git is the tool; GitHub is a service that adds a shared home for your repository, a web interface, **pull requests**, issues, and automation (**GitHub Actions**).

Other services do the same job: Azure Repos (inside Azure DevOps), GitLab, Bitbucket. The Git commands you learn work with all of them.

To connect a local repository to GitHub you add a **remote**:

```powershell
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
```

`origin` is just a nickname for the URL. `YOUR-USERNAME` and `YOUR-REPOSITORY` are placeholders to replace.

## 2. Simple analogy

Git is a **word processor with history on your laptop**; GitHub is the **shared online drive** where the team keeps the official copy and discusses changes.

## 3. Key terms

- **Remote** - A repository hosted elsewhere.
- **`origin`** - Conventional name of your main remote.
- **Fork** - Your own copy of someone else's repo on GitHub.
- **Authentication** - Proving who you are (browser sign-in, token, SSH key).
- **Issue** - A tracked task or bug on GitHub.

## 4. Examples and commands

```powershell
git remote -v
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git remote set-url origin https://github.com/YOUR-USERNAME/NEW-NAME.git
git remote remove origin
```

- First command lists remotes (empty for a new repo).
- `add` creates `origin`. If it already exists you will see `error: remote origin already exists`; use `set-url`.
- `remove` disconnects without deleting anything on GitHub.

## 5. Step-by-step instructions

1. Create a free account at github.com and verify your email.
2. Click **New repository**, name it, choose **Public** or **Private**, and leave "Add a README" **unticked** if you will push an existing project.
3. Copy the HTTPS URL shown.
4. In your terminal, run `git remote add origin <that URL>`.
5. Run `git remote -v` to confirm.
6. Complete the push in the [upload guide](../../docs/github-upload-guide.md).

## 6. Hands-on exercise

Explain in three bullet points how Git and GitHub differ, then connect `git-practice` to a local bare repo called `origin` and list remotes.

## 7. Worked solution

- Git: local tool that records history. GitHub: hosting website with collaboration features. Git works offline; GitHub needs internet.

```powershell
cd $HOME\git-practice
git remote -v          # may already exist from Week 1
git remote set-url origin $HOME\fake-remote.git
git remote -v
```

`set-url` is used because `origin` may already exist.

## 8. Common mistakes

1. **Using the web page URL instead of the clone URL** - Use the one ending in `.git` from the green **Code** button.
2. **Initialising the GitHub repo with a README, then pushing a different history** - Leave it empty, or pull first.
3. **Typing a password for HTTPS** - GitHub no longer accepts account passwords for Git; use the browser sign-in prompt or a token.

## 9. Revision notes

- GitHub hosts Git repositories.
- `git remote add origin URL`.
- Placeholders must be replaced.
- Authenticate securely.

## 10. Practical task for the project

Create your GitHub repository for this course and connect it with `git remote add origin`.

## 11. Progress checklist

- [ ] I can explain **Week 2, Lesson 1: GitHub** in my own words.
- [ ] I ran the example commands and compared my output with the expected output.
- [ ] I completed the hands-on exercise before reading the solution.
- [ ] I completed the practical task for the project.
- [ ] I noted anything confusing in [`docs/progress-tracker.md`](../../docs/progress-tracker.md).

---
Previous: [Week 1: README files](../week-01-git-basics/09-readme-files.md) | Next: [Branches](02-branches.md) | [Topic index](../../docs/topic-index.md)

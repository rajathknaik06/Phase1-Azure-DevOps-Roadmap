# Week 1, Lesson 7: Push

> **Week 1 - Git Fundamentals** - Topic 7 of 9 | Shell used: Windows PowerShell / VS Code terminal (Git commands behave the same in any shell)

Pushing publishes your local commits to the remote repository.

## 1. Explanation from scratch

`git push` uploads commits from your local branch to the remote. Only **commits** are pushed, never uncommitted edits.

The first push of a new branch needs `-u` to link local and remote branches: `git push -u origin main`. After that, plain `git push` is enough.

You need permission to push. On GitHub you sign in through the browser (Git Credential Manager) or use a personal access token or SSH key. **Never paste passwords or tokens into files that you commit.**

If the push is rejected because the remote has newer commits, run `git pull` first, then push again.

## 2. Simple analogy

Pushing is **posting your finished pages onto the shared team notebook**.

## 3. Key terms

- **Push** - Upload local commits to a remote.
- **`-u` / upstream** - Links your local branch to a remote branch.
- **Credential** - Sign-in proof such as a token or key.
- **Rejected push** - The remote has commits you do not have yet.

## 4. Examples and commands

```powershell
git remote -v
git push -u origin main
```

Expected output (abridged):

```text
Enumerating objects: 3, done.
To https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
```

`YOUR-USERNAME/YOUR-REPOSITORY` is a placeholder for your real GitHub account and repository.

## 5. Step-by-step instructions

1. Create an empty repository on github.com (no README) when you reach the [GitHub upload guide](../../docs/github-upload-guide.md).
2. Copy its HTTPS URL.
3. `git remote add origin <URL>` (replace the placeholder).
4. `git push -u origin main`.
5. Refresh the GitHub page and see your files.

## 6. Hands-on exercise

Without using GitHub, create a **bare** local remote and push to it:

## 7. Worked solution

```powershell
cd $HOME
git init --bare fake-remote.git
cd git-practice
git remote add origin $HOME\fake-remote.git
git push -u origin main
git remote -v
```

A bare repo is a server-style repo without a working tree. This behaves like GitHub for practice. If `origin` already exists, use `git remote set-url origin <new-url>`.

## 8. Common mistakes

1. **`remote origin already exists`** - Use `git remote set-url origin URL` or `git remote remove origin`.
2. **Rejected `non-fast-forward`** - Run `git pull` then `git push`.
3. **Committing tokens** - Keep secrets out of files; see [.gitignore](08-gitignore.md).

## 9. Revision notes

- `git push` sends commits only.
- First push: `git push -u origin main`.
- Pull first if rejected.
- Never commit secrets.

## 10. Practical task for the project

Push this course repo to your own GitHub repository by following the upload guide.

## 11. Progress checklist

- [ ] I can explain **Week 1, Lesson 7: Push** in my own words.
- [ ] I ran the example commands and compared my output with the expected output.
- [ ] I completed the hands-on exercise before reading the solution.
- [ ] I completed the practical task for the project.
- [ ] I noted anything confusing in [`docs/progress-tracker.md`](../../docs/progress-tracker.md).

---
Previous: [Pull](06-pull.md) | Next: [.gitignore](08-gitignore.md) | [Topic index](../../docs/topic-index.md)

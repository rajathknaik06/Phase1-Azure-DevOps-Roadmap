# GitHub Upload Guide

Goal: publish this repository to your own GitHub account. You need Git installed and a free GitHub account ([setup guide](setup-and-tools.md)).

> **Placeholders:** `YOUR-USERNAME` and `YOUR-REPOSITORY` below are examples. Replace them with your real GitHub username and the repository name you choose. Do not type the words literally.

## Step 1 - Create an empty repository on GitHub

1. Sign in at github.com, click **+ > New repository**.
2. Name it, for example `Phase1-Azure-DevOps-Roadmap`.
3. Choose **Public** or **Private**.
4. **Do not** tick "Add a README", ".gitignore" or "license" (this project already has them).
5. Click **Create repository** and copy the HTTPS URL, e.g. `https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git`.

## Step 2 - Prepare locally

Open the extracted folder in VS Code and use the PowerShell terminal at the **repository root** (where `README.md` is).

```powershell
git init
git branch -M main
git add .
git status
git commit -m "Add Phase 1 Azure DevOps learning roadmap"
```

- `git init` starts tracking (safe to run again; it says "Reinitialized").
- `git branch -M main` names the branch `main`.
- `git status` lets you **review what will be uploaded**. Check that no keys, `.env` or personal files appear. The `.gitignore` already excludes common secrets.

If Git says it does not know who you are, set `user.name` and `user.email` (see setup guide).

## Step 3 - Connect to GitHub and push

```powershell
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Refresh the GitHub page: your files and the README appear.

### If `origin` already exists

`error: remote origin already exists.` Inspect and fix:

```powershell
git remote -v
git remote set-url origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

## Authenticating securely

- **Browser sign-in (easiest):** Git for Windows includes Git Credential Manager. On the first push a browser window opens; sign in there. Credentials are stored in the Windows credential store.
- **Personal access token:** if asked for a password, GitHub no longer accepts your account password. Create a token (GitHub > Settings > Developer settings > Personal access tokens) with the minimum scope (`repo`) and a short expiry, and paste it into the **prompt** only.
- **SSH keys:** advanced option; see [Week 4: SSH concepts](../weeks/week-04-linux-processes-packages-ssh/03-ssh-concepts.md). Upload only the **public** key.
- **Never** put tokens, passwords or private keys in files, commit messages, screenshots or chats. If one leaks, revoke it immediately on GitHub.
- Turn on two-factor authentication.

## Later changes

```powershell
git status
git add .
git commit -m "Describe your change"
git push
```

## Common problems

| Message | Meaning / fix |
|---|---|
| `Updates were rejected ... fetch first` | The remote has commits you lack. Run `git pull --rebase origin main` or `git pull origin main`, resolve conflicts, push again. |
| `refusing to merge unrelated histories` | You created the GitHub repo with a README. Use `git pull origin main --allow-unrelated-histories` then push. |
| `fatal: not a git repository` | You are not in the repo root. Check `pwd`. |
| `Authentication failed` | Use the browser sign-in or a token, not your password. |

## Verify

Clone your repo into a different folder to prove the upload worked:

```powershell
cd $HOME
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git upload-check
Get-ChildItem upload-check
```

# Final Revision Guide

A condensed reference across all eight weeks. Use it **after** attempting recall questions in [Week 8: Revision](../weeks/week-08-revision-integration/01-revision.md).

## Week 1 - Git Fundamentals (PowerShell)

| Command | Purpose |
|---|---|
| `git --version` | Check installation |
| `git init` | Start a repository |
| `git status` | See state of working tree/staging |
| `git add <file>` / `git add .` | Stage changes |
| `git diff` / `git diff --staged` | Unstaged / staged differences |
| `git commit -m "msg"` | Save a snapshot |
| `git log --oneline` | Compact history |
| `git clone <repository-url>` | Copy a remote repo (replace the placeholder) |
| `git pull` / `git push` | Download / upload commits |
| `git remote -v` | Show remotes |

**Distinctions:** working tree vs staging vs history; `.gitignore` does not untrack committed files; README.md is the project's front page.

## Week 2 - GitHub Collaboration

| Command / idea | Purpose |
|---|---|
| `git branch`, `git switch -c name`, `git switch main` | List, create+switch, switch |
| `git merge name` | Merge **into the current branch** |
| `git branch -d name` | Delete merged branch |
| Pull request | Review/merge request made **on the platform**, not a Git command |
| Conflict | Same lines changed: edit, remove markers, `git add`, `git commit`; `git merge --abort` cancels |

**Distinctions:** Git (tool) vs GitHub (service); `git pull` (download) vs pull request (review).

## Week 3 - Linux Files and Permissions (Linux shell)

`pwd`, `ls -la`, `cd`, `mkdir -p`, `touch`, `cat`, `cp -r`, `mv`, `rm -r` (no recycle bin!), `chmod`.

Permissions: `rwx` = 4+2+1. `640` = `rw-r-----`; `755` = `rwxr-xr-x`; `600` = `rw-------`. Classes: owner/group/others. Absolute paths start with `/`.

## Week 4 - Processes, Packages, SSH (Linux shell)

- Process = running program with a **PID**. `ps`, `ps aux`, `top` (quit `q`), `kill PID`.
- `apt` (Debian/Ubuntu only): `sudo apt update`, `sudo apt install pkg`, `sudo apt remove pkg`.
- SSH: `ssh user@server.example`, `ssh-keygen`. **Private key secret, public key shareable.** Authentication = who you are; authorization = what you may do. Verify host fingerprints. Never commit private keys.

## Week 5 - Networking

| Concept | Remember |
|---|---|
| IPv4 | 32 bits, 4 octets (0-255); private ranges 10/8, 172.16/12, 192.168/16 |
| Subnet mask | 1s = network, 0s = host; `255.255.255.0` |
| CIDR | `/24` = 24 network bits; hosts = 2^(32-n) - 2 |
| DNS | Name -> record (A, AAAA, CNAME, MX, TXT) |
| Ports | 22 SSH, 80 HTTP, 443 HTTPS, 53 DNS |
| HTTPS | HTTP + TLS (encrypted in transit, certificate proves identity) |
| Firewall | Allow/deny rules; default deny; never disable to "fix" things |

Commands: `ipconfig` / `ip addr`; `nslookup example.com`; `Test-NetConnection example.com -Port 443`.

**Browser journey:** DNS -> IP -> TCP to port 443 -> TLS handshake -> HTTP request -> response.

## Week 6 - PowerShell Fundamentals

```powershell
$name = "Student Portal"; $count = 3
if ($count -ge 3) { "at least three" } else { "fewer" }
foreach ($file in @("index.html","styles.css","app.js")) { $file }
```

Operators: `-eq -ne -gt -ge -lt -le`. Assignment does **not** create files; `New-Item` does.

## Week 7 - Validation and Errors

`Test-Path -LiteralPath $p -PathType Leaf|Container`, `Join-Path`, `try { ... -ErrorAction Stop } catch { ... }`, exit codes **0** success / **1** missing / **2** unexpected, `$LASTEXITCODE`.

## Week 8 - Integration

Git tracks, GitHub reviews, Linux/networking explain servers and access, PowerShell validates. **Future (not configured here):** Azure DevOps, Azure, GitHub Actions, CI/CD.

## Top 10 mistakes to avoid

1. Leaving `<repository-url>` or `YOUR-USERNAME` unreplaced.
2. Committing secrets or private keys.
3. Running Linux commands in PowerShell.
4. Running `rm -r` without checking `pwd`.
5. Believing a variable assignment creates a file.
6. Using `>=`/`==` in PowerShell conditions.
7. Forgetting `git add` before `git commit`.
8. Merging while on the wrong branch.
9. Disabling the firewall or execution policy machine-wide to "make it work".
10. Claiming something is configured when it is only planned.

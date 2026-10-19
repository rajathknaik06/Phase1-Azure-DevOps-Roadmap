# Practical Lab Solutions

Numbers match [exercises/practical-lab.md](../exercises/practical-lab.md). **[PS]** = Windows PowerShell, **[Linux]** = bash (WSL/VM/lab). Outputs shown are typical; hashes and dates will differ.

## 1. [PS] Initialize a Git repository

```powershell
mkdir $HOME\phase1-lab\repo-a -Force
cd $HOME\phase1-lab\repo-a
git init
git status
```

`git init` creates the hidden `.git` folder; status says `No commits yet`.

## 2. [PS] Stage and commit

```powershell
"# Practice project" | Out-File README.md -Encoding utf8
git add README.md
git diff --staged
git commit -m "Document project setup"
git log --oneline
```

`git diff --staged` shows exactly what the commit will contain; the log shows one commit.

## 3. [PS] Use `.gitignore`

```powershell
"secret=1" | Out-File .env -Encoding utf8
"x" | Out-File debug.log -Encoding utf8
Set-Content -Path .gitignore -Value @(".env", "*.log") -Encoding ascii
git status
git check-ignore -v .env debug.log
```

`git status` lists only `.gitignore` as untracked; `check-ignore -v` names the matching rules.

## 4. [PS] Feature branch

```powershell
git add . ; git commit -m "Add gitignore"
git switch -c feature/update-readme
"More details" | Out-File -Append README.md -Encoding utf8
git add .
git commit -m "Update project documentation"
```

## 5. [PS] Merge

```powershell
git switch main
git merge feature/update-readme
git branch -d feature/update-readme
git log --oneline --graph
```

Merging happens **into the branch you are on** (`main`). A fast-forward is expected.

## 6. [PS] Resolve a merge conflict

```powershell
cd $HOME\phase1-lab ; mkdir conflict-lab ; cd conflict-lab ; git init
"Color: blue" | Out-File colors.txt -Encoding utf8
git add . ; git commit -m "Add colors"
git switch -c feature/conflict-demo
"Color: green" | Out-File colors.txt -Encoding utf8
git commit -am "Change color to green"
git switch main
"Color: red" | Out-File colors.txt -Encoding utf8
git commit -am "Change color to red"
git merge feature/conflict-demo       # CONFLICT
"Color: teal" | Out-File colors.txt -Encoding utf8
git add colors.txt
git commit -m "Resolve colour conflict with teal"
```

Both branches changed the same line, so Git cannot choose. Replacing the whole file removes the markers; `git add` marks it resolved; `git commit` finishes the merge.

## 7. [Linux] Filesystem commands

```bash
mkdir -p ~/phase1-lab/sandbox/src ~/phase1-lab/sandbox/docs
cd ~/phase1-lab
touch sandbox/docs/notes.txt
cp sandbox/docs/notes.txt sandbox/docs/notes-backup.txt
mv sandbox/docs/notes-backup.txt sandbox/docs/old.txt
ls -R sandbox
pwd
rm -r sandbox
```

`mv` renames within the same folder. Run `pwd` first because `rm -r` is irreversible.

## 8. [Linux] Permissions

```bash
touch run.sh data.txt
chmod 755 run.sh
chmod 640 data.txt
ls -l run.sh data.txt
```

`755` = owner 7 (rwx), group 5 (r-x), others 5 (r-x) -> `rwxr-xr-x`. `640` = owner 6 (rw-), group 4 (r--), others 0 (---) -> `rw-r-----`. `-rwxr-x---` = 7, 5, 0 -> `750`.

## 9. [Linux] Processes (and Windows equivalent)

```bash
sleep 500 &
sleep 600 &
ps
kill <PID-of-first-sleep>      # replace with the real number
ps
```

**[PS]** `Get-Process` lists processes on Windows (`Stop-Process -Id <PID>` stops one).

## 10. [Linux] Package management

```bash
sudo apt update
sudo apt install tree
tree ~
sudo apt remove tree
```

`apt` belongs to **Debian/Ubuntu-family Linux** (including Ubuntu on WSL). In PowerShell: `apt : The term 'apt' is not recognized...` because Windows uses other tools such as `winget`.

## 11. [Linux] SSH key pairs

```bash
ssh-keygen -t ed25519 -f ~/.ssh/lab_key
ls -l ~/.ssh/lab_key ~/.ssh/lab_key.pub
rm ~/.ssh/lab_key ~/.ssh/lab_key.pub
```

Shareable: `lab_key.pub` (public). Secret: `lab_key` (private; mode `600`). A committed private key can be copied by anyone who can read the repository, letting them impersonate you; it would have to be revoked and replaced.

## 12. [Both] IPv4 and CIDR

| Block | Mask | Usable hosts | Range |
|---|---|---|---|
| (a) 192.168.1.0/24 | 255.255.255.0 | 254 | .0 (network) to .255 (broadcast) |
| (b) 10.0.0.0/26 | 255.255.255.192 | 62 | 10.0.0.0 - 10.0.0.63 |
| (c) 172.16.5.130/25 | 255.255.255.128 | 126 | network 172.16.5.128, broadcast 172.16.5.255 |

`10.0.0.70` is **not** in (b) (range ends at .63). `172.20.5.9` **is** private (172.16.0.0-172.31.255.255).

## 13. [PS] DNS and ports

```powershell
nslookup example.com
Test-NetConnection example.com -Port 443
Test-NetConnection example.com -Port 22
```

`nslookup` returns the IP(s) for the name (DNS). Port 443 normally shows `TcpTestSucceeded : True` (HTTPS listening). Port 22 on a web server is usually `False` (no SSH service or blocked by a firewall). `False` does not prove the server is down. Without internet the commands time out or fail.

## 14. [PS] Conditional

```powershell
$count = 3
if ($count -ge 3) { Write-Host "At least three items" }
else { Write-Host "Fewer than three items" }
```

2 -> `Fewer than three items`; 3 and 5 -> `At least three items`. `-ge` means greater than or equal to.

## 15. [PS] Loop over paths

```powershell
$portal = ".\project\student-placement-portal"
$items = @("README.md","index.html","styles.css","app.js","data\students.json")
$missing = 0
foreach ($item in $items) {
    $full = Join-Path $portal $item
    if (Test-Path -LiteralPath $full -PathType Leaf) { Write-Host "FOUND   $item" }
    else { Write-Host "MISSING $item"; $missing++ }
}
Write-Host "Missing: $missing"
```

Expected on the complete project: five `FOUND` lines and `Missing: 0`.

## 16. [PS] Validate the portal

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File ".\project\student-placement-portal\scripts\Check-PortalStructure.ps1"
$LASTEXITCODE
```

Expected: eight `[PASS]` lines, `RESULT: PASSED (exit code 0)`, and `0`. If scripts are blocked and you are on a managed computer, ask the administrator; see [setup guide](../docs/setup-and-tools.md#powershell-execution-policy).

## 17. [PS] Diagnose a missing-file failure

```powershell
$tmp = Join-Path $env:TEMP "portal-test"
if (Test-Path -LiteralPath $tmp) { Remove-Item -LiteralPath $tmp -Recurse -Force }
Copy-Item -Recurse ".\project\student-placement-portal" $tmp
Remove-Item -LiteralPath (Join-Path $tmp "styles.css")
powershell.exe -NoProfile -ExecutionPolicy Bypass -File (Join-Path $tmp "scripts\Check-PortalStructure.ps1")
$LASTEXITCODE            # 1
```

The failing line is `[FAIL] MISSING FILE: styles.css`; exit code `1` means required items are missing. Restore with `Copy-Item .\project\student-placement-portal\styles.css $tmp` and rerun: exit code `0`. Only the temp copy was modified.

## 18. [PS] Commit and push

```powershell
git status
git add .
git commit -m "Complete Phase 1 practice notes"
git remote -v
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git   # or: git remote set-url origin ...
git push -u origin main
```

Replace `YOUR-USERNAME` and `YOUR-REPOSITORY` with real values. If `origin` already exists use `set-url`. Authenticate with the browser sign-in or a token typed at the prompt; never store secrets in files. Verify by refreshing the repository page on GitHub.

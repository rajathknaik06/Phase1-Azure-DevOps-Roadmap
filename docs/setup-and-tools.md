# Setup and Tools

Check what you already have before installing anything. **Required** tools are marked; the rest are optional.

| Tool | Required? | Used for |
|---|---|---|
| Visual Studio Code | Required | Editing, terminal, Markdown preview |
| Git for Windows | Required | Weeks 1-2 and all commits |
| Windows PowerShell 5.1 (built in) or PowerShell 7 | Required | Weeks 6-7, validator, Git commands |
| A modern web browser | Required | Opening the portal, GitHub |
| WSL + Ubuntu / Linux VM / lab | Optional but needed for Weeks 3-4 | Linux commands |
| Python 3 | Optional | `python -m http.server` for the portal |
| GitHub account | Needed for upload (free) | Hosting your repository |

## 1. Visual Studio Code

Download from the official site (code.visualstudio.com), install, and open it. Recommended extensions: **PowerShell** (Microsoft), **Markdown All in One** (optional).

Check: open VS Code > **Help > About**.

## 2. Git for Windows

Download from git-scm.com and accept the defaults. Restart VS Code afterwards.

```powershell
git --version
```

Expected: `git version 2.x.x.windows.x`. Then set your identity (once):

```powershell
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --global init.defaultBranch main
```

## 3. PowerShell

Windows includes **Windows PowerShell 5.1**. All scripts in this repository are written to work in it and in PowerShell 7.

```powershell
$PSVersionTable.PSVersion
```

`5.1.x` = Windows PowerShell; `7.x` = PowerShell 7. In VS Code, the terminal dropdown (top right of the terminal panel) shows which one is open. If you need to type `powershell.exe` or `pwsh` check that it exists with `Get-Command powershell.exe`.

## PowerShell execution policy

The **execution policy** decides whether PowerShell loads script files. It is a safety feature against accidentally running unsigned scripts; it is *not* a strong security boundary against a determined user.

Inspect it:

```powershell
Get-ExecutionPolicy -List
```

Typical scopes (highest priority first): `MachinePolicy`, `UserPolicy`, `Process`, `CurrentUser`, `LocalMachine`. If `MachinePolicy` or `UserPolicy` is set, an administrator controls it, and your own changes will not override it.

Safe ways to run the validator, in order of preference:

1. **Process-scoped (recommended for learning):** applies only to that one PowerShell process and disappears when it ends.

   ```powershell
   powershell.exe -NoProfile -ExecutionPolicy Bypass -File ".\project\student-placement-portal\scripts\Check-PortalStructure.ps1"
   ```

   On a computer governed by organisational policy this may still be refused. That is the administrator's decision; follow their rules.

2. **Unblock the downloaded file** if Windows marked it as from the internet:

   ```powershell
   Unblock-File -Path ".\project\student-placement-portal\scripts\Check-PortalStructure.ps1"
   ```

3. **Your own personal computer only, if you understand the trade-off:** a user-scoped change that still requires signatures on scripts from the internet.

   ```powershell
   Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
   ```

Never run `Set-ExecutionPolicy Unrestricted` machine-wide just to make a lesson work, and do not paste commands you do not understand.

## 4. Web browser

Edge, Chrome or Firefox. Press `F12` to open the developer tools (used in Week 5).

## 5. Optional: WSL / Ubuntu (for Linux weeks)

On Windows 10/11 open PowerShell **as administrator** and run:

```powershell
wsl --install -d Ubuntu
```

Restart if asked, then open **Ubuntu** from the Start menu and create a Linux username and password. Check:

```bash
lsb_release -a
```

Alternatives: a VirtualBox/VMware Ubuntu VM, or a lab provided by your course. Managed computers may block WSL; use a VM or lab instead. No cloud subscription is needed.

The Linux prompt looks like `name@PC:~$`. Commands in Weeks 3-4 are for **that** prompt, not PowerShell.

## 6. Optional: Python

Only used for the optional local server (`python -m http.server 8000`). Check: `python --version`.

## 7. GitHub account

Sign up (free) at github.com. Enable two-factor authentication. See the [GitHub upload guide](github-upload-guide.md).

## Working-folder convention

- The **course repo** (this folder) holds lessons and the portal project.
- **Practice folders** (`$HOME\git-practice`, `$HOME\ps-lab`, `~/linux-lab`) live **outside** the repo so experiments never pollute it.

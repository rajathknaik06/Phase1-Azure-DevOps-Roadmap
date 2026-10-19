# Week 4, Lesson 2: Package management

> **Week 4 - Linux Processes, Packages, and SSH** - Topic 2 of 3 | Shell used: **Linux shell (bash)** on WSL/Ubuntu, a VM or a lab. `apt` is for Debian/Ubuntu, not Windows PowerShell.

Package managers install and update software safely and repeatably.

## 1. Explanation from scratch

A **package manager** downloads, installs, updates and removes software from trusted **repositories** and handles **dependencies** (other software the program needs). It beats downloading random installers because it is repeatable, scriptable, and verifies signatures.

By platform:

| Platform | Tool | Example |
|---|---|---|
| Debian/Ubuntu (incl. WSL Ubuntu) | `apt` | `sudo apt update` |
| Red Hat/Fedora | `dnf` | `sudo dnf install git` |
| Windows | `winget` | `winget install Git.Git` |

Key `apt` commands (**Linux only**, not PowerShell):

```bash
sudo apt update          # refresh the list of available packages
sudo apt install tree    # install a package
apt list --installed | head
sudo apt remove tree     # remove it
```

`sudo` runs a command as administrator and asks for your Linux password. Only use it when needed and understand what you run.

## 2. Simple analogy

A package manager is an **app store with a delivery service** that also brings every part the app needs.

## 3. Key terms

- **Package** - Software bundled for installation.
- **Repository** - Server holding packages.
- **Dependency** - Another package required.
- **`sudo`** - Run as administrator.
- **Update vs upgrade** - `update` refreshes the list; `upgrade` installs newer versions.

## 4. Examples and commands

```bash
sudo apt update
sudo apt install tree
tree ~/linux-lab
which tree
sudo apt remove tree
```

Expected: `which tree` prints `/usr/bin/tree` while installed. After removal it prints nothing.

Windows (PowerShell) *only if winget is available*:

```powershell
winget --version
winget search git
```

## 5. Step-by-step instructions

1. Open Ubuntu (WSL). Run `sudo apt update`; enter your Linux password (typing is invisible).
2. Install `tree`, run it on `~/linux-lab`.
3. Run `which tree`.
4. Remove it and confirm it is gone.
5. Write which commands are Linux-only.

## 6. Hands-on exercise

Install `cowsay` (or another small harmless package), run it, then remove it. State which OS family this works on.

## 7. Worked solution

```bash
sudo apt update
sudo apt install cowsay
cowsay "packages!"
sudo apt remove cowsay
```

This works on Debian/Ubuntu family systems. In plain Windows PowerShell `apt` does not exist (`apt : The term 'apt' is not recognized`).

## 8. Common mistakes

1. **Running `apt` in PowerShell** - Switch to the Linux shell.
2. **Skipping `apt update`** - You may get `Unable to locate package`.
3. **Installing unknown software with `sudo`** - Only install trusted packages.

## 9. Revision notes

- Package manager = install + update + dependencies.
- `apt` is Debian/Ubuntu only.
- `update` then `install`.

## 10. Practical task for the project

Note which tools your future build agents would install with a package manager (for example `git`, `zip`), and list them in your progress tracker.

## 11. Progress checklist

- [ ] I can explain **Week 4, Lesson 2: Package management** in my own words.
- [ ] I ran the example commands and compared my output with the expected output.
- [ ] I completed the hands-on exercise before reading the solution.
- [ ] I completed the practical task for the project.
- [ ] I noted anything confusing in [`docs/progress-tracker.md`](../../docs/progress-tracker.md).

---
Previous: [Processes](01-processes.md) | Next: [SSH concepts](03-ssh-concepts.md) | [Topic index](../../docs/topic-index.md)

# Week 3, Lesson 3: Permissions

> **Week 3 - Linux Files and Permissions** - Topic 3 of 3 | Shell used: **Linux shell (bash)** - use WSL/Ubuntu, a VM, or a course lab. These are NOT Windows PowerShell commands.

> **Windows users:** open the Start menu, type `Ubuntu` (after installing WSL, see [setup](../../docs/setup-and-tools.md)) or in PowerShell run `wsl`. The prompt will look like `user@PC:~$`. That is bash.

## 1. Explanation from scratch

Every Linux file has **permissions** that say who may **r**ead, **w**rite or e**x**ecute it, for three classes: the **owner** (user), the **group**, and **others**.

`ls -l` shows e.g. `-rwxr-xr--`:

```text
-  rwx  r-x  r--
|  |    |    |
|  |    |    others: read only
|  |    group: read + execute
|  owner: read + write + execute
file type (- file, d directory)
```

Numbers: r = 4, w = 2, x = 1. So `rwx` = 7, `r-x` = 5, `r--` = 4. `chmod 754 file` sets `rwxr-xr--`.

Symbolic form: `chmod u+x script.sh` (add execute for the owner), `chmod go-w file` (remove write for group and others).

On directories, `x` means "may enter", `r` means "may list".

Why it matters: a deployment script that is not executable will fail with `Permission denied`; a private key readable by others will be rejected by SSH.

## 2. Simple analogy

Permissions are **keys to a house**: the owner has all keys, family (group) has some, strangers (others) may only look through the window.

## 3. Key terms

- **Owner / group / others** - The three permission classes.
- **`r`,`w`,`x`** - Read, write, execute.
- **`chmod`** - Change mode (permissions).
- **Octal** - Numeric form such as 755.
- **`chown`** - Change owner (usually needs admin rights).

## 4. Examples and commands

```bash
cd ~/linux-lab
echo '#!/bin/bash' > hello.sh
echo 'echo "Hello from a script"' >> hello.sh
ls -l hello.sh
./hello.sh
chmod u+x hello.sh
ls -l hello.sh
./hello.sh
chmod 640 notes.txt
ls -l notes.txt
```

Before `chmod` the script fails: `bash: ./hello.sh: Permission denied`. After `u+x`, `ls -l` shows `-rwxr--r--` and it prints `Hello from a script`. `640` gives `-rw-r-----`.

## 5. Step-by-step instructions

1. Create `hello.sh` as shown and try to run it. Read the error.
2. `chmod u+x hello.sh`, run again.
3. Inspect with `ls -l` after each change.
4. Convert `rwxr-xr--` to octal by hand (754), then verify with `chmod 754` and `ls -l`.

## 6. Hands-on exercise

Make `secret.txt` readable and writable only by you. Then state its octal mode and the symbolic string.

## 7. Worked solution

```bash
touch secret.txt
chmod 600 secret.txt
ls -l secret.txt
```

Mode is `600`, which is `-rw-------`: owner 4+2=6, group 0, others 0. SSH private keys need this kind of restriction.

## 8. Common mistakes

1. **`chmod 777`** - Gives everyone full access; avoid it.
2. **Forgetting `./`** - To run a script in the current folder use `./hello.sh`.
3. **Permissions on `/mnt/c` in WSL** - Windows drives may not honour `chmod`; practise in your Linux home.

## 9. Revision notes

- `rwx` = 421.
- `chmod u+x` and `chmod 640`.
- Owner/group/others.
- Scripts need `x`; keys need strict modes.

## 10. Practical task for the project

In `~/portal-sketch`, make a `scripts/check.sh` executable and write one sentence in your notes about why the PowerShell validator is the Windows equivalent.

## 11. Progress checklist

- [ ] I can explain **Week 3, Lesson 3: Permissions** in my own words.
- [ ] I ran the example commands and compared my output with the expected output.
- [ ] I completed the hands-on exercise before reading the solution.
- [ ] I completed the practical task for the project.
- [ ] I noted anything confusing in [`docs/progress-tracker.md`](../../docs/progress-tracker.md).

---
Previous: [Directories](02-directories.md) | Next: [Week 4: Processes](../week-04-linux-processes-packages-ssh/01-processes.md) | [Topic index](../../docs/topic-index.md)

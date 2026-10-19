# Week 3, Lesson 2: Directories

> **Week 3 - Linux Files and Permissions** - Topic 2 of 3 | Shell used: **Linux shell (bash)** - use WSL/Ubuntu, a VM, or a course lab. These are NOT Windows PowerShell commands.

> **Windows users:** open the Start menu, type `Ubuntu` (after installing WSL, see [setup](../../docs/setup-and-tools.md)) or in PowerShell run `wsl`. The prompt will look like `user@PC:~$`. That is bash.

## 1. Explanation from scratch

A **directory** (folder) holds files and other directories. In this lesson you learn to build, copy, move and remove them safely.

- `mkdir name` / `mkdir -p a/b/c` - create directories.
- `cp source dest` - copy a file; `cp -r dir dest` copies a directory recursively.
- `mv source dest` - move **or rename**.
- `rm file` - delete a file. `rm -r dir` - delete a directory and everything inside.

> **Warning:** `rm` does **not** use a recycle bin. Deleted means gone. Never run `rm -r` on a path you have not double-checked with `pwd` and `ls`. Never run `rm -rf /` or anything with `sudo rm -rf` as a beginner. Practise only inside `~/linux-lab`.

## 2. Simple analogy

Moving files between **boxes in a storeroom**. `cp` photocopies, `mv` relocates, `rm` shreds.

## 3. Key terms

- **Recursive (`-r`)** - Include everything inside a directory.
- **Rename** - `mv old new` in the same folder.
- **Wildcard `*`** - Matches many names, e.g. `*.txt`.
- **Destructive** - Cannot be undone.

## 4. Examples and commands

```bash
cd ~/linux-lab
mkdir -p project/src project/docs
touch project/src/app.js project/docs/notes.txt
cp project/docs/notes.txt project/docs/notes-backup.txt
mv project/docs/notes-backup.txt project/docs/old-notes.txt
ls -R project
rm project/docs/old-notes.txt
ls -R project
```

`ls -R` lists recursively. Expected after the last command: `app.js` under `src` and `notes.txt` under `docs`.

## 5. Step-by-step instructions

1. `cd ~/linux-lab` and confirm with `pwd`.
2. Build the folder tree with `mkdir -p`.
3. Create files with `touch`.
4. Copy, rename (`mv`), and list.
5. Remove **one file** with `rm`, check, then remove the practice tree with `rm -r project` only after running `pwd` and `ls`.

## 6. Hands-on exercise

Build `sandbox/a/b`, copy a file into `b`, rename it, then remove the whole `sandbox` folder safely.

## 7. Worked solution

```bash
cd ~/linux-lab
mkdir -p sandbox/a/b
touch sandbox/a/file.txt
cp sandbox/a/file.txt sandbox/a/b/
mv sandbox/a/b/file.txt sandbox/a/b/renamed.txt
ls -R sandbox
pwd                 # confirm you are in linux-lab
rm -r sandbox
ls
```

`rm -r` is needed because `sandbox` is a directory.

## 8. Common mistakes

1. **Running `rm -r` in the wrong folder** - Always `pwd` and `ls` first.
2. **`mv` overwriting silently** - Use `mv -i` to be asked.
3. **`cp` on a folder without `-r`** - Gives `omitting directory`; add `-r`.

## 9. Revision notes

- `mkdir -p`, `cp -r`, `mv`, `rm -r`.
- `mv` renames too.
- No recycle bin.

## 10. Practical task for the project

Copy the portal files from `/mnt/c/...` (your extracted repo, WSL) into `~/portal-copy` with `cp -r` and list them with `ls -R`.

## 11. Progress checklist

- [ ] I can explain **Week 3, Lesson 2: Directories** in my own words.
- [ ] I ran the example commands and compared my output with the expected output.
- [ ] I completed the hands-on exercise before reading the solution.
- [ ] I completed the practical task for the project.
- [ ] I noted anything confusing in [`docs/progress-tracker.md`](../../docs/progress-tracker.md).

---
Previous: [Linux files](01-linux-files.md) | Next: [Permissions](03-permissions.md) | [Topic index](../../docs/topic-index.md)

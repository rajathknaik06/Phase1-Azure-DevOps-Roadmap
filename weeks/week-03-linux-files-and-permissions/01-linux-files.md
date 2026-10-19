# Week 3, Lesson 1: Linux files

> **Week 3 - Linux Files and Permissions** - Topic 1 of 3 | Shell used: **Linux shell (bash)** - use WSL/Ubuntu, a VM, or a course lab. These are NOT Windows PowerShell commands.

> **Windows users:** open the Start menu, type `Ubuntu` (after installing WSL, see [setup](../../docs/setup-and-tools.md)) or in PowerShell run `wsl`. The prompt will look like `user@PC:~$`. That is bash.

## 1. Explanation from scratch

Linux organises everything as **files** inside one tree that starts at `/` (the *root*). There are no drive letters like `C:`. Your personal area is the **home directory**, written `~`, e.g. `/home/rajath`.

Paths:

- **Absolute path** starts with `/`: `/home/rajath/lab/notes.txt` works from anywhere.
- **Relative path** starts from where you are: `lab/notes.txt`; `.` is "here" and `..` is "parent".

Linux file names are **case-sensitive**: `Notes.txt` and `notes.txt` are different.

Commands in this lesson:

- `pwd` - print working directory (where am I?)
- `ls` / `ls -la` - list files; `-l` long format, `-a` includes hidden files (names starting with `.`)
- `cd` - change directory
- `touch` - create an empty file (or update its time)
- `cat` - print a file

## 2. Simple analogy

The filesystem is a **tree of cupboards**. An absolute path is the full address from the front door; a relative path is directions from the room you are standing in.

## 3. Key terms

- **Root `/`** - Top of the filesystem.
- **Home `~`** - Your personal folder.
- **Absolute path** - Starts with `/`.
- **Relative path** - Starts from the current folder.
- **Hidden file** - Name begins with a dot.

## 4. Examples and commands

```bash
pwd
ls
ls -la
cd ~
mkdir linux-lab
cd linux-lab
touch notes.txt
echo "hello linux" > notes.txt
cat notes.txt
ls -la
```

Expected `cat` output: `hello linux`. `ls -la` shows lines like:

```text
-rw-r--r-- 1 rajath rajath 12 Oct 19 10:00 notes.txt
```

`echo "text" > file` writes text into a file (overwrites it).

## 5. Step-by-step instructions

1. Open your Linux shell and run `pwd`.
2. Run `ls -la` and find `.` and `..`.
3. `cd ~`, then `mkdir linux-lab` and `cd linux-lab`.
4. Create `notes.txt` with `touch`, fill it with `echo`, and read it with `cat`.
5. Use `cd ..` to go up and `cd linux-lab` to come back.

## 6. Hands-on exercise

From your home folder, create `linux-lab/docs`, make `readme.txt` in it using a **relative** path, then print it using an **absolute** path.

## 7. Worked solution

```bash
cd ~
mkdir -p linux-lab/docs
echo "read me" > linux-lab/docs/readme.txt
cat ~/linux-lab/docs/readme.txt
```

`mkdir -p` creates parents as needed. The first path is relative to `~`; `~/linux-lab/...` expands to the absolute `/home/<you>/linux-lab/...`.

## 8. Common mistakes

1. **Using `C:\` paths** - Linux uses `/home/you/...`. In WSL your Windows C: drive is at `/mnt/c`.
2. **Case mistakes** - `Notes.txt` is not `notes.txt`.
3. **Using `>` when you meant to append** - `>` overwrites; `>>` appends.

## 9. Revision notes

- `pwd`, `ls -la`, `cd`, `touch`, `cat`.
- Absolute starts with `/`; relative does not.
- Case-sensitive names.
- Hidden files start with `.`.

## 10. Practical task for the project

Create the folder layout of the portal in `~/portal-sketch` using `mkdir` and `touch` (`index.html`, `styles.css`, `app.js`, `scripts/`, `data/`). This mirrors `project/student-placement-portal`.

## 11. Progress checklist

- [ ] I can explain **Week 3, Lesson 1: Linux files** in my own words.
- [ ] I ran the example commands and compared my output with the expected output.
- [ ] I completed the hands-on exercise before reading the solution.
- [ ] I completed the practical task for the project.
- [ ] I noted anything confusing in [`docs/progress-tracker.md`](../../docs/progress-tracker.md).

---
Previous: [Week 2: Merge conflicts](../week-02-github-collaboration/05-merge-conflicts.md) | Next: [Directories](02-directories.md) | [Topic index](../../docs/topic-index.md)

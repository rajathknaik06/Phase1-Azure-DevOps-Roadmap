# Week 4, Lesson 1: Processes

> **Week 4 - Linux Processes, Packages, and SSH** - Topic 1 of 3 | Shell used: **Linux shell (bash)** on WSL/Ubuntu, a VM or a lab. `apt` is for Debian/Ubuntu, not Windows PowerShell.

Every running program is a process. Servers, pipelines and agents are all collections of processes.

## 1. Explanation from scratch

A **process** is a running instance of a program. When you start a program, the operating system gives it a unique number, the **PID** (process ID), memory and CPU time. One program can have many processes (many browser tabs).

Tools:

- `ps` - snapshot of processes. `ps` alone shows only your current terminal's processes. `ps aux` shows all processes with user, CPU%, memory%.
- `top` - live, refreshing view. Press `q` to quit. Press `P` to sort by CPU, `M` by memory.
- `kill PID` - ask a process to stop (polite `SIGTERM`). `kill -9 PID` forces it (last resort; no cleanup).

Why DevOps cares: when a website is slow or a server is stuck, you check which process uses CPU or memory, and you restart or stop the right one.

## 2. Simple analogy

Processes are **staff members in a restaurant kitchen**, each with a badge number (PID). `ps` is a photo of who is working; `top` is a live CCTV feed.

## 3. Key terms

- **Process** - A running program.
- **PID** - Unique process number.
- **Parent/child** - A process that starts another.
- **Signal** - A message such as `SIGTERM`.
- **Daemon/service** - A background process.

## 4. Examples and commands

```bash
ps
ps aux | head -5
top
sleep 300 &
ps
kill %1
```

`ps` output looks like:

```text
  PID TTY          TIME CMD
  412 pts/0    00:00:00 bash
  530 pts/0    00:00:00 ps
```

`sleep 300 &` starts a harmless background process; `kill %1` stops that job. Inside `top` the header lines show load and memory; the table lists PID, USER, %CPU, %MEM, COMMAND.

## 5. Step-by-step instructions

1. Run `ps` and find the PID of `bash`.
2. Run `ps aux | head` and identify the columns.
3. Run `top`, look at the busiest process, then press `q`.
4. Start `sleep 300 &`, find its PID with `ps`, stop it with `kill <PID>` (replace with the number), confirm with `ps`.

## 6. Hands-on exercise

Start two `sleep` jobs, list them, and stop only one. Write what a PID is.

## 7. Worked solution

```bash
sleep 500 &
sleep 600 &
ps | grep sleep
kill <PID-of-first-sleep>      # replace with the real number
ps | grep sleep
```

Only the other sleep remains. A PID is the unique number the OS gives each running process, so commands like `kill` can target exactly one.

## 8. Common mistakes

1. **Using `kill -9` first** - Try plain `kill` so the program can clean up.
2. **Killing the wrong PID** - Re-check with `ps` before killing.
3. **Leaving `top` open** - Press `q`.

## 9. Revision notes

- Process = running program with a PID.
- `ps`, `ps aux`, `top`, `kill`.
- `q` quits top.

## 10. Practical task for the project

Windows equivalent for later: `Get-Process` in PowerShell lists processes. Run it and compare columns with `ps aux`.

## 11. Progress checklist

- [ ] I can explain **Week 4, Lesson 1: Processes** in my own words.
- [ ] I ran the example commands and compared my output with the expected output.
- [ ] I completed the hands-on exercise before reading the solution.
- [ ] I completed the practical task for the project.
- [ ] I noted anything confusing in [`docs/progress-tracker.md`](../../docs/progress-tracker.md).

---
Previous: [Week 3: Permissions](../week-03-linux-files-and-permissions/03-permissions.md) | Next: [Package management](02-package-management.md) | [Topic index](../../docs/topic-index.md)

# Week 1, Lesson 8: .gitignore

> **Week 1 - Git Fundamentals** - Topic 8 of 9 | Shell used: Windows PowerShell / VS Code terminal (Git commands behave the same in any shell)

.gitignore keeps clutter and secrets out of your repository.

## 1. Explanation from scratch

A file named `.gitignore` lists patterns of files Git should **not** track. Typical entries: operating-system files (`Thumbs.db`, `.DS_Store`), logs (`*.log`), local environment files (`.env`), editor settings, and **private keys** (`*.pem`, `id_rsa`).

Rules of thumb: one pattern per line, `#` starts a comment, `*` matches many characters, and a trailing `/` matches a folder.

Important: `.gitignore` only affects files that are **not yet tracked**. If a file was already committed, ignoring it later does not remove it from history. A secret that was committed once should be treated as compromised and replaced.

## 2. Simple analogy

It is the **'do not pack' list** for the shipping box.

## 3. Key terms

- **Pattern** - A rule like `*.log`.
- **Tracked file** - A file already known to Git.
- **`git check-ignore -v`** - Shows which rule ignores a file.
- **Secret** - A password, key or token.

## 4. Examples and commands

```powershell
Set-Content -Path .gitignore -Value @("*.log", ".env", "*.pem") -Encoding ascii
"secret=123" | Out-File .env -Encoding utf8
"debug" | Out-File debug.log -Encoding utf8
git status
git check-ignore -v .env debug.log
```

`git status` no longer lists `.env` or `debug.log`. The `check-ignore` output names the rule responsible.

Stop tracking a file that was committed by mistake (keeps the local copy):

```powershell
git rm --cached .env
```

## 5. Step-by-step instructions

1. Create `.gitignore` with the entries above.
2. Create `.env` and `debug.log`.
3. Run `git status` and confirm they are hidden.
4. Run `git check-ignore -v .env`.
5. Open this course's real [`.gitignore`](../../.gitignore) and read each section.

## 6. Hands-on exercise

Create `temp/` containing `scratch.txt`, ignore the whole `temp/` folder, and prove it is ignored.

## 7. Worked solution

```powershell
mkdir temp
"x" | Out-File temp\scratch.txt -Encoding utf8
Add-Content -Path .gitignore -Value "temp/" -Encoding ascii
git check-ignore -v temp\scratch.txt
```

The rule `temp/` matches the folder and everything inside it.

## 8. Common mistakes

1. **Ignoring after committing** - Use `git rm --cached file` and rotate any secret.
2. **Wrong file name** - It must be `.gitignore`, not `gitignore.txt`.
3. **Ignoring files the project needs** - Do not ignore `index.html` or source code.

## 9. Revision notes

- `.gitignore` lists untracked files to skip.
- Add keys, `.env`, logs.
- It does not untrack already-committed files.

## 10. Practical task for the project

Open the root `.gitignore` and find the lines that protect private keys and `.env` files.

## 11. Progress checklist

- [ ] I can explain **Week 1, Lesson 8: .gitignore** in my own words.
- [ ] I ran the example commands and compared my output with the expected output.
- [ ] I completed the hands-on exercise before reading the solution.
- [ ] I completed the practical task for the project.
- [ ] I noted anything confusing in [`docs/progress-tracker.md`](../../docs/progress-tracker.md).

---
Previous: [Push](07-push.md) | Next: [README files](09-readme-files.md) | [Topic index](../../docs/topic-index.md)

# Week 8, Lesson 1: Revision

> **Week 8 - Revision and Integration** - Topic 1 of 3 | Shell used: Mixed: Windows PowerShell for Git/PowerShell/portal; Linux shell for Linux topics; browser for the portal and GitHub

Revision is active recall: try first, check second. Do not just re-read.

## 1. Explanation from scratch

This lesson walks the whole roadmap in a structured way. For each week: (1) cover the answers, (2) answer from memory, (3) run the commands, (4) tick what you got right.

**Method (spaced, active revision):**

1. Read the question only.
2. Write the answer on paper or in a scratch file.
3. Check against the lesson and the [final revision guide](../../docs/final-revision-guide.md).
4. Mark weak topics in the [progress tracker](../../docs/progress-tracker.md) and revisit them in 2 days, then 1 week.

**Recall questions**

*Week 1 Git:* What are the three places a change can live? Which command shows what will be committed? What is `origin`? What does `.gitignore` do to files already committed?

*Week 2 GitHub:* Difference between Git and GitHub? Why a feature branch? What is a PR and is it a Git command? What are the 5 steps to resolve a conflict?

*Week 3 Linux files:* Absolute vs relative path? What does `ls -la` add? What does `chmod 640` mean? Why careful with `rm -r`?

*Week 4 Linux processes/packages/SSH:* What is a PID? `ps` vs `top`? What does `apt` run on? Public vs private key? Authentication vs authorization?

*Week 5 Networking:* How many bits in IPv4? What does `/24` mean? Which record maps a name to IPv4? Ports for SSH/HTTP/HTTPS? What does TLS do? What does a firewall rule do?

*Week 6 PowerShell:* Does `$f = "a.txt"` create a file? What does `-ge` mean? How does `foreach` work?

*Week 7 PowerShell validation/errors:* `Test-Path -PathType Leaf` vs `Container`? When is `-ErrorAction Stop` needed? What do exit codes 0/1/2 mean here?

## 2. Simple analogy

Revision is **practising a piece of music** rather than reading the sheet: you only know it once your fingers can play it from memory.

## 3. Key terms

- **Active recall** - Retrieving answers from memory.
- **Spaced repetition** - Revisiting topics at growing intervals.
- **Weak topic** - Anything you needed notes for.

## 4. Examples and commands

Run this quick self-check (PowerShell, repository root):

```powershell
git --version
git status
Get-ChildItem .\weeks -Directory | Select-Object Name
Get-ChildItem .\weeks -Recurse -Filter *.md | Measure-Object | Select-Object Count
```

Expected: a Git version, a status message, 8 week folders, and `Count` of 35 lessons.

## 5. Step-by-step instructions

1. Pick two weeks per sitting.
2. Answer the recall questions above without notes.
3. Run the commands for those weeks again in a fresh practice folder.
4. Record errors you hit in the progress tracker.
5. Finish with the [practical lab](../../exercises/practical-lab.md).

## 6. Hands-on exercise

Without looking, write the 12 commands you use most from Weeks 1-7 and one sentence about each. Then check against the revision guide.

## 7. Worked solution

A strong list: `git status`, `git add`, `git commit -m`, `git switch -c`, `git merge`, `git push -u origin main`, `pwd`, `ls -la`, `chmod`, `ps`, `ssh-keygen`, `Test-NetConnection`, `Test-Path`. Any command you could not describe goes in the 'topics requiring revision' table.

## 8. Common mistakes

1. **Re-reading only** - Test yourself.
2. **Revising everything equally** - Spend more time on weak topics.
3. **Skipping the commands** - Typing them builds memory.

## 9. Revision notes

- Active recall beats re-reading.
- Track weak topics.
- Repeat commands in a clean folder.

## 10. Practical task for the project

Complete the revision table in [`docs/progress-tracker.md`](../../docs/progress-tracker.md).

## 11. Progress checklist

- [ ] I can explain **Week 8, Lesson 1: Revision** in my own words.
- [ ] I ran the example commands and compared my output with the expected output.
- [ ] I completed the hands-on exercise before reading the solution.
- [ ] I completed the practical task for the project.
- [ ] I noted anything confusing in [`docs/progress-tracker.md`](../../docs/progress-tracker.md).

---
Previous: [Week 7: Error handling](../week-07-powershell-validation-errors/02-error-handling.md) | Next: [Integration](02-integration.md) | [Topic index](../../docs/topic-index.md)

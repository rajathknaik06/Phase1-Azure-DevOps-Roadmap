# Final Assessment

Complete this **without notes first**, then check with the lessons and [practical lab solutions](../solutions/practical-lab-solutions.md). Use a fresh practice folder (e.g. `$HOME\assessment`). Linux tasks need a Linux shell.

## Tasks (100 points)

### A. Git (15)
1. (5) Create a repository, add `README.md` and `.gitignore` (ignoring `.env` and `*.log`), and make **two** commits with clear messages.
2. (5) Show `git log --oneline` and prove `.env` is ignored with `git check-ignore -v .env`.
3. (5) Explain the difference between working tree, staging area and history.

### B. GitHub collaboration (15)
4. (5) Create `feature/update-readme`, change the README, merge it into `main`, delete the branch.
5. (5) Create and resolve a merge conflict in a practice file.
6. (5) Explain why a pull request is not a Git command and list the steps of a PR workflow.

### C. Linux (20) *(Linux shell)*
7. (5) Build `assess/src` and `assess/docs`, create files, copy and rename one.
8. (5) Set a file to `640` and a script to `755`; explain each digit.
9. (5) Start and stop a `sleep` process using `ps` and `kill`.
10. (5) Explain public/private keys, authentication vs authorization, and why private keys are never committed. State which OS family `apt` belongs to.

### D. Networking (15)
11. (5) For `192.168.20.0/26`: mask, usable hosts, address range.
12. (5) Use `nslookup` and `Test-NetConnection ... -Port 443` (if you have internet) and interpret the results.
13. (5) Describe the journey of `https://portal.example.com` from browser to server (DNS, IP, port, TLS, firewall).

### E. PowerShell (15)
14. (5) Write an `if/elseif/else` that classifies a number of files as none, few, or many.
15. (5) Write a `foreach` loop that checks three paths with `Test-Path -LiteralPath` and counts missing ones.
16. (5) Write `try/catch` with `-ErrorAction Stop` and explain the exit code you choose.

### F. Portal project (15)
17. (5) Run the validator and report the exit code.
18. (5) In a temp copy, delete `styles.css`, run the validator, report the message and exit code, then fix it.
19. (5) Demonstrate search for `python`, course `BCA`, and a no-match query in the browser.

### G. Relationship to future CI/CD (5)
20. (5) In under 120 words explain how `Check-PortalStructure.ps1` and its exit codes could later be used by a pipeline. Clearly label what is **future** and not configured.

## Scoring rubric

| Score | Level | What to do next |
|---|---|---|
| 90-100 | Excellent | Move on to Azure fundamentals with confidence. |
| 75-89 | Good | Revisit the sections where you lost points. |
| 60-74 | Developing | Redo the weak weeks' lessons and the practical lab exercises for them. |
| Below 60 | Needs more practice | Repeat the roadmap at a slower pace, one week at a time, re-running every command. |

**Per-task scoring:** full marks if the command or answer is correct **and** you can explain why; half marks if correct but you needed the notes; zero if not attempted or unexplained.

## What to revisit by section

| Weak section | Go back to |
|---|---|
| A | [Week 1](../weeks/week-01-git-basics/01-git.md) |
| B | [Week 2](../weeks/week-02-github-collaboration/01-github.md) |
| C | [Week 3](../weeks/week-03-linux-files-and-permissions/01-linux-files.md) and [Week 4](../weeks/week-04-linux-processes-packages-ssh/01-processes.md) |
| D | [Week 5](../weeks/week-05-networking-fundamentals/01-ipv4.md) |
| E | [Week 6](../weeks/week-06-powershell-fundamentals/01-variables.md) and [Week 7](../weeks/week-07-powershell-validation-errors/01-file-checks.md) |
| F | [Portal README](../project/student-placement-portal/README.md) and [Week 8](../weeks/week-08-revision-integration/03-final-mini-project.md) |
| G | [Week 8: Integration](../weeks/week-08-revision-integration/02-integration.md) |

## Final project checklist

- [ ] Portal opens by double-clicking `index.html` and shows 12 fictional students
- [ ] Search by name and by skill works
- [ ] Course filter works; **Clear filters** restores all students
- [ ] A no-match search shows a clear message
- [ ] Keyboard navigation works (focus outlines visible)
- [ ] `Check-PortalStructure.ps1` returns exit code 0 on the full project
- [ ] A deliberate missing file gives `MISSING FILE` and exit code 1 (in a temp copy)
- [ ] `.gitignore` excludes logs, `.env`, and private keys
- [ ] Commits have meaningful messages (`git log --oneline`)
- [ ] Repository pushed to GitHub
- [ ] All 35 topics ticked in the [coverage checklist](topic-coverage-checklist.md)
- [ ] Progress tracker completed
- [ ] I can explain, **without claiming it is configured**, how Azure DevOps, Azure, GitHub Actions and CI/CD relate to this project

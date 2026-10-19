# Phase 1: Azure DevOps Beginner Roadmap

A complete, practical, beginner-friendly learning repository for the **first eight weeks** of an Azure DevOps journey. It teaches Git, GitHub collaboration, Linux, networking, and PowerShell from scratch, and ties them together in a small hands-on project: the **Student Placement Portal Foundation**.

## Purpose

Build the foundations that Azure DevOps, Azure, GitHub Actions and CI/CD rely on, **without needing a cloud subscription, API key, database or paid service**.

## Who is this for?

Beginners (for example first- or second-year computer science students) who want clear explanations, runnable commands, exercises with solutions, and a real project. No prior experience is assumed.

## Prerequisites

- Windows 10/11 (the main workflow), a modern web browser, and about 2 GB free disk space.
- **Required tools:** Visual Studio Code, Git for Windows, Windows PowerShell 5.1 (built in) or PowerShell 7.
- **Optional (for Linux weeks 3-4):** WSL with Ubuntu, a Linux VM, or a course lab. Python is optional (for a local web server).
- Details and version checks: [docs/setup-and-tools.md](docs/setup-and-tools.md).

## The eight-week roadmap

| Week | Topic | Lessons |
|---|---|---|
| 1 | Git Fundamentals | Git, Repositories, Staging, Commits, Clone, Pull, Push, .gitignore, README files |
| 2 | GitHub Collaboration | GitHub, Branches, Merging, Pull requests, Merge conflicts |
| 3 | Linux Files and Permissions | Linux files, Directories, Permissions |
| 4 | Linux Processes, Packages, and SSH | Processes, Package management, SSH concepts |
| 5 | Networking Fundamentals | IPv4, Subnet masks, CIDR, DNS, Ports, HTTP/HTTPS, Firewalls |
| 6 | PowerShell Fundamentals | Variables, Conditions, Loops |
| 7 | PowerShell Validation and Errors | File checks, Error handling |
| 8 | Revision and Integration | Revision, Integration, Final mini-project |

Full map with goals and deliverables: [docs/learning-roadmap.md](docs/learning-roadmap.md). Every lesson: [docs/topic-index.md](docs/topic-index.md).

## Repository overview

```text
Phase1-Azure-DevOps-Roadmap/
├── README.md                     you are here
├── .gitignore                    keeps clutter and secrets out of Git
├── docs/                         setup, roadmap, checklists, tracker, guides, assessment
├── weeks/                        8 week folders, 35 lesson files
├── project/student-placement-portal/   HTML/CSS/JS site + PowerShell validator
├── exercises/practical-lab.md    18 practical exercises
└── solutions/practical-lab-solutions.md   matching worked solutions
```

## How to open the repository in VS Code (Windows)

1. Download the ZIP and **extract** it (right-click > Extract All).
2. Start VS Code > **File > Open Folder** > choose the extracted `Phase1-Azure-DevOps-Roadmap` folder (the one that contains `README.md`).
3. Open the terminal: **Terminal > New Terminal**. Check that the shell is **PowerShell**.
4. Preview any Markdown file with `Ctrl+Shift+V`.

## How to study

1. Follow [docs/learning-roadmap.md](docs/learning-roadmap.md) week by week, **in order**.
2. Each lesson has: explanation, analogy, key terms, commands, steps, a hands-on exercise, a worked solution, common mistakes, revision notes, a project task, and a checklist.
3. Try each exercise **before** reading its solution.
4. Tick topics in [docs/topic-coverage-checklist.md](docs/topic-coverage-checklist.md) and record notes in [docs/progress-tracker.md](docs/progress-tracker.md).
5. Finish with the [practical lab](exercises/practical-lab.md), then the [final assessment](docs/final-assessment.md).

**Which shell?** Each lesson states it at the top. Git and PowerShell lessons use the VS Code PowerShell terminal. Weeks 3-4 (Linux) need a **Linux shell** (WSL/Ubuntu, VM or lab); do not paste those commands into PowerShell.

## Open and test the portal

Double-click `project/student-placement-portal/index.html`. Try searching `python` (4 results), choosing course `BCA` (2), and `zzzz` (a no-match message). See the [portal README](project/student-placement-portal/README.md).

## Run the PowerShell validator

From the repository root in the VS Code terminal:

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File ".\project\student-placement-portal\scripts\Check-PortalStructure.ps1"
$LASTEXITCODE
```

Exit codes: `0` success, `1` something required is missing, `2` unexpected error.

### Execution-policy error ("running scripts is disabled on this system")

Windows may refuse to load unsigned `.ps1` files depending on the **execution policy**.

- `-ExecutionPolicy Bypass` in the command above applies **only to that launched PowerShell process**. It does not change your saved settings.
- It is **not guaranteed** to work on managed computers (school, college, company) where an administrator's Group Policy overrides it. Follow your organisation's rules or ask the administrator.
- Inspect the policy: `Get-ExecutionPolicy -List` (a `MachinePolicy` or `UserPolicy` value of anything but `Undefined` means policy is enforced centrally).
- Files from a downloaded ZIP may carry an "internet" mark. Right-click the ZIP > **Properties** > tick **Unblock** before extracting, or run `Unblock-File` on the script.
- Do **not** disable security for the whole machine just to run a lesson.

More detail: [docs/setup-and-tools.md](docs/setup-and-tools.md#powershell-execution-policy).

## Upload to GitHub

Step by step in [docs/github-upload-guide.md](docs/github-upload-guide.md).

## Troubleshooting

| Problem | Fix |
|---|---|
| `git is not recognized` | Install Git for Windows, restart VS Code. |
| Script blocked | See the execution-policy section above. |
| `apt` not recognised | You are in PowerShell; open Ubuntu (WSL). |
| Portal shows no cards | Make sure JavaScript is enabled and `app.js` sits next to `index.html`. |
| `remote origin already exists` | `git remote set-url origin <URL>`. |
| Links in Markdown do not open | Open the *folder* in VS Code, not single files. |

## Scope and limitations

- This is a **foundation**. It does **not** configure Azure DevOps, Azure resources, GitHub Actions or any CI/CD pipeline; there are no such files here by design.
- Those topics are conceptual connections for **future phases**, explained in [Week 8: Integration](weeks/week-08-revision-integration/02-integration.md).
- All student data in the portal is fictional.
- Commands that require internet (cloning, DNS, HTTPS tests) are labelled as such.

## Dependencies and assumptions

No npm packages, no build tools, no databases, no API keys, no cloud credentials. Git, PowerShell and a browser are enough for everything except the optional Linux practice, which needs WSL, a VM or a lab.

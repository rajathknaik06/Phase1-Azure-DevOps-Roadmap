# Student Placement Portal Foundation

A small **static website** used in Phase 1 of the Azure DevOps beginner roadmap. It lists **fictional** students and lets you search by name or skill and filter by course. A PowerShell script checks that the project's files and folders are all present.

> All names and details are invented. Do not add real student information.

## What is inside

```text
student-placement-portal/
├── README.md                    this file
├── IMPLEMENTATION-GUIDE.md      step-by-step: how the project was built
├── index.html                   page structure (semantic HTML)
├── styles.css                   responsive styles
├── app.js                       search / filter logic and page rendering
├── data/
│   └── students.json            the same 12 fictional records (see "Data")
└── scripts/
    └── Check-PortalStructure.ps1   structure validator
```

## Requirements

- A modern web browser (Edge, Chrome, Firefox).
- Windows PowerShell 5.1 or PowerShell 7 for the validator.
- Nothing else: no npm, no database, no API keys, no cloud account.

## Run the portal

**Option A (simplest):** in File Explorer, double-click `index.html`. It opens in your browser using a `file://` address.

**Option B (optional local web server):** from the repository root, if you have Python installed:

```powershell
cd .\project\student-placement-portal
python -m http.server 8000
```

Then browse to `http://localhost:8000`. Press `Ctrl+C` in the terminal to stop the server. The footer of the page tells you which data source was used.

## Try these searches

| Type this | Expect |
|---|---|
| `python` | 4 students |
| course `BCA` | 2 students |
| `azure` + course `B.Tech IT` | 1 student (Arjun Pillai) |
| `zzzz` | message: "No students match your search..." |

## Data

`app.js` contains the 12 records **embedded** as `FALLBACK_STUDENTS`, because browsers often block `fetch()` of local files from `file://`. `data/students.json` contains the identical records. When the page is served over `http://` (Option B), `app.js` loads the JSON file and uses it; if loading fails, it falls back to the embedded data. When opened by double-click, the embedded data is always used. If you edit one copy, edit the other too.

## Validate the project structure (PowerShell)

Open the **repository root** in VS Code, open a terminal (`Terminal > New Terminal`, PowerShell), then run:

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File ".\project\student-placement-portal\scripts\Check-PortalStructure.ps1"
$LASTEXITCODE
```

The script finds the project folder from its own location, so it works from any starting folder.

| Exit code | Meaning |
|---|---|
| 0 | all required files and directories present |
| 1 | something required is missing (or is the wrong type) |
| 2 | unexpected error while checking |

### If you see "running scripts is disabled on this system"

Windows blocks unsigned local scripts under some **execution policies**. This is a safety feature, not a bug.

- The command above uses `-ExecutionPolicy Bypass` for **that one PowerShell process only**; it does not change your computer's saved policy. It may still be blocked on a computer managed by an organisation (Group Policy). In that case follow your administrator's rules.
- See the policy: `Get-ExecutionPolicy -List`.
- A narrower per-user option many learners use on their **own** computer: `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`. Read what it does first (see [Week 7 lesson](../../weeks/week-07-powershell-validation-errors/01-file-checks.md) and the [setup guide](../../docs/setup-and-tools.md)). Do not weaken machine-wide policy to make a lesson work.
- Files downloaded in a ZIP can be marked as "from the internet". If needed, right-click the ZIP before extracting > Properties > tick **Unblock**.

## Accessibility notes

Landmarks (`header`, `main`, `footer`), a skip link, labelled form controls, a polite live status message, visible keyboard focus, and text that does not rely on colour alone.

## Limitations

This is a learning foundation. There is no server, login, database or deployment. Azure, Azure DevOps, GitHub Actions and CI/CD are **future** topics; none is configured here.

## Next

Follow [IMPLEMENTATION-GUIDE.md](IMPLEMENTATION-GUIDE.md) and the [Week 8 final mini-project lesson](../../weeks/week-08-revision-integration/03-final-mini-project.md).

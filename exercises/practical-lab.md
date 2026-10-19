# Practical Lab (18 exercises)

Try every exercise **before** opening the [solutions](../solutions/practical-lab-solutions.md) (same numbers). Use practice folders **outside** the course repo, for example `$HOME\phase1-lab` (Windows) and `~/phase1-lab` (Linux).

Shell labels: **[PS]** Windows PowerShell, **[Linux]** bash in WSL/VM/lab, **[Both]**.

## Part 1 - Git and GitHub

**1. [PS] Initialize a Git repository.** Create `$HOME\phase1-lab\repo-a`, initialise a repo there and show the status.

**2. [PS] Stage and commit changes.** Create `README.md` with a title, stage it, review `git diff --staged`, commit it with message `Document project setup`, and show the one-line log.

**3. [PS] Use `.gitignore`.** Create `.env` and `debug.log`, add rules to `.gitignore`, and prove both files are ignored.

**4. [PS] Create a feature branch.** Create `feature/update-readme`, add a line to `README.md`, and commit with `Update project documentation`.

**5. [PS] Merge a branch.** Merge the feature branch into `main`, delete it, and show the graph log.

**6. [PS] Resolve a merge conflict.** In a new repo `conflict-lab`, create a conflict on `colors.txt` (blue -> red on `main`, blue -> green on a branch). Resolve it so the final content is `Color: teal`.

## Part 2 - Linux

**7. [Linux] Practise filesystem commands.** Create `phase1-lab/sandbox/src` and `sandbox/docs`, create `docs/notes.txt`, copy it to `docs/notes-backup.txt`, rename the copy to `old.txt`, list everything recursively, then delete `sandbox` safely.

**8. [Linux] Explain or inspect permissions.** Create `run.sh` and `data.txt`. Make `run.sh` mode `755` and `data.txt` mode `640`. Write what each digit means and what `-rwxr-x---` means in octal.

**9. [Linux] Inspect processes.** Start two `sleep` jobs, find their PIDs with `ps`, stop one. **[PS]** Which PowerShell command lists processes on Windows?

**10. [Linux] Understand package management.** Update the package list, install `tree`, run it, remove it. State which operating systems use `apt`, and what would happen if you typed `apt` in PowerShell.

**11. [Linux] Explain SSH key pairs.** Generate a lab key `~/.ssh/lab_key`, list both files, and answer: which file may be shared, which must stay secret, and why must the private one never be committed? Delete the lab key afterwards.

## Part 3 - Networking

**12. [Both] Interpret IPv4 and CIDR.** For each, give the mask, usable hosts and range (or network/broadcast): (a) `192.168.1.0/24`; (b) `10.0.0.0/26`; (c) `172.16.5.130/25`. Is `10.0.0.70` inside (b)? Is `172.20.5.9` private?

**13. [PS] Test DNS and ports (needs internet).** Run `nslookup example.com` and `Test-NetConnection example.com -Port 443`, then port 22. Explain the results. If you have no internet, explain what each command would tell you.

## Part 4 - PowerShell and the portal

**14. [PS] Write a conditional.** Given `$count`, print `At least three items` if `$count -ge 3`, otherwise `Fewer than three items`. Test with 2, 3, 5.

**15. [PS] Use a loop to check multiple paths.** From the repository root, loop through `README.md`, `index.html`, `styles.css`, `app.js`, `data\students.json` inside the portal folder and print FOUND/MISSING for each, then the number missing.

**16. [PS] Validate the portal.** Run `Check-PortalStructure.ps1` using the process-scoped command and report `$LASTEXITCODE`.

**17. [PS] Diagnose a missing-file failure.** In a temporary copy of the portal delete `styles.css`, run the validator, and report the failing line and exit code. Then restore the file and confirm exit code 0.

**18. [PS] Commit and push the final repository.** From the course repo root, check `git status`, commit your notes, set `origin` to your own GitHub repository (placeholders replaced!), and push. Verify by opening the GitHub page.

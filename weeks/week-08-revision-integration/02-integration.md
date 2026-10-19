# Week 8, Lesson 2: Integration

> **Week 8 - Revision and Integration** - Topic 2 of 3 | Shell used: Mixed: Windows PowerShell for Git/PowerShell/portal; Linux shell for Linux topics; browser for the portal and GitHub

Integration is seeing how separate skills form one workflow.

## 1. Explanation from scratch

Here is how the Phase 1 areas combine around the **Student Placement Portal**:

| Area | Role in the portal project |
|---|---|
| **Git** | Tracks every change and keeps history (`git commit`). |
| **GitHub** | Hosts the repo; pull requests give review and collaboration. |
| **Linux** | Filesystem, permissions, processes, packages and SSH knowledge for future servers and build agents. |
| **Networking** | Explains how a visitor would reach a deployed portal: DNS finds the IP, the browser connects to port 443, TLS protects traffic, firewall rules decide what is allowed. |
| **PowerShell** | `Check-PortalStructure.ps1` validates the project and returns exit codes automation can read. |
| **Azure DevOps** | *Future:* could host the repository and an Azure Pipeline that runs the validator. |
| **Azure** | *Future:* could host the deployed website or supporting services. |
| **GitHub Actions** | *Future:* could run the validator automatically on each push or pull request. |
| **CI/CD** | *Future:* automated checkout, validation, testing, packaging and deployment on every change. |

> **Honest scope note:** this repository does **not** contain a pipeline, GitHub Actions workflow, Azure resource or deployment. The last four rows are conceptual connections for future phases.

**A future journey, in words:** a developer commits to a branch, pushes, opens a pull request; a pipeline (later) checks out the code and runs `Check-PortalStructure.ps1`; if the exit code is non-zero the pipeline fails and the PR cannot merge; if zero, a later stage could publish the site. This is why exit codes (Week 7) matter.

## 2. Simple analogy

Phase 1 is learning **individual instruments**; integration is the **first rehearsal as a band**.

## 3. Key terms

- **Pipeline** - Automated sequence of build/test/deploy steps.
- **CI** - Continuous integration: automatically check every change.
- **CD** - Continuous delivery/deployment: automatically release.
- **Agent** - Machine that runs pipeline steps.

## 4. Examples and commands

A complete local workflow (PowerShell, in a **copy or branch**):

```powershell
git switch -c feature/final-check
powershell.exe -NoProfile -ExecutionPolicy Bypass -File ".\project\student-placement-portal\scripts\Check-PortalStructure.ps1"
if ($LASTEXITCODE -eq 0) {
    git add .
    git commit -m "Validated portal structure"
}
else {
    Write-Host "Fix the missing items before committing."
}
```

This `if ($LASTEXITCODE -eq 0)` is the same idea a pipeline step uses.

## 5. Step-by-step instructions

1. Draw a flow diagram on paper: edit -> commit -> push -> PR -> (future) pipeline -> (future) deploy.
2. Mark which parts you can do today and which are future.
3. Run the workflow in the example.
4. Write a paragraph on how a visitor reaches the portal if deployed (DNS, IP, port 443, TLS, firewall).

## 6. Hands-on exercise

Explain, in about 150 words, how Git, networking and PowerShell would all matter if the portal were deployed to a cloud server later. Label future items as future.

## 7. Worked solution

Model answer: Git records the portal's history and lets a team review changes through pull requests. A future pipeline could run `Check-PortalStructure.ps1` and fail the build on a non-zero exit code. If the site were deployed (future), a visitor's browser would ask DNS for the IP of the site's name, connect to port 443, negotiate TLS, and send an HTTP request. A firewall rule would allow 443 and block unneeded ports. Linux knowledge (permissions, SSH, packages) helps administer the server. None of this is configured in this repository.

## 8. Common mistakes

1. **Claiming a pipeline exists** - Only describe it as future.
2. **Ignoring exit codes** - They are how automation decides.
3. **Skipping the network picture** - Practise the DNS -> IP -> port -> TLS chain.

## 9. Revision notes

- Areas combine around one project.
- Azure DevOps, Azure, Actions, CI/CD are future.
- Exit codes connect scripts to pipelines.

## 10. Practical task for the project

Add a short 'How this fits together' paragraph to your own copy of the root README, then commit it.

## 11. Progress checklist

- [ ] I can explain **Week 8, Lesson 2: Integration** in my own words.
- [ ] I ran the example commands and compared my output with the expected output.
- [ ] I completed the hands-on exercise before reading the solution.
- [ ] I completed the practical task for the project.
- [ ] I noted anything confusing in [`docs/progress-tracker.md`](../../docs/progress-tracker.md).

---
Previous: [Revision](01-revision.md) | Next: [Final mini-project](03-final-mini-project.md) | [Topic index](../../docs/topic-index.md)

# Learning Roadmap (8 weeks)

A suggested pace: about 5-8 hours per week. Each week lists the exact lesson files, the goal, the hands-on work and the deliverable. Do the lessons **in order**.

## Week 1 - Git Fundamentals

**Lessons**

1. [Git](../weeks/week-01-git-basics/01-git.md)
2. [Repositories](../weeks/week-01-git-basics/02-repositories.md)
3. [Staging](../weeks/week-01-git-basics/03-staging.md)
4. [Commits](../weeks/week-01-git-basics/04-commits.md)
5. [Clone](../weeks/week-01-git-basics/05-clone.md)
6. [Pull](../weeks/week-01-git-basics/06-pull.md)
7. [Push](../weeks/week-01-git-basics/07-push.md)
8. [.gitignore](../weeks/week-01-git-basics/08-gitignore.md)
9. [README files](../weeks/week-01-git-basics/09-readme-files.md)

**Goals:** Understand version control; create and inspect a repository; stage and commit; clone; pull; push; ignore generated files and secrets; write a useful README.

**Hands-on work:** Create `git-practice`, make several commits, add a `.gitignore`, clone a repo, simulate pull/push with a local bare remote.

**Weekly deliverable:** A local Git repository with meaningful commits, a useful README, an appropriate `.gitignore`, and a basic understanding of cloning, pulling, and pushing.

## Week 2 - GitHub Collaboration

**Lessons**

1. [GitHub](../weeks/week-02-github-collaboration/01-github.md)
2. [Branches](../weeks/week-02-github-collaboration/02-branches.md)
3. [Merging](../weeks/week-02-github-collaboration/03-merging.md)
4. [Pull requests](../weeks/week-02-github-collaboration/04-pull-requests.md)
5. [Merge conflicts](../weeks/week-02-github-collaboration/05-merge-conflicts.md)

**Goals:** Know Git vs GitHub; connect remotes; create and switch branches; merge; understand pull requests as a review workflow; resolve merge conflicts.

**Hands-on work:** Create a feature branch, merge it, open a pull request on GitHub, and resolve a deliberate conflict in `conflict-lab`.

**Weekly deliverable:** A feature branch with a documented change, a completed merge, and an explanation of how pull requests and conflicts fit into team collaboration.

## Week 3 - Linux Files and Permissions

**Lessons**

1. [Linux files](../weeks/week-03-linux-files-and-permissions/01-linux-files.md)
2. [Directories](../weeks/week-03-linux-files-and-permissions/02-directories.md)
3. [Permissions](../weeks/week-03-linux-files-and-permissions/03-permissions.md)

**Goals:** Understand the Linux filesystem and paths; create, inspect, copy, move and remove practice files; absolute vs relative paths; read/write/execute permissions and `chmod`.

**Hands-on work:** Build `~/linux-lab` with `pwd ls cd mkdir touch cat cp mv rm chmod` in WSL/Ubuntu.

**Weekly deliverable:** A sample project directory created and inspected using Linux commands, plus a clear explanation of file permissions.

## Week 4 - Linux Processes, Packages, and SSH

**Lessons**

1. [Processes](../weeks/week-04-linux-processes-packages-ssh/01-processes.md)
2. [Package management](../weeks/week-04-linux-processes-packages-ssh/02-package-management.md)
3. [SSH concepts](../weeks/week-04-linux-processes-packages-ssh/03-ssh-concepts.md)

**Goals:** Explain processes and PIDs; inspect with `ps` and `top`; understand package managers; understand SSH, key pairs, authentication vs authorization, safe key handling.

**Hands-on work:** Inspect and stop a harmless `sleep` process; install and remove a small package with `apt`; create a lab SSH key pair (no server needed).

**Weekly deliverable:** The learner can explain a process, a package manager, SSH authentication, and safe key handling.

## Week 5 - Networking Fundamentals

**Lessons**

1. [IPv4](../weeks/week-05-networking-fundamentals/01-ipv4.md)
2. [Subnet masks](../weeks/week-05-networking-fundamentals/02-subnet-masks.md)
3. [CIDR](../weeks/week-05-networking-fundamentals/03-cidr.md)
4. [DNS](../weeks/week-05-networking-fundamentals/04-dns.md)
5. [Ports](../weeks/week-05-networking-fundamentals/05-ports.md)
6. [HTTP/HTTPS](../weeks/week-05-networking-fundamentals/06-http-https.md)
7. [Firewalls](../weeks/week-05-networking-fundamentals/07-firewalls.md)

**Goals:** IPv4 structure; subnet masks and CIDR; DNS records; ports and defaults (22, 80, 443); HTTP vs HTTPS and TLS; firewall rules.

**Hands-on work:** `ipconfig`, `nslookup`, `Test-NetConnection`, `ip addr`; compute subnets by hand; design a firewall rule set on paper.

**Weekly deliverable:** The learner can describe how a browser uses DNS, an IP address, a destination port, HTTPS, and network rules to reach a service.

## Week 6 - PowerShell Fundamentals

**Lessons**

1. [Variables](../weeks/week-06-powershell-fundamentals/01-variables.md)
2. [Conditions](../weeks/week-06-powershell-fundamentals/02-conditions.md)
3. [Loops](../weeks/week-06-powershell-fundamentals/03-loops.md)

**Goals:** Store values in variables; strings, numbers, arrays; `if/elseif/else`; `-eq -ne -gt -ge`; `foreach`.

**Hands-on work:** Write small scripts in `ps-lab`; loop through a list of portal paths and check each with `Test-Path`.

**Weekly deliverable:** A PowerShell script that loops through a list of required project paths and checks each path.

## Week 7 - PowerShell Validation and Errors

**Lessons**

1. [File checks](../weeks/week-07-powershell-validation-errors/01-file-checks.md)
2. [Error handling](../weeks/week-07-powershell-validation-errors/02-error-handling.md)

**Goals:** `Test-Path`; files vs directories; `Join-Path`; `try/catch`; `-ErrorAction Stop`; exit codes.

**Hands-on work:** Practise file checks, create a demo error script, read `$LASTEXITCODE`, and study the real validator.

**Weekly deliverable:** A working `Check-PortalStructure.ps1` that validates required Student Placement Portal files and directories, reports missing items clearly, and returns exit codes 0 (success), 1 (missing), 2 (unexpected).

## Week 8 - Revision and Integration

**Lessons**

1. [Revision](../weeks/week-08-revision-integration/01-revision.md)
2. [Integration](../weeks/week-08-revision-integration/02-integration.md)
3. [Final mini-project](../weeks/week-08-revision-integration/03-final-mini-project.md)

**Goals:** Revise the whole roadmap; connect Git, Linux, networking and PowerShell; build, test, document, validate and commit the final project; understand the future link to Azure DevOps/CI/CD.

**Hands-on work:** Complete the final mini-project tasks, the practical lab and the final assessment.

**Weekly deliverable:** A completed Student Placement Portal Foundation project, a passing validation run, a complete checklist, a GitHub-ready repository, and a final practical assessment.

## How the weeks connect

Git/GitHub (Weeks 1-2) protect your work and enable teamwork. Linux (3-4) and networking (5) explain the servers and connections you will meet in Azure. PowerShell (6-7) builds the validator for the portal project. Week 8 integrates everything. Azure DevOps, Azure, GitHub Actions and CI/CD are **future phases**; this repository does not configure them.

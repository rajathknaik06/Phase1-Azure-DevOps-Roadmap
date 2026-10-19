# Week 2, Lesson 4: Pull requests

> **Week 2 - GitHub Collaboration** - Topic 4 of 5 | Shell used: Web browser (GitHub) plus Git commands in PowerShell

A pull request is the team's review gate before code reaches `main`.

## 1. Explanation from scratch

A **pull request (PR)** is a request, made on GitHub (or GitHub Enterprise, Azure Repos, GitLab...), asking the team to review and merge your branch into another branch. **A pull request is not a Git command.** It is a feature of the hosting platform built on top of Git branches.

A normal workflow:

1. Create a branch and commit.
2. `git push -u origin feature/update-readme`.
3. On GitHub click **Compare & pull request**, write a title and description.
4. Reviewers comment, request changes, or approve. Automated checks (GitHub Actions, Azure Pipelines) may run.
5. Someone clicks **Merge pull request**.
6. Locally: `git switch main`, `git pull`, `git branch -d feature/update-readme`.

Team rules often protect `main` so that changes can only arrive through a reviewed PR.

## 2. Simple analogy

A pull request is like **handing your essay to an editor with a note saying 'please review before it goes in the magazine'**.

## 3. Key terms

- **Pull request** - Platform feature to review and merge a branch.
- **Reviewer** - A teammate who reads your change.
- **Approval** - Permission to merge.
- **Branch protection** - Rules that guard `main`.
- **Description** - Text explaining what and why.

## 4. Examples and commands

```powershell
git switch -c feature/update-readme
# edit and commit
git push -u origin feature/update-readme
```

Git prints a link such as `https://github.com/YOUR-USERNAME/YOUR-REPOSITORY/pull/new/feature/update-readme`. Open it in the browser.

Example PR description:

```text
## What
Adds run instructions to the README.
## Why
New learners could not start the portal.
## How I tested
Ran the PowerShell validator: exit code 0.
```

## 5. Step-by-step instructions

1. Push a feature branch to your GitHub repo.
2. Open the repository page, click **Compare & pull request**.
3. Write a clear title and a description like the example.
4. Click **Create pull request**.
5. Review your own PR on the **Files changed** tab.
6. Click **Merge pull request**, then update your local `main` with `git pull`.

## 6. Hands-on exercise

List five facts about pull requests, including one reason they are not a Git command. Then open a real PR in your own repo.

## 7. Worked solution

Possible answer: (1) created on a platform such as GitHub; (2) compares a branch with a target branch; (3) enables review and comments; (4) can run automated checks; (5) ends with a merge. Not a Git command because there is no `git pull-request`; Git has no concept of reviewers or discussions, the hosting platform adds them.

## 8. Common mistakes

1. **Confusing `git pull` with a pull request** - Different things: `git pull` downloads; a PR requests review.
2. **Huge PRs** - Keep them small and focused.
3. **Forgetting to `git pull` after merging** - Your local `main` is stale until you pull.

## 9. Revision notes

- PR = review and merge request on the platform.
- Push branch, open PR, review, merge, pull.
- Not a Git command.

## 10. Practical task for the project

Open a PR in your GitHub copy of this course repo for your README branch and merge it.

## 11. Progress checklist

- [ ] I can explain **Week 2, Lesson 4: Pull requests** in my own words.
- [ ] I ran the example commands and compared my output with the expected output.
- [ ] I completed the hands-on exercise before reading the solution.
- [ ] I completed the practical task for the project.
- [ ] I noted anything confusing in [`docs/progress-tracker.md`](../../docs/progress-tracker.md).

---
Previous: [Merging](03-merging.md) | Next: [Merge conflicts](05-merge-conflicts.md) | [Topic index](../../docs/topic-index.md)

# Week 1, Lesson 9: README files

> **Week 1 - Git Fundamentals** - Topic 9 of 9 | Shell used: Windows PowerShell / VS Code terminal (Git commands behave the same in any shell)

A README is the front page of your repository.

## 1. Explanation from scratch

`README.md` is a Markdown file shown automatically on GitHub when someone opens your repository. It answers: *What is this? How do I run it? What do I need?*

Markdown is simple text formatting: `#` for headings, `-` for bullets, backticks for code, and triple backticks for code blocks. VS Code previews Markdown with `Ctrl+Shift+V`.

A useful README has: a title, one-sentence purpose, prerequisites, setup/run steps, folder overview, and troubleshooting. Write it for someone who has never seen the project.

## 2. Simple analogy

A README is the **instruction leaflet in a product box**.

## 3. Key terms

- **Markdown** - A lightweight formatting syntax.
- **Heading** - A line starting with `#`.
- **Code block** - Text between triple backticks.
- **Preview** - VS Code's rendered view of Markdown.

## 4. Examples and commands

A minimal README:

````markdown
# Student Placement Portal

A small static website that lists fictional students.

## Run it
Open `index.html` in a browser.

## Check the project
```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\scripts\Check-PortalStructure.ps1
```
````

Commit it:

```powershell
git add README.md
git commit -m "Document project setup"
```

## 5. Step-by-step instructions

1. In `git-practice`, create `README.md` with a title and three sections.
2. Press `Ctrl+Shift+V` in VS Code to preview it.
3. Add a code block showing a command.
4. Commit it with a clear message.
5. Compare with the portal README in `project/student-placement-portal/README.md`.

## 6. Hands-on exercise

Write a README for a pretend project called *Recipe Box* with: purpose, how to run, and a prerequisites list.

## 7. Worked solution

```markdown
# Recipe Box
Stores favourite recipes in plain text files.

## Prerequisites
- A text editor
- Git for Windows

## How to run
Open `recipes.txt` and add one recipe per line.
```

It answers the three beginner questions: what, what do I need, how do I use it.

## 8. Common mistakes

1. **Naming it `readme.txt`** - Use `README.md` so GitHub renders it.
2. **Unclosed code fences** - Every opening triple backtick needs a closing one.
3. **Writing only for yourself** - Assume the reader knows nothing.

## 9. Revision notes

- README.md is rendered on GitHub.
- Include purpose, prerequisites, run steps.
- Preview with `Ctrl+Shift+V`.

## 10. Practical task for the project

Read the portal README and add one improvement of your own, then commit it.

## 11. Progress checklist

- [ ] I can explain **Week 1, Lesson 9: README files** in my own words.
- [ ] I ran the example commands and compared my output with the expected output.
- [ ] I completed the hands-on exercise before reading the solution.
- [ ] I completed the practical task for the project.
- [ ] I noted anything confusing in [`docs/progress-tracker.md`](../../docs/progress-tracker.md).

---
Previous: [.gitignore](08-gitignore.md) | Next: [Week 2: GitHub](../week-02-github-collaboration/01-github.md) | [Topic index](../../docs/topic-index.md)

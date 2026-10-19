# Week 4, Lesson 3: SSH concepts

> **Week 4 - Linux Processes, Packages, and SSH** - Topic 3 of 3 | Shell used: **Linux shell (bash)** on WSL/Ubuntu, a VM or a lab. `apt` is for Debian/Ubuntu, not Windows PowerShell. `ssh` and `ssh-keygen` also exist in modern Windows PowerShell.

SSH is how engineers securely log into servers and agents.

## 1. Explanation from scratch

**SSH (Secure Shell)** gives you an encrypted command-line session on another computer.

```bash
ssh user@server.example
```

`user` is the account name on the server; `server.example` is a placeholder host name or IP you replace with a real one. You do **not** need a real server for this lesson.

**Authentication vs authorization**

- *Authentication* = proving **who you are** (password or key).
- *Authorization* = deciding **what you may do** once identified (permissions, groups).

**Key pairs.** `ssh-keygen` creates two files:

- **Private key** (`id_ed25519`) - stays secret on your computer. Never share, email or commit it.
- **Public key** (`id_ed25519.pub`) - safe to share; placed on servers or GitHub.

The server challenges you; only the matching private key can answer. Keys can be protected with a **passphrase**.

**Host-key verification.** On first connection SSH shows the server's fingerprint and asks `Are you sure you want to continue connecting?`. Verify the fingerprint with the server owner; accepted keys are saved in `~/.ssh/known_hosts`. A later warning `REMOTE HOST IDENTIFICATION HAS CHANGED` may mean tampering or a rebuilt server, so investigate.

**Safe handling:** private keys have mode `600`, live in `~/.ssh`, are listed in `.gitignore`, and are never pasted into chats or repositories. If one leaks, delete it and create a new pair.

## 2. Simple analogy

Your **public key is a padlock** you hand out to anyone; your **private key is the only key** that opens it, and it never leaves your pocket.

## 3. Key terms

- **SSH** - Encrypted remote login protocol (port 22).
- **Public key** - Shareable half.
- **Private key** - Secret half.
- **Passphrase** - Password protecting the private key.
- **Fingerprint** - Short ID of a server key.
- **`known_hosts`** - File of servers you trusted.

## 4. Examples and commands

```bash
ssh -V
ssh-keygen -t ed25519 -C "student@example.com" -f ~/.ssh/lab_key
ls -l ~/.ssh/lab_key ~/.ssh/lab_key.pub
cat ~/.ssh/lab_key.pub
```

Expected: two files; the `.pub` file is one line starting `ssh-ed25519 AAAA...`. The private file shows `-rw-------`. Use a **lab key name** so you do not overwrite real keys.

Connecting (needs a real server, **not required** here):

```bash
ssh user@server.example
```

## 5. Step-by-step instructions

1. `ssh -V` to confirm the client exists.
2. Create a lab key with `ssh-keygen` (choose a passphrase).
3. List both files and compare permissions.
4. Display **only** the `.pub` file with `cat`.
5. Confirm the private key name appears in the root `.gitignore` patterns (`*.pem`, `id_rsa`, `id_ed25519`).
6. Delete the lab key when finished: `rm ~/.ssh/lab_key ~/.ssh/lab_key.pub`.

## 6. Hands-on exercise

Explain in four sentences: public vs private key, authentication vs authorization, why host-key verification exists, and why a private key must never be committed.

## 7. Worked solution

The public key can be shared and installed on servers; the private key proves identity and stays secret. Authentication confirms who you are; authorization decides what you may do. Host-key verification stops you being tricked into logging into an impostor server. A committed private key can be copied by anyone who sees the repo, allowing them to impersonate you, so the key must be revoked.

## 8. Common mistakes

1. **Sharing the file without `.pub`** - Only share `.pub`.
2. **Overwriting an existing key** - Use `-f` with a new name.
3. **Ignoring host-key warnings** - Investigate them.

## 9. Revision notes

- `ssh user@host`; `ssh-keygen`.
- Private key secret, public key shareable.
- Authentication vs authorization.
- Verify fingerprints; never commit keys.

## 10. Practical task for the project

Open the root `.gitignore` and find the SSH key patterns. Explain in your notes how they protect this repo.

## 11. Progress checklist

- [ ] I can explain **Week 4, Lesson 3: SSH concepts** in my own words.
- [ ] I ran the example commands and compared my output with the expected output.
- [ ] I completed the hands-on exercise before reading the solution.
- [ ] I completed the practical task for the project.
- [ ] I noted anything confusing in [`docs/progress-tracker.md`](../../docs/progress-tracker.md).

---
Previous: [Package management](02-package-management.md) | Next: [Week 5: IPv4](../week-05-networking-fundamentals/01-ipv4.md) | [Topic index](../../docs/topic-index.md)

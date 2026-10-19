# Week 5, Lesson 4: DNS

> **Week 5 - Networking Fundamentals** - Topic 4 of 7 | Shell used: Windows PowerShell **and/or** Linux shell, as labelled on each command

Humans remember names; computers use numbers. DNS translates.

## 1. Explanation from scratch

**DNS (Domain Name System)** maps names such as `example.com` to IP addresses. A browser asks a **DNS resolver** (usually your router or ISP), which finds the answer, often from a cache, or asks authoritative name servers.

Common records:

- **A** - name to IPv4 address.
- **AAAA** - name to IPv6 address.
- **CNAME** - alias to another name.
- **MX** - mail servers.
- **TXT** - free text (verification, email policy).

**TTL** (time to live) says how long an answer can be cached. DNS usually uses port 53.

DNS problems often look like "site not found" while the internet itself works.

## 2. Simple analogy

DNS is the **phone book**: look up a name, get a number.

## 3. Key terms

- **Resolver** - Server that answers DNS questions.
- **A record** - Name to IPv4.
- **CNAME** - Alias.
- **TTL** - Cache lifetime.
- **Domain** - A registered name like `example.com`.

## 4. Examples and commands

Windows PowerShell **or** Linux:

```powershell
nslookup example.com
```

Windows PowerShell only:

```powershell
Resolve-DnsName example.com -Type A
```

Linux only:

```bash
dig example.com +short      # may need: sudo apt install dnsutils
```

Expected: a line `Address: 93.184.216.34` or similar (real values change over time). A failure such as `Non-existent domain` means the name does not resolve. Requires internet.

## 5. Step-by-step instructions

1. Run `nslookup example.com`.
2. Note the DNS server it used and the address returned.
3. Try a nonsense name `nslookup this-name-does-not-exist-12345.com` and read the error.
4. Compare with `Resolve-DnsName` (Windows).

## 6. Hands-on exercise

Find the IPv4 address for `example.com` and explain what DNS did when your browser loaded it.

## 7. Worked solution

`nslookup example.com` prints the IP. The browser asked the resolver for the A record of the name, received an IP address, then connected to that IP. If you have no internet, explain the process in words instead; the commands will fail with a timeout.

## 8. Common mistakes

1. **Blaming the website when DNS is down** - Test with an IP address.
2. **Expecting results offline** - DNS needs a resolver.
3. **Assuming addresses never change** - TTL and load balancing change them.

## 9. Revision notes

- DNS maps names to records.
- A, AAAA, CNAME, MX, TXT.
- `nslookup`, `Resolve-DnsName`.

## 10. Practical task for the project

Imagine the portal at `portal.example.com`. Write which DNS record type would point it to a server's IPv4 address.

## 11. Progress checklist

- [ ] I can explain **Week 5, Lesson 4: DNS** in my own words.
- [ ] I ran the example commands and compared my output with the expected output.
- [ ] I completed the hands-on exercise before reading the solution.
- [ ] I completed the practical task for the project.
- [ ] I noted anything confusing in [`docs/progress-tracker.md`](../../docs/progress-tracker.md).

---
Previous: [CIDR](03-cidr.md) | Next: [Ports](05-ports.md) | [Topic index](../../docs/topic-index.md)

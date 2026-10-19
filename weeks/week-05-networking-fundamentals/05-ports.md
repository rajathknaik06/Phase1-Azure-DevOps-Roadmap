# Week 5, Lesson 5: Ports

> **Week 5 - Networking Fundamentals** - Topic 5 of 7 | Shell used: Windows PowerShell **and/or** Linux shell, as labelled on each command

An IP address finds the computer; a port finds the service on it.

## 1. Explanation from scratch

A **port** is a number (0-65535) that identifies a specific service on a device. Together, `IP:port` identifies a connection endpoint, e.g. `93.184.216.34:443`.

Common defaults:

| Port | Service |
|---|---|
| 22 | SSH |
| 80 | HTTP |
| 443 | HTTPS |
| 53 | DNS |
| 3389 | Remote Desktop (RDP) |

A service **listens** on a port. If nothing listens, connections are refused. If a firewall blocks it, the connection may time out.

Local development often uses ports like `3000` or `8000`.

## 2. Simple analogy

The IP address is a **building address**, the port is the **apartment number**.

## 3. Key terms

- **Port** - Number identifying a service.
- **Listening** - A service waiting for connections.
- **Socket** - IP + port connection endpoint.
- **Well-known ports** - 0-1023.

## 4. Examples and commands

Windows PowerShell:

```powershell
Test-NetConnection example.com -Port 443
Test-NetConnection example.com -Port 22
```

Key lines: `TcpTestSucceeded : True` (or `False`). Port 22 on a web server often shows `False`.

Linux (ports in use locally):

```bash
ss -tuln
```

Requires internet for remote tests. Only test hosts you own or public demo hosts, and do not scan networks you do not control.

## 5. Step-by-step instructions

1. Run `Test-NetConnection example.com -Port 443`.
2. Read `TcpTestSucceeded`.
3. Run it on port 80, then 22.
4. Run `ss -tuln` in Linux and find listening ports.

## 6. Hands-on exercise

Match ports to services: 22, 80, 443. Then explain why `TcpTestSucceeded : False` does not always mean the server is down.

## 7. Worked solution

22 SSH, 80 HTTP, 443 HTTPS. `False` can mean the service is not listening on that port, a firewall blocked it, or your own network blocks it; the server may be up.

## 8. Common mistakes

1. **Thinking ports are physical** - They are logical numbers.
2. **Testing the wrong port** - HTTPS is 443, not 80.
3. **Scanning other people's systems** - Only test what you own or are allowed to test.

## 9. Revision notes

- IP finds the machine, port finds the service.
- 22 SSH, 80 HTTP, 443 HTTPS.
- `Test-NetConnection -Port`.

## 10. Practical task for the project

In the portal README, note that a local server option will use a port such as 8000 (documented in the portal README).

## 11. Progress checklist

- [ ] I can explain **Week 5, Lesson 5: Ports** in my own words.
- [ ] I ran the example commands and compared my output with the expected output.
- [ ] I completed the hands-on exercise before reading the solution.
- [ ] I completed the practical task for the project.
- [ ] I noted anything confusing in [`docs/progress-tracker.md`](../../docs/progress-tracker.md).

---
Previous: [DNS](04-dns.md) | Next: [HTTP/HTTPS](06-http-https.md) | [Topic index](../../docs/topic-index.md)

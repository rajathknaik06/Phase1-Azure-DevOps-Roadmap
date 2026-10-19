# Week 5, Lesson 6: HTTP/HTTPS

> **Week 5 - Networking Fundamentals** - Topic 6 of 7 | Shell used: Windows PowerShell **and/or** Linux shell, as labelled on each command

HTTP is how browsers ask for web pages; HTTPS is the secure version.

## 1. Explanation from scratch

**HTTP** (HyperText Transfer Protocol) is a request/response protocol. The browser sends a **request** (`GET /index.html`) and the server returns a **response** with a **status code**.

Common status codes: `200` OK, `301` moved, `404` not found, `403` forbidden, `500` server error.

**HTTPS** is HTTP wrapped in **TLS** (Transport Layer Security). TLS encrypts data **in transit**, so people on the network cannot read or tamper with it, and uses a **certificate** to prove the server's identity. HTTPS does not guarantee a site is trustworthy, only that the connection is private and the server owns that name.

Default ports: HTTP 80, HTTPS 443.

When you type `https://portal.example.com`, the browser: (1) asks DNS for the IP, (2) opens a TCP connection to port 443, (3) performs the TLS handshake, (4) sends the HTTP request, (5) renders the response.

## 2. Simple analogy

HTTP is a **postcard** (anyone can read it); HTTPS is a **sealed envelope with an ID check**.

## 3. Key terms

- **Request/response** - Browser asks, server answers.
- **Status code** - Number summarising the result.
- **TLS** - Encryption protocol.
- **Certificate** - Proof of server identity.
- **URL** - Full web address.

## 4. Examples and commands

Windows PowerShell:

```powershell
Invoke-WebRequest https://example.com -Method Head -UseBasicParsing | Select-Object StatusCode
```

Linux:

```bash
curl -I https://example.com
```

Expected: `HTTP/2 200` or `StatusCode 200`. Requires internet. Opening your local portal with `file://...index.html` does **not** use HTTP at all.

## 5. Step-by-step instructions

1. Run one of the commands above.
2. Read the status code.
3. In your browser, open DevTools (F12) > Network and reload a page to see requests.
4. Click the padlock next to the address to view the certificate.

## 6. Hands-on exercise

Explain what happens, in order, when a browser opens `https://example.com`, naming DNS, IP, port and TLS.

## 7. Worked solution

DNS resolves the name to an IP; the browser connects to that IP on port 443; the TLS handshake verifies the certificate and sets up encryption; the browser sends an HTTP request; the server replies with a status code and content.

## 8. Common mistakes

1. **Believing HTTPS means safe** - It means encrypted in transit and authenticated host.
2. **Using HTTP for logins** - Credentials would travel unencrypted.
3. **Mixing `file://` with HTTP** - `file://` loads from disk.

## 9. Revision notes

- HTTP request/response; HTTPS = HTTP + TLS.
- 80 vs 443.
- 200, 404, 500.

## 10. Practical task for the project

Open the portal locally and use F12 > Network to see that it loads `styles.css` and `app.js` (as file requests).

## 11. Progress checklist

- [ ] I can explain **Week 5, Lesson 6: HTTP/HTTPS** in my own words.
- [ ] I ran the example commands and compared my output with the expected output.
- [ ] I completed the hands-on exercise before reading the solution.
- [ ] I completed the practical task for the project.
- [ ] I noted anything confusing in [`docs/progress-tracker.md`](../../docs/progress-tracker.md).

---
Previous: [Ports](05-ports.md) | Next: [Firewalls](07-firewalls.md) | [Topic index](../../docs/topic-index.md)

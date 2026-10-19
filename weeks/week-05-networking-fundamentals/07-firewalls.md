# Week 5, Lesson 7: Firewalls

> **Week 5 - Networking Fundamentals** - Topic 7 of 7 | Shell used: Windows PowerShell **and/or** Linux shell, as labelled on each command

Firewalls decide which traffic is allowed.

## 1. Explanation from scratch

A **firewall** filters network traffic using **rules**: allow or deny based on source/destination address, port and protocol. Rules are processed in order; many firewalls **deny by default** and allow only what is listed.

Types: host firewall (Windows Defender Firewall, Linux `ufw`/`iptables`) and network firewall (routers, cloud security groups and network security groups).

Example rule set for a web server: allow TCP 443 from anywhere; allow TCP 22 only from the admin's address; deny everything else.

**Inbound** rules control traffic coming in; **outbound** rules control traffic leaving.

> **Safety:** Do not disable your firewall to 'make something work'. Add a narrow rule or ask the administrator instead.

## 2. Simple analogy

A firewall is a **security guard with a guest list**: only listed people (traffic) may enter, through listed doors (ports).

## 3. Key terms

- **Rule** - Allow/deny statement.
- **Inbound/outbound** - Direction of traffic.
- **Default deny** - Block unless allowed.
- **Allow list** - Permitted sources.

## 4. Examples and commands

Inspect only (read-only) commands:

Windows PowerShell:

```powershell
Get-NetFirewallProfile | Select-Object Name, Enabled
```

Linux (Ubuntu with ufw installed):

```bash
sudo ufw status
```

Reading `Enabled : True` confirms the firewall is on. If a connection to port 443 fails while the server is up, a rule may be blocking it. These commands view state; they do not change it.

## 5. Step-by-step instructions

1. Run the read-only command for your OS.
2. Write down whether the firewall is enabled.
3. Design on paper a rule table for a web server (allow 443, restrict 22, deny others).
4. Explain what default deny means.

## 6. Hands-on exercise

Write a three-rule policy for a server running SSH and HTTPS only.

## 7. Worked solution

1. Allow TCP 443 from anywhere. 2. Allow TCP 22 from the administrator's IP only. 3. Deny all other inbound traffic. This follows least privilege: open only what is needed.

## 8. Common mistakes

1. **Turning the firewall off** - Add a specific rule instead.
2. **Opening 0.0.0.0/0 for SSH** - Restrict by source.
3. **Forgetting both layers** - Host and network firewalls can both block.

## 9. Revision notes

- Firewalls allow/deny by rules.
- Default deny + least privilege.
- Never disable it to troubleshoot.

## 10. Practical task for the project

Describe in your notes which ports a deployed portal would need open (443 for visitors) and which should stay closed.

## 11. Progress checklist

- [ ] I can explain **Week 5, Lesson 7: Firewalls** in my own words.
- [ ] I ran the example commands and compared my output with the expected output.
- [ ] I completed the hands-on exercise before reading the solution.
- [ ] I completed the practical task for the project.
- [ ] I noted anything confusing in [`docs/progress-tracker.md`](../../docs/progress-tracker.md).

---
Previous: [HTTP/HTTPS](06-http-https.md) | Next: [Week 6: Variables](../week-06-powershell-fundamentals/01-variables.md) | [Topic index](../../docs/topic-index.md)

# Week 5, Lesson 3: CIDR

> **Week 5 - Networking Fundamentals** - Topic 3 of 7 | Shell used: Windows PowerShell **and/or** Linux shell, as labelled on each command

CIDR is the short way to write an address plus its mask.

## 1. Explanation from scratch

**CIDR** (Classless Inter-Domain Routing) writes the network size as a **prefix length**: `192.168.1.0/24`. The number after `/` is how many leading bits are the network. `/24` = `255.255.255.0`.

Quick table:

| CIDR | Mask | Host bits | Usable hosts |
|---|---|---|---|
| /8 | 255.0.0.0 | 24 | 16,777,214 |
| /16 | 255.255.0.0 | 16 | 65,534 |
| /24 | 255.255.255.0 | 8 | 254 |
| /25 | 255.255.255.128 | 7 | 126 |
| /26 | 255.255.255.192 | 6 | 62 |
| /30 | 255.255.255.252 | 2 | 2 |

`192.168.1.0/24` covers `192.168.1.0` to `192.168.1.255`. Splitting a `/24` into two `/25` networks gives `192.168.1.0/25` (0-127) and `192.168.1.128/25` (128-255).

Cloud networks (such as Azure virtual networks) are defined with CIDR ranges, which is why this matters for your Azure future.

## 2. Simple analogy

CIDR is like saying **'the first 24 digits of the 32-digit code are the street'**. Fewer digits for the street means a bigger neighbourhood.

## 3. Key terms

- **Prefix length** - Number after `/`.
- **CIDR block** - An address range in CIDR form.
- **Subnetting** - Splitting a network into smaller ones.

## 4. Examples and commands

Calculate with PowerShell (works in 5.1 and 7):

```powershell
$prefix = 24
$hostBits = 32 - $prefix
[math]::Pow(2, $hostBits) - 2      # 254
```

Try `$prefix = 26`: result 62.

Linux shows CIDR directly in `ip addr` (`inet 192.168.1.25/24`).

## 5. Step-by-step instructions

1. Pick `/24`, subtract from 32 to get host bits (8).
2. Compute 2^8 = 256 addresses, minus 2 = 254 usable.
3. Repeat for `/26` and `/30`.
4. Write the address range for `10.0.0.0/24` and `10.0.0.0/25`.

## 6. Hands-on exercise

How many usable hosts does `10.0.5.0/26` give, and what is its address range?

## 7. Worked solution

`/26` -> 6 host bits -> 64 addresses, 62 usable. Range `10.0.5.0` to `10.0.5.63` (network `.0`, broadcast `.63`).

## 8. Common mistakes

1. **Treating /24 as 24 hosts** - It is 24 network bits.
2. **Overlapping blocks** - `10.0.0.0/24` and `10.0.0.0/25` overlap.
3. **Forgetting reserved addresses** - Cloud providers may reserve extra addresses.

## 9. Revision notes

- `/n` = n network bits.
- Hosts = 2^(32-n) - 2.
- `/24` = 255.255.255.0.

## 10. Practical task for the project

Choose a fictional private CIDR block for a future portal network, for example `10.10.0.0/24`, and record it in your notes (no cloud resource is being created).

## 11. Progress checklist

- [ ] I can explain **Week 5, Lesson 3: CIDR** in my own words.
- [ ] I ran the example commands and compared my output with the expected output.
- [ ] I completed the hands-on exercise before reading the solution.
- [ ] I completed the practical task for the project.
- [ ] I noted anything confusing in [`docs/progress-tracker.md`](../../docs/progress-tracker.md).

---
Previous: [Subnet masks](02-subnet-masks.md) | Next: [DNS](04-dns.md) | [Topic index](../../docs/topic-index.md)

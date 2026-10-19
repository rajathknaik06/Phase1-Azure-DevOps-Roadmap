# Week 5, Lesson 2: Subnet masks

> **Week 5 - Networking Fundamentals** - Topic 2 of 7 | Shell used: Windows PowerShell **and/or** Linux shell, as labelled on each command

The subnet mask tells you where the network part ends.

## 1. Explanation from scratch

A **subnet mask** is a 32-bit pattern written like an IP address. Where the mask has `1` bits, the address bits belong to the **network**; where it has `0` bits, they belong to the **host**.

`255.255.255.0` = `11111111.11111111.11111111.00000000`: the first 24 bits are network, the last 8 are host. So `192.168.1.25` with that mask lives in network `192.168.1.0`, and hosts can be `192.168.1.1` to `192.168.1.254`.

- **Network address** = all host bits 0 (`192.168.1.0`), identifies the network.
- **Broadcast address** = all host bits 1 (`192.168.1.255`), reaches every host.
- **Usable hosts** = 2^(host bits) - 2.

Two devices communicate directly only when they are in the same subnet; otherwise traffic goes through a **default gateway** (router).

## 2. Simple analogy

A mask is a **cut-out stencil**: put it over the address; the visible part is the network, the hidden part is the house number.

## 3. Key terms

- **Subnet mask** - Marks network vs host bits.
- **Network address** - First address of a subnet.
- **Broadcast address** - Last address of a subnet.
- **Default gateway** - Router leading to other networks.

## 4. Examples and commands

| Mask | Host bits | Usable hosts |
|---|---|---|
| 255.255.255.0 | 8 | 254 |
| 255.255.255.128 | 7 | 126 |
| 255.255.0.0 | 16 | 65,534 |

`ipconfig` shows `Subnet Mask . . . : 255.255.255.0`. In Linux, `ip addr` shows it as `/24`.

Calculate the network and broadcast address with PowerShell (bitwise AND / OR):

```powershell
$ip   = [System.Net.IPAddress]::Parse("192.168.1.25").GetAddressBytes()
$mask = [System.Net.IPAddress]::Parse("255.255.255.0").GetAddressBytes()
$network   = for ($i = 0; $i -lt 4; $i++) { $ip[$i] -band $mask[$i] }
$broadcast = for ($i = 0; $i -lt 4; $i++) { $ip[$i] -bor (255 - $mask[$i]) }
"Network:   " + ($network -join ".")
"Broadcast: " + ($broadcast -join ".")
```

Expected output:

```text
Network:   192.168.1.0
Broadcast: 192.168.1.255
```

Check two hosts: `192.168.1.25` and `192.168.1.200` with mask `255.255.255.0` are in the same subnet (both start `192.168.1`). `192.168.2.5` is not.

## 5. Step-by-step instructions

1. Run `ipconfig` / `ip addr` and note your mask.
2. Write the mask in binary and count the 1s.
3. Compute network and broadcast addresses for your IP.
4. Compute usable hosts.

## 6. Hands-on exercise

For `192.168.10.70` with mask `255.255.255.0`: give network address, broadcast address and number of usable hosts. Are `192.168.10.70` and `192.168.11.70` in the same subnet?

## 7. Worked solution

Network `192.168.10.0`, broadcast `192.168.10.255`, usable hosts 254. No: third octet differs (10 vs 11), so they are in different subnets.

## 8. Common mistakes

1. **Forgetting minus 2** - Network and broadcast are not usable.
2. **Mixing mask with IP** - The mask is not a device address.
3. **Comparing only the last octet** - Compare the network part.

## 9. Revision notes

- 1 bits = network, 0 bits = host.
- `255.255.255.0` = 254 hosts.
- Different subnet needs a router.

## 10. Practical task for the project

Write one sentence on why the portal's future web server and a database server might sit in different subnets.

## 11. Progress checklist

- [ ] I can explain **Week 5, Lesson 2: Subnet masks** in my own words.
- [ ] I ran the example commands and compared my output with the expected output.
- [ ] I completed the hands-on exercise before reading the solution.
- [ ] I completed the practical task for the project.
- [ ] I noted anything confusing in [`docs/progress-tracker.md`](../../docs/progress-tracker.md).

---
Previous: [IPv4](01-ipv4.md) | Next: [CIDR](03-cidr.md) | [Topic index](../../docs/topic-index.md)

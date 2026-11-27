---
title: "My UniFi Home Network"
description: "How I split my home network into six VLANs, set up one-way firewall rules and scheduled access, and fixed what broke along the way."
date: "Nov 27 2026"
---

## Overview

I run a UniFi Cloud Gateway Max with one U6 Pro access point. I split the network into six separate networks so that guests, smart devices, game consoles, the printer and the camera can't wander over to my main devices.

## Network layout

- **Default:** my laptop, phones and everyday devices
- **Guest:** for visitors, and nothing else
- **IoT:** my TV and the smart bulbs in my house
- **Gaming:** the game consoles
- **Printer:** the printer, on its own network
- **Security:** the camera, on its own so it stays isolated

## IP addressing

Each VLAN got its own IP range when I created it. That keeps things tidy and makes the firewall rules much easier to write.

## Firewall design

My main network can reach into the IoT, Gaming, Printer and Security networks, but those networks can only answer. They can't start a conversation with my main devices. It's a one-way, stateful rule.

## Access scheduling

I also set up schedule-based firewall policies for the household devices. Each device has its own time window for sites like YouTube, Netflix and payment websites, and downtime is enforced by the firewall. I added a separate allow rule for weekends. My own laptop doesn't have a schedule.

## What broke and how I fixed it

1. **The printer went quiet.** Once I moved the printer onto its own network, my devices couldn't reach it because the firewall was blocking it. I fixed it by allowing the printer's port from my main network.
2. **I got the downtime backwards.** I typed the downtime start time into the end-time field by mistake, so the schedule ran at the wrong hours. I caught it and swapped the times.

## What I learned

Isolating devices is the easy part. Keeping them working takes careful rules and a lot of testing. Now I double-check every rule from both sides.

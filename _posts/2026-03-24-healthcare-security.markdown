---
layout: post
title:  "The Hidden Chain of Custody Behind a Patient Care Report"
date:   2026-03-24 9:58:17 -0800
categories: systems
---

When an EMT finishes a call, they write a PCR on their tablet. Every single time. However trivial or complex the call was, a PCR gets written. It’s legal defense for the EMT and their ambulance service, and more importantly, it creates continuity of care for the patient.

Meaning: that report doesn’t stay on the tablet.

It gets uploaded to the service’s servers. From there, the receiving hospital can pull it before the patient even arrives. Later, billing touches it. QA reviews it. It gets pooled with millions of others for statistical analysis. It might get requested again weeks or months down the line.

That single report moves through multiple systems and multiple hands.

So here’s the real question:

Who is actually allowed to see it?

{% include figure.html src="/assets/images/emt.jpeg" alt="An EMT inputs a Patient Care Report (PCR) into a tablet" caption="An EMT inputs a Patient Care Report (PCR) into a tablet." %}

## The Problem

A PCR contains* everything.*

Patient name, address, medical history, medications. Sometimes even insurance information. WAY more than just what happened and what the EMT did about it.

That information needs to be available to the right people:
- The receiving nurse
- The doctor
- The billing department
- The service reviewing the call

This ensures that work doesn’t get repeated and that important information is visible to the people who need it most.

But it also needs to be completely invisible to everyone else.

Not “hard to access.”
Not “kind of protected.”
Completely off-limits.

Because if that boundary breaks, the consequences aren’t theoretical.

Yes, there are lawsuits, and yes, there are fines. HIPAA is a real thing.

But more importantly:
- Someone’s identity can be stolen
- Someone’s private medical history can be exposed
- **Someone can be directly harmed based on that information!**

Healthcare data is not like a password you can reset or a credit card you can cancel.

Once it’s out, it’s out.

Worse, that data doesn’t live in one place. It flows between systems constantly. Every time it moves, a system has to make a decision:

“Do I trust the computer asking for this information right now?”

It makes that decision with every single request that goes over the network, and it has to be correct 100% of the time.

## The Solution

Healthcare doesn’t solve this with convenience. It solves it by being restrictive.

The general idea is pretty simple: give people access to exactly what they need to do their job, and nothing beyond that.

So even within the same system, not everyone sees the same thing. An EMT can create and submit a PCR, but they generally don’t have access to everything that happens after that.

A nurse or physician at the hospital can read it and act on it, but they’re not digging through unrelated reports from other calls. Billing might only see the portions relevant to coding and reimbursement, not the full clinical narrative.

The important part is that access is scoped. It’s not “you’re in, so you can see everything.” It’s “you’re in, and here’s the exact slice of data you’re allowed to touch.”

And that check doesn’t happen once when you log in. It happens every time data is requested.

When a system asks for a PCR, it isn’t just handed over because the request came from a known source. The system still has to answer a few basic questions: who is making this request, what are they asking for, and does their role actually allow them to see this specific record?

If any of those don’t line up, the request gets denied. That’s what “least privilege” looks like in practice. It’s not a buzzword, it’s just a very strict rule about access.

Other types of software don’t always operate this way. In a lot of consumer apps or even internal business tools, access control is looser because the stakes are lower. If something leaks, it’s a problem, but it’s usually contained to money, metrics, or internal documents.

Healthcare data is different in a way that’s hard to overstate. A PCR can include identifying information, medical history, medications, and a detailed account of what happened during an emergency. That’s not something a person can change or replace later.

If that information gets exposed, there’s no real way to undo it. You can’t issue someone a new medical history. You can’t make that data “un-known.”

## But It Works… Usually

The weak link generally isn’t the software. When a breach happens, it’s usually not some genius hacker “breaking in” through pure technical skill.

It’s one person with high level credentials getting duped into divulging them to a threat actor.

Phishing emails, stolen credentials, someone reusing a password seen in a different data breach. Most often, someone clicking something they shouldn’t or trusting a request that looked legitimate.

For example:
- Email-based breaches (phishing, compromised inboxes, etc.) increased by 18% in 2024
- Attacks tied to third parties exploded, with some sectors seeing 2,000% increases
- Total exposed patient records hit 183 million in a single year

These are especially difficult to defend against because once someone has valid access, even if they got it through a phishing email, they don’t look like an attacker anymore. They just look like a normal user.

That’s why “least privilege” isn’t just a nice idea. It’s damage control.

You assume that at some point, someone is going to get tricked. Credentials are going to leak. A bad actor is going to get inside.

The goal is to make sure that when that happens, they don’t get everything.

The system has to strike a balance that’s a little uncomfortable: the data needs to move freely enough to be useful, but not so freely that it becomes accessible to the wrong people.

That’s what authentication and access control are actually doing. Not just letting someone into a system, but constantly deciding whether each individual request for data should be allowed.

In most applications, getting that decision wrong is a bug.

In healthcare, it’s a breach of trust with consequences that don’t go away.
---
layout: post
title:  "Debugging the Human Body: Similarities Between Software and Medicine"
date:   2026-03-04 19:58:17 -0800
categories: systems
---
Here's something nobody told me when I started learning medicine: the human body is basically software.

I don't mean that in the reductive, "we're just biological machines" way that gets thrown around to sound clever at dinner parties. I mean it practically. Mechanically. I mean it in the way that actually helps when you're standing over a patient and trying to figure out what's wrong with them.

The human body is a system. It takes inputs, runs them through a long chain of interdependent processes, and produces outputs. When something goes wrong, there's a reason — a traceable, logical reason — and if you can identify where in the chain things are breaking down, you can usually figure out what caused it and what to do about it.

That is exactly what debugging is.

I spent years writing code and fixing it when it broke. The specific flavor of broken was always different, but the methodology was always the same: observe the behavior, form a hypothesis about the cause, test it, narrow down the source of the failure. Rule things out. Get specific.

I remember sitting at my desk one afternoon working on a client's e-commerce site. A contact form that was supposed to trigger a confirmation email wasn't doing it. The form looked right. The backend logic looked right. I spent the better part of two hours checking everything I expected to be the problem before I found it: a single conditional that was evaluating to false because a field name had been renamed during a redesign and never updated in the handler. The whole system was working perfectly except for one quiet mismatch that was misdirecting everything downstream of it.

That's a pulmonary embolism.

Not literally — but structurally. A clot that reroutes flow. The heart is pumping, the lungs are present, the blood is available, but something upstream is preventing delivery. The rest of the system starts compensating: heart rate climbs, breathing gets labored, oxygen saturation drops. The body is telling you exactly where to look, if you know how to read the output.

The big caveat: the human body is not a computer. A computer executes in perfect, deterministic sequence — the same inputs produce the same outputs, every time, without exception.

The human body isn’t so precise. But it still runs predictably, within ranges, trending toward expected outputs given expected inputs. It just has enormous individual variation layered on top.

It's less bitmap, more impressionist painting. The shape is there. The precision isn't always.

That gap is actually what makes medicine interesting rather than tedious. You're never working with perfectly controlled inputs. Age, genetics, medications, sleep, stress, what someone ate this week — these variables shift the baseline constantly. So you're always working with clinical pictures and probabilities rather than deterministic outputs. You form the best hypothesis the evidence supports and you act on it.

What EMT training gave me that I didn't fully expect was a framework for exactly this. They don't just teach you protocols — they teach you to read a patient. To look at the whole picture and make an educated assessment of what's happening.

Here's a simple example. You arrive on scene and find a patient with flushed skin, hives spreading up their arms, audible wheezing, and shortness of breath. They mention they were just stung by a bee. You don't announce a diagnosis of anaphylaxis — that's not your role as an EMT, and you don't have the authority to make that call unilaterally. But you absolutely form the hypothesis, contact medical control, and make the case for administering epinephrine. You're reading the output, tracing it back through the system, and proposing a fix.

That's debugging. You're not certain. You're working from evidence toward the best available explanation, under time pressure, with incomplete information.

The stakes are just a bit higher than a broken contact form.

I've been a developer for over a decade, and I've spent most of that time thinking programmatically — breaking complex systems into components, identifying where inputs and outputs don't match, fixing the chain. It turns out that's not a skill that stays in the terminal. It follows you into medicine, and it's more useful there than I ever expected it to be.

The body is more complicated than any codebase I've ever touched. But the thinking — the disciplined, systematic, hypothesis-driven thinking — is the same. And that's genuinely exciting to me.

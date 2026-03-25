---
layout: post
title:  "Building a Flashcards App I Actually Enjoy Using"
date:   2026-03-14 19:58:17 -0800
categories: systems
---

[Click to View the Live Prototype](https://wdv463-crud-4653283955d9.herokuapp.com/){:target="_blank" rel="noopener noreferrer"}

## Introduction

I built this flashcards application as part of a full-stack school project. What started as an assignment quickly turned into something much more interesting: a study tool I genuinely enjoy using.

The inspiration came from a tool I already rely on heavily: *Anki.*

Anki is one of the most powerful study systems ever built, especially for students in the medicine arena. Its spaced repetition algorithm is incredibly effective, and it has essentially every feature a serious learner could want. 

The problem is that it looks… rough. The interface feels dated, the UX is clunky, and the web version especially is not pleasant to use. The mobile app is better (and costs $25), but overall the experience feels more like a utility than a modern study tool.

So I decided to build something simpler:

A flashcard app with the core learning loop of Anki, but with a cleaner interface and a faster workflow.

{% include figure.html src="/assets/images/screenshot.png" alt="Screenshot from the prototype" caption="Back view of a flashcard on the Study screen." %}

## The Core Idea: A Fast Study Loop

The central design principle of the app is speed of interaction.

Studying should feel effortless. You shouldn’t have to think about menus, screens, or configuration. You should just move through cards quickly and focus on recalling information.

**The learning loop looks like this:**
1. Open a deck
2. Reveal the answer
3. Rate your recall
4. Move to the next card

**When reviewing a card, users rate their recall using four options:**
- Again
- Hard
- Good
- Easy

Each rating schedules the next review by updating the time variables attached to each database entry: lastShown and showNext. The system is intentionally simple, but it creates a lightweight spaced repetition workflow that keeps sessions focused and efficient.

During a study session, the app only shows cards that are currently due, so users can move quickly through material without distraction. 

## Interface Design: Card-First

The UI revolves around one idea: flashcards are the main event.

Instead of surrounding the learning process with heavy menus, lists, and settings, the interface focuses almost entirely on the card interaction itself.

The application has three primary views:

### Deck Grid

**The homepage shows a grid of decks where users can:**
- Create new decks
- Rename decks
- Delete decks
- Open decks for study

Contextual menus allow quick deck management without navigating away from the screen.

{% include figure.html src="/assets/images/decks.jpg" alt="Screenshot from the design" caption="Decks grid from the original design." %}

### Study Session View

When a deck is opened, the interface switches to a single-card study view.

**Users:**
- Click the card to reveal the back
- Rate their recall
- Move immediately to the next card

The system also tracks how many cards remain in the session, creating a sense of progress while studying.

### View All Mode

A second screen allows users to manage their entire card collection.

This view shows every card in the deck, regardless of whether it is due for review.

**Here, users can:**
- Edit cards
- Delete cards
- Add new cards
- Flip cards to see both sides

Unlike the study view, this mode focuses on content management rather than learning.

{% include figure.html src="/assets/images/screenshot2.png" alt="Screenshot from the prototype" caption="All cards view from the prototype." %}

## Creating and Managing Cards

Card creation is designed to be fast and keyboard-friendly.

**Here, users can:**
- Enter the front and back of a card
- Press Command + Enter (Mac) or Control + Enter (Windows) to save instantly
- Keep typing without reaching for the mouse

This small workflow improvement makes it easy to create large batches of cards quickly.

Cards can also be edited or deleted directly from the interface, either within the study environment or from the full card management view.

{% include figure.html src="/assets/images/flashcard-editing.jpg" alt="Screenshot from the design" caption="Editing view for a flashcard from the original design." %}

## Study Session Logic

Each flashcard stores simple scheduling data: lastShown and showNext.

When a user rates recall, the system updates when the card should appear again.

**For example:**
- Again → very short interval
- Hard → short interval
- Good → moderate interval
- Easy → longer interval

This allows the system to space reviews automatically.

In the future, the intervals could become adaptive, such as increasing dramatically once a card has been answered correctly many times. This is something Anki does very well, but for this project I kept the algorithm intentionally simple.

## Technical Architecture

The application is a full-stack system with a modern JavaScript stack.

### Frontend
- React
- React Router
- styled-components

**The frontend is responsible for:**
- rendering the interface
- managing application state
- handling study session logic
- providing interactive UI elements like card flips and inline editing.

### Backend

**The backend is built with:**
- Node.js
- Express

It exposes a versioned REST API:

- /api/v1/decks
- /api/v1/cards

These endpoints handle CRUD operations for decks and cards.

### Database

**The data layer uses:**
- MongoDB
- Mongoose

Two main models power the application:

**Deck**
- name
- metadata

**Card**
- front
- back
- deck reference
- scheduling fields

This simple schema supports the entire study workflow.

## Small UX Details

Several small features help the app feel fast and pleasant to use:

- keyboard shortcuts for card creation
- contextual menus for decks and cards
- inline editing
- responsive grid layouts
- card flip animation
- light and dark mode support

None of these are complicated individually, but together they make the application feel smooth and modern.

## Looking Ahead

There are several features that could expand the project in the future:
- smarter spaced repetition intervals
- adaptive scheduling based on mastery
- performance analytics
- tagging and categorization
- mobile-optimized UI

The underlying architecture already supports these kinds of improvements.

## Reflection

One of the most satisfying parts of this project was realizing how quickly my development abilities have grown.

Six months ago, I couldn’t have built something like this. The combination of modern frontend tools, backend APIs, and database modeling felt far beyond my reach.

Now, building a full-stack application from the ground up feels almost natural.

What began as a class assignment turned into something much more valuable: a real application solving a problem I personally care about.

And most importantly, it’s a study tool I actually enjoy using.

## Overview Video

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/a2acee85981441e58f755cc2b58799e3" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
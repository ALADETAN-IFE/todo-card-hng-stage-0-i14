# 🚀 Frontend Wizards - Stage 0 Task

## Build a Testable Todo Item Card

## Concept

Build a clean, modern Todo/Task Card component (or a small page containing one card).

## Required Content and Exact `data-testid` Values

⚠️ These must match exactly for automated tests.

- Root card container -> `data-testid="test-todo-card"`
- Task title (e.g., `h2` or `h3`) -> `data-testid="test-todo-title"`
- Task description/notes (`p` or `div`) -> `data-testid="test-todo-description"`
- Priority badge/label -> `data-testid="test-todo-priority"`
- Must show one of: Low, Medium, High (or emoji/icons representing them)
- Due date/deadline (formatted nicely, e.g. "Due Feb 18, 2026") -> `data-testid="test-todo-due-date"`
- Current time remaining hint -> `data-testid="test-todo-time-remaining"`

Example values for time remaining:

- "Due in 3 days"
- "Due tomorrow"
- "Overdue by 2 hours"
- "Due now!"

Updates roughly every 30-60 seconds (or at least shows correct initial value).

- Status indicator (e.g., "Pending" / "In Progress" / "Done") -> `data-testid="test-todo-status"`
- Checkbox or toggle for completion -> `data-testid="test-todo-complete-toggle"`
- Must be a real `<input type="checkbox">` or properly labeled button with `role="checkbox"`
- Tags/categories list (chips/pills) -> `data-testid="test-todo-tags"`

Each tag can optionally have:

- `data-testid="test-todo-tag-work"`
- `data-testid="test-todo-tag-urgent"`

- "Edit" button/icon -> `data-testid="test-todo-edit-button"`
- "Delete" button/icon -> `data-testid="test-todo-delete-button"`

## HTML and Semantics Recommendations

Use proper semantic HTML:

- Card root -> `<article>` or `<section role="region">`
- Title -> `<h2>` or `<h3>`
- Description -> `<p>`
- Priority and Status -> `<span>` or `<strong>`
- Due date and time remaining -> `<time>` element (with `datetime` attribute if possible)
- Checkbox -> real `<input type="checkbox">` + `<label>`
- Tags -> `<ul role="list">` of `<li>` OR `<div role="list">` with chips
- Buttons -> `<button>` (not `<div>`)

Add `aria-label` where visual-only or icon-only elements are used.

## Accessibility Requirements

- Checkbox must have:
- A visible label OR `aria-label` / `aria-labelledby`
- All buttons must have accessible names (visible text or `aria-label`)
- Priority/status badges should have `aria-label` if they are purely visual
- Good color contrast (WCAG AA compliant)
- Focus styles must be visible
- Fully keyboard navigable: `Tab -> checkbox -> edit -> delete`
- If time-remaining updates live:
- Consider wrapping it in `aria-live="polite"`
- Or skip live updates for simplicity in Stage 0

## Responsiveness Requirements

Mobile:

- Full-width card
- Stacked vertical layout

Tablet/Desktop:

- Comfortable max-width (420-500px recommended)
- Good padding and spacing

General:

- Tags should wrap nicely (`flex-wrap`)
- No horizontal overflow at any screen width
- Should look correct from 320px to 1200px

## Behavior and Implementation Guidance

- Hard-code 1-3 example tags (e.g., work, urgent, design)
- Hard-code one initial priority, status, and due date

Time Remaining:

- Calculate from a fixed due date (e.g., March 1, 2026 18:00 UTC) OR `Date.now() + offset`
- Show friendly text:
- "Due in 3 days"
- "Due tomorrow"
- "Overdue by 2 hours"
- "Due now!"
- Optional: refresh every ~60 seconds with `setInterval` (not required for Stage 0)

Checkbox Toggle Behavior:

- When toggled, visually update the card:
- Strike-through title
- Change status to "Done"

Edit and Delete Buttons:

- Can be dummy actions:
- `console.log("edit clicked")`
- `alert("Delete clicked")`

## Acceptance Criteria (Grading / Auto-Tests)

- All required `data-testid` elements exist and are visible
- Checkbox is:
- Focusable
- Toggleable via keyboard
- Screen-reader accessible
- Time remaining shows reasonable value (+/- a few minutes tolerance)
- Edit and Delete buttons are:
- Present
- Keyboard-focusable
- Semantic HTML used correctly:
- `article/section`
- `time`
- `label`
- `button`
- `list`
- Responsive layout works properly (320px-1200px)
- No layout shift or horizontal overflow with long text
- Priority and status are clearly displayed

This task keeps the focus on:

- Testability
- Accessibility
- Responsiveness

## Submission

Submit the following:

- ✅ Live URL (Vercel / Netlify / GitHub Pages)
- ✅ GitHub repo

Submission Link:  
https://docs.google.com/forms/d/e/1FAIpQLSd57saqCAZ34jRlAqD7y3gkopz7YZQ46-etzGmj1fZcVjEWwA/viewform?usp=publish-editor

Submission Deadline:  
16th, April 2026

Explainer Video: https://vt.tiktok.com/ZSHxdGkrL/  
Airtable URL: https://airtable.com/appZPpwy4dtvVBWU4/shrMH9P1zv4TPhvns?TK29T%3Agroup=eyJwZWxNNUk4b1dySkxDM09yVCI6W3siY29sdW1uSWQiOiJmbGQ1cGY1bEVwSnJjVGxEUSIsImFzY2VuZGluZyI6dHJ1ZX1dfQ&C3OrT=rec8y3GlWpYNujC8B

Good luck - looking forward to seeing creative implementations! 🚀

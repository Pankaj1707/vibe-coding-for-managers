# Site Architecture

## Product Goal

The site exists to collect email addresses from non-technical managers who want to learn how to build software products with AI. Every page ends in a signup path, and all navigation keeps the visitor close to that conversion.

## Information Architecture

- `/`: Primary acquisition page.
  - Hero with the core promise and email capture.
  - Problem framing for managers who have historically needed engineering access.
  - Why Now section about AI-assisted building.
  - What You'll Learn cards that preview the future course.
  - About the Journey for credibility without overclaiming expertise.
  - Final email CTA.
- `/about`: Trust-building page.
  - Founder story.
  - Why the project exists.
  - Audience fit.
  - Course roadmap placeholder.
  - FAQ.
  - Final email CTA.
- `/api/subscribe`: Subscription endpoint.
  - Validates email.
  - Adds a server timestamp.
  - Sends `timestamp`, `email`, and `source` to Google Apps Script.
  - Apps Script appends the row to Google Sheets.
  - Ready to add Kit later behind the same frontend contract.

## Component Architecture

- `components/site/`: Cross-page layout, header, footer, section shell.
- `components/marketing/`: Conversion and content components, including signup forms and repeated editorial sections.
- `components/data/`: Structured page content that can later feed CMS, blog, or course pages.
- `lib/`: Utilities and future service clients.

## Expansion Path

- Add `/writing` for public journey notes and SEO.
- Add `/course` for a course waitlist or paid product page.
- Replace static copy data with a CMS or content layer when publishing frequency increases.
- Add Kit API calls and source tagging behind the existing subscribe route.
- Keep Google Sheets as the lightweight audit log even after Kit is introduced.

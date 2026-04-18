# Frontend Wizards Todo Card - hng-stage-0(i14)

This project is the HNG Frontend Stage 0 task implementation: a testable, accessible, and responsive Todo Item Card.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4

## Task Coverage

- Required `data-testid` elements are implemented
- Semantic structure: `article`, `h2`, `p`, `time`, `label`, `button`, `ul/li`
- Accessible checkbox toggle with keyboard support
- Priority, status, due date, time remaining, tags, edit/delete actions
- Responsive layout for mobile and desktop

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Live Demo
- Vercel deployment: [Vercel](https://todo-card-hng-stage-0-i14.vercel.app)
- Custom domain: [Portfolio sub-domain](https://www.todo-card.ifecodes.xyz)

## Author
- Name: Fortune Ife Aladetan
- Email: [contact@ifecodes.xyz](mailto:fortuneifealadetan01@gmail.com)
- GitHub: [ALADETAN-IFE](https://github.com/ALADETAN-IFE)
- Portfolio: [ifecodes.xyz](https://www.ifecodes.xyz)

## Notes

- Time remaining text is computed from a fixed due date in `src/utils/todo.ts`.
- Edit and Delete actions are dummy handlers for Stage 0.

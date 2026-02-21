# Task Manager

A Kanban-style task board demonstrating internationalization with General Translation.

**[Live Demo](https://task-manager.generaltranslation.dev)** | **[General Translation Docs](https://generaltranslation.com/docs)**

## About

This example app showcases a task management board with columns for To Do, In Progress, and Done. All task data, labels, and UI strings are fully internationalized using [gt-next](https://generaltranslation.com/docs), demonstrating how to handle complex layouts with dynamic content in multiple languages. The app supports English, Spanish, French, Japanese, and Chinese.

## GT Features Used

- `<T>` — JSX translation with wide wrapping
- `<Var>` — Dynamic values within translated content
- `<Branch>` — Conditional rendering for priority labels
- `<Plural>` — Pluralized task counts
- `<Num>` — Locale-aware number formatting
- `<DateTime>` — Locale-aware date formatting
- `<LocaleSelector>` — Language picker
- `getGT` — Server-side string translations
- `loadTranslations` — Local translation storage

## Getting Started

```bash
git clone https://github.com/gt-examples/task-manager.git
cd task-manager
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Built With

- [Next.js](https://nextjs.org)
- [General Translation](https://generaltranslation.com) (gt-next)
- [Tailwind CSS](https://tailwindcss.com)

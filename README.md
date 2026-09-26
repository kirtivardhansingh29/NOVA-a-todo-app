# NØVA

**Personal Task Operations.**

NØVA is a frontend-only task management system with a minimal, technical,
industrial-control-panel feel — closer to a developer tool or an OS shell
than a typical SaaS dashboard. Everything runs in the browser. There is no
backend, no auth, no API: all data lives in `localStorage`.

## Tech stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS** for styling, with a small custom design-token layer
  (graphite surfaces, off-white ink, one restrained amber "signal" accent)
- **Framer Motion** for micro-interactions (row entry/exit, completion,
  modals, the command palette)
- **Lucide React** for icons
- `localStorage` for persistence — no database, no server

## Running it

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`. It redirects straight to `/today`.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Structure

```
app/                  Routes (App Router)
  today/              Default landing view — today's + overdue tasks
  inbox/               Tasks with no project
  upcoming/           Tasks grouped by Today / Tomorrow / This Week / Later
  completed/          Archived, completed tasks (restorable)
  projects/           Project index + /projects/[slug] detail view
  settings/           Storage info + reset

components/           Reusable UI: AppShell, Sidebar, TopBar, TaskList,
                       TaskRow, TaskComposer, TaskDetails, TaskForm,
                       FilterBar, ProgressIndicator, ProjectList,
                       CommandPalette, EmptyState, StatusIndicator, etc.

hooks/
  useTasks.tsx         Central state: tasks, projects, view/filter/sort,
                       all CRUD actions. Wraps the whole app in a
                       React Context provider (no Redux needed).
  useTaskModals.ts     Small helper for composer/details modal state.

lib/
  storage.ts           The localStorage adapter (see below).
  tasks.ts             Filtering, sorting, date grouping, formatting.
  cn.ts                Tiny classnames helper.

data/
  seed.ts              Realistic demo tasks loaded on first launch.

types/
  task.ts              Task, Project, Priority, Filter/Sort types.
```

## Where the localStorage logic lives

Everything persists through **`lib/storage.ts`**. It exposes a single
`StorageAdapter` interface (`get` / `set` / `remove`) implemented today by
`LocalStorageAdapter`. Every read/write in the app — tasks, projects, the
current filter/sort/search state, and whether demo data has been seeded —
goes through this one module rather than touching `window.localStorage`
directly. To swap in a real backend later, implement the same interface
(e.g. against a REST API or IndexedDB) and export it in place of
`LocalStorageAdapter` — nothing else in the app needs to change.

`hooks/useTasks.tsx` is the only place that reads from and writes to that
adapter; it hydrates state on mount, seeds realistic demo tasks on first
run, and persists on every change.

## Features

- **Today** — the default view: today's and overdue tasks, a thin progress
  bar, filters, sorting, drag-to-reorder.
- **Inbox** — tasks with no project, with a "routed" empty state.
- **Upcoming** — grouped by Today / Tomorrow / This Week / Later.
- **Completed** — archive of finished tasks with restore.
- **Projects** — Personal / College / Projects / Learning, each with a
  compact progress readout and its own filtered task view.
- **Task creation & editing** — title, description, priority
  (low/medium/high/urgent), project, due date + time, tags. Edits persist
  immediately.
- **Complete / restore / delete** — animated checkbox, strike-through,
  lightweight inline delete confirmation (no browser `confirm()` popups).
- **Filtering & sorting** — All / Active / Completed / High Priority /
  Today / Overdue, sortable by due date, priority, newest, oldest.
- **Global search / command palette** — `⌘K` / `Ctrl K` opens a
  command-palette-style search across title, description, project, tags.
- **Responsive** — persistent sidebar on desktop, a slide-in drawer on
  mobile, task rows that collapse gracefully on narrow screens.
- **Everything persists** — refreshing the browser never loses data.

## Notes

- Demo data seeds once, on first load, and is skipped on subsequent visits
  once anything has been saved. **Settings → Reset local data** clears it
  and reseeds.
- This is intentionally a frontend skeleton — no authentication, backend,
  database, payments, or AI integrations, per the brief.

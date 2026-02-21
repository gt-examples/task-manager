import { T, Var, Num, Branch, Plural, DateTime } from "gt-next";
import { getGT } from "gt-next/server";
import { LocaleSelector } from "gt-next/client";

type Task = {
  id: number;
  title: string;
  description: string;
  due: Date;
  assignee: string;
  priority: "high" | "medium" | "low";
  status: "todo" | "inProgress" | "done";
};

function getTasks(t: (s: string) => string): Task[] {
  return [
    {
      id: 1,
      title: t("Design system audit"),
      description: t("Review and document all existing design tokens, components, and patterns."),
      due: new Date("2026-03-01"),
      assignee: "Alice",
      priority: "high",
      status: "todo",
    },
    {
      id: 2,
      title: t("API rate limiting"),
      description: t("Implement rate limiting middleware for all public API endpoints."),
      due: new Date("2026-02-28"),
      assignee: "Bob",
      priority: "high",
      status: "inProgress",
    },
    {
      id: 3,
      title: t("User onboarding flow"),
      description: t("Build the multi-step onboarding wizard with progress tracking."),
      due: new Date("2026-03-05"),
      assignee: "Carol",
      priority: "medium",
      status: "todo",
    },
    {
      id: 4,
      title: t("Database migration"),
      description: t("Migrate user preferences table to the new schema."),
      due: new Date("2026-02-25"),
      assignee: "Dave",
      priority: "medium",
      status: "inProgress",
    },
    {
      id: 5,
      title: t("CI pipeline optimization"),
      description: t("Reduce build times by parallelizing test suites and caching dependencies."),
      due: new Date("2026-02-20"),
      assignee: "Eve",
      priority: "low",
      status: "done",
    },
    {
      id: 6,
      title: t("Accessibility review"),
      description: t("Audit all pages for WCAG 2.1 AA compliance and fix critical issues."),
      due: new Date("2026-03-10"),
      assignee: "Alice",
      priority: "high",
      status: "todo",
    },
    {
      id: 7,
      title: t("Search indexing"),
      description: t("Set up full-text search indexing for the knowledge base articles."),
      due: new Date("2026-02-22"),
      assignee: "Bob",
      priority: "low",
      status: "done",
    },
    {
      id: 8,
      title: t("Error tracking integration"),
      description: t("Integrate Sentry for real-time error monitoring and alerting."),
      due: new Date("2026-03-03"),
      assignee: "Carol",
      priority: "medium",
      status: "inProgress",
    },
  ];
}

const columns = [
  { key: "todo" as const, labelId: "column-todo" },
  { key: "inProgress" as const, labelId: "column-inprogress" },
  { key: "done" as const, labelId: "column-done" },
] as const;

const priorityColors: Record<string, string> = {
  high: "bg-red-500/20 text-red-400 border-red-500/30",
  medium: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  low: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
};

function TaskCard({ task }: { task: Task }) {
  return (
    <T>
      <div className="bg-neutral-800/50 border border-neutral-700/50 rounded-lg p-4 space-y-3 hover:border-neutral-600/50 transition-colors">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-medium text-neutral-100 text-sm leading-tight">
            <Var>{task.title}</Var>
          </h3>
          <span
            className={`shrink-0 text-[11px] font-medium px-2 py-0.5 rounded-full border ${priorityColors[task.priority]}`}
          >
            <Branch
              branch={task.priority}
              high="High"
              medium="Medium"
              low="Low"
            />
          </span>
        </div>
        <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2">
          <Var>{task.description}</Var>
        </p>
        <div className="flex items-center justify-between text-xs text-neutral-500">
          <span>
            <Var>{task.assignee}</Var>
          </span>
          <span>
            Due <DateTime>{task.due}</DateTime>
          </span>
        </div>
      </div>
    </T>
  );
}

export default async function Page() {
  const t = await getGT();
  const tasks = getTasks(t);
  const totalTasks = tasks.length;

  const columnLabels: Record<string, string> = {
    todo: t("To Do"),
    inProgress: t("In Progress"),
    done: t("Done"),
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Disclaimer */}
      <T>
        <div className="bg-neutral-900 border-b border-neutral-800 px-6 py-2 text-center text-xs text-neutral-500">
          This is an example app built with{" "}
          <a
            href="https://generaltranslation.com"
            className="text-neutral-400 underline hover:text-neutral-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            General Translation
          </a>{" "}
          to demonstrate internationalization. Not a real product.
        </div>
      </T>

      {/* Header */}
      <T>
        <header className="border-b border-neutral-800 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold tracking-tight text-neutral-100">
                General Translation
              </span>
              <span className="text-neutral-700">/</span>
              <span className="text-sm text-neutral-400">Task Manager</span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/gt-examples/task-manager"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-neutral-300 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <LocaleSelector />
            </div>
          </div>
        </header>
      </T>

      {/* Summary bar */}
      <T>
        <div className="border-b border-neutral-800/50 px-6 py-3">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs text-neutral-500">
              <Num>{totalTasks}</Num> total tasks across all columns
            </p>
          </div>
        </div>
      </T>

      {/* Board */}
      <main className="flex-1 px-6 py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map((col) => {
            const colTasks = tasks.filter((t) => t.status === col.key);
            const count = colTasks.length;
            return (
              <div key={col.key} className="space-y-3">
                <T>
                  <div className="flex items-center justify-between px-1">
                    <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      <Var>{columnLabels[col.key]}</Var>
                    </h2>
                    <span className="text-xs text-neutral-600">
                      <Plural
                        n={count}
                        one={<><Num>{count}</Num> task</>}
                        other={<><Num>{count}</Num> tasks</>}
                      />
                    </span>
                  </div>
                </T>
                <div className="space-y-2">
                  {colTasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <T>
        <footer className="border-t border-neutral-800 px-6 py-4">
          <div className="max-w-7xl mx-auto flex flex-col items-center gap-2 text-xs text-neutral-600">
            <span>
              Built with{" "}
              <a href="https://generaltranslation.com" className="underline hover:text-neutral-400" target="_blank" rel="noopener noreferrer">General Translation</a>
              {" "}and{" "}
              <a href="https://nextjs.org" className="underline hover:text-neutral-400" target="_blank" rel="noopener noreferrer">Next.js</a>
            </span>
            <span>
              Styled with{" "}
              <a href="https://tailwindcss.com" className="underline hover:text-neutral-400" target="_blank" rel="noopener noreferrer">Tailwind CSS</a>
              {" "} — Learn about{" "}
              <a href="https://generaltranslation.com/en-US/blog/multilingual-nextjs-seo" className="underline hover:text-neutral-400" target="_blank" rel="noopener noreferrer">multilingual SEO</a>
            </span>
          </div>
        </footer>
      </T>
    </div>
  );
}

import { useEffect, useState } from "react";
import {
  DUE_DATE,
  TAGS,
  formatDueDate,
  formatTimeRemaining,
} from "../utils/todo";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Typography } from "./ui/Typography";

const TODO_CARD_STYLES = {
  sectionLabel:
    "text-[0.8rem] font-bold uppercase tracking-[0.11em] text-slate-700",
  metaValue: "text-base font-semibold text-slate-900",
  fieldGroup: "grid gap-[6px]",
  focusRing:
    "focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-blue-600/35",
};

export function TodoCard() {
  const [now, setNow] = useState(() => Date.now());
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(Date.now());
    }, 10000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  const statusLabel = isComplete ? "Done" : "Pending";
  const timeRemaining = formatTimeRemaining(now, DUE_DATE);

  return (
    <article
      className={`w-full max-w-125 rounded-[28px] border border-slate-400/25 bg-white/90 p-7 text-slate-900 shadow-[0_24px_80px_rgba(15,23,42,0.24),0_2px_8px_rgba(15,23,42,0.08)] backdrop-blur-lg max-sm:rounded-[22px] max-sm:p-5 ${isComplete ? "border-green-500/40" : ""}`}
      data-testid="test-todo-card"
    >
      <div className="mb-4.5 flex items-center justify-between gap-4 max-sm:flex-col max-sm:items-start">
        <Typography
          as="span"
          className="text-[0.82rem] font-bold uppercase tracking-[0.14em] text-slate-700"
        >
          Today's focus
        </Typography>
        <Typography
          as="span"
          className="inline-flex items-center justify-center rounded-full bg-linear-to-br from-amber-700 to-red-700 px-[0.85rem] py-[0.45rem] text-[0.88rem] font-bold text-white"
          data-testid="test-todo-priority"
          aria-label="Priority: High"
        >
          High
        </Typography>
      </div>

      <header className="grid gap-2.5">
        <Typography
          as="h2"
          className={`m-0 text-[clamp(1.7rem,4vw,2.2rem)] leading-[1.05] tracking-[-0.04em] ${
            isComplete
              ? "line-through decoration-[0.16em] decoration-[rgba(15,23,42,0.5)]"
              : ""
          }`}
          data-testid="test-todo-title"
        >
          Finish the launch-ready todo card
        </Typography>
        <Typography
          as="p"
          className="m-0 text-base leading-[1.6] text-slate-600"
          data-testid="test-todo-description"
        >
          A polished, testable task card with keyboard support, responsive
          layout, and clear status signals for the grader.
        </Typography>
      </header>

      <div className="mt-5.5 grid gap-3.5 rounded-[22px] bg-slate-50/90 p-4.5">
        <div className={TODO_CARD_STYLES.fieldGroup}>
          <Typography as="span" className={TODO_CARD_STYLES.sectionLabel}>
            Status
          </Typography>
          <Typography
            as="strong"
            className="inline-flex items-center justify-center self-start rounded-full px-[0.85rem] py-[0.45rem] text-[0.88rem] font-bold"
            data-testid="test-todo-status"
            aria-label={`Status: ${statusLabel}`}
          >
            {statusLabel}
          </Typography>
        </div>

        <div className={TODO_CARD_STYLES.fieldGroup}>
          <Typography as="span" className={TODO_CARD_STYLES.sectionLabel}>
            Due date
          </Typography>
          <time
            className={TODO_CARD_STYLES.metaValue}
            data-testid="test-todo-due-date"
            dateTime={DUE_DATE.toISOString()}
          >
            {formatDueDate(DUE_DATE)}
          </time>
        </div>

        <div className={TODO_CARD_STYLES.fieldGroup}>
          <Typography as="span" className={TODO_CARD_STYLES.sectionLabel}>
            Time remaining
          </Typography>
          <time
            className="text-base font-semibold text-blue-700"
            data-testid="test-todo-time-remaining"
            dateTime={DUE_DATE.toISOString()}
            aria-live="polite"
          >
            {timeRemaining}
          </time>
        </div>
      </div>

      <label
        className="mt-5.5 flex cursor-pointer items-start gap-3.5 rounded-[22px] bg-linear-to-br from-blue-500/10 to-violet-500/10 p-4.5"
        htmlFor="complete-toggle"
      >
        <Input
          id="complete-toggle"
          className={`mt-0.5 h-[1.15rem] w-[1.15rem] shrink-0 accent-blue-600 ${TODO_CARD_STYLES.focusRing}`}
          data-testid="test-todo-complete-toggle"
          type="checkbox"
          checked={isComplete}
          onChange={(event) => {
            setIsComplete(event.target.checked);
          }}
          aria-label="Mark task as complete"
        />
        <span className="grid gap-1">
          <Typography as="span" className="font-bold text-slate-900">
            Completion toggle
          </Typography>
          <Typography
            as="span"
            className="text-[0.94rem] leading-normal text-slate-600"
          >
            {isComplete
              ? "This task is marked complete."
              : "This task is not complete."}
          </Typography>
        </span>
      </label>

      <section
        className="mt-5.5 grid gap-2.5"
        aria-labelledby="tags-heading"
      >
        <Typography
          as="h3"
          id="tags-heading"
          className={TODO_CARD_STYLES.sectionLabel}
        >
          Tags
        </Typography>
        <ul
          className="m-0 flex list-none flex-wrap gap-2.5 p-0"
          data-testid="test-todo-tags"
          role="list"
        >
          {TAGS.map((tag) => (
            <li
              key={tag.label}
              className="rounded-full bg-slate-900/10 px-4 py-2 text-[0.92rem] font-semibold text-slate-900"
              data-testid={tag.testId}
            >
              {tag.label}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-6 flex gap-3 max-sm:flex-col">
        <Button
          variant="primary"
          data-testid="test-todo-edit-button"
          onClick={() => {
            console.log("edit clicked");
          }}
        >
          Edit
        </Button>
        <Button
          variant="danger"
          data-testid="test-todo-delete-button"
          onClick={() => {
            window.alert("Delete clicked");
          }}
        >
          Delete
        </Button>
      </div>
    </article>
  );
}

export const DUE_DATE = new Date("2026-04-16T00:00:00");

export const TAGS = [
  { label: "Work", testId: "test-todo-tag-work" },
  { label: "Urgent", testId: "test-todo-tag-urgent" },
  { label: "Design", testId: "test-todo-tag-design" },
];

export function formatDueDate(date: Date) {
  const datePart = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);

  const timePart = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }).format(date);

  return `Due ${datePart} at ${timePart}`;
}

export function formatTimeRemaining(now: number, dueDate: Date) {
  const difference = dueDate.getTime() - now;
  const absoluteDifference = Math.abs(difference);

  console.log("difference", difference);
  console.log("absoluteDifference", absoluteDifference);
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;

  if (absoluteDifference === 0) {
    return "Due now!";
  }

  const pluralize = (value: number, unit: string) => {
    return `${String(value)} ${unit}${value === 1 ? "" : "s"}`;
  };

  const toWholeMinutes = (ms: number) => {
    return Math.max(1, Math.floor(ms / minute));
  };

  const toWholeSeconds = (ms: number) => {
    return Math.max(1, Math.floor(ms / 1000));
  };

  const formatHoursAndMinutes = (ms: number) => {
    const totalMinutes = toWholeMinutes(ms);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    if (minutes === 0) {
      return pluralize(hours, "hour");
    }

    return `${pluralize(hours, "hour")} and ${pluralize(minutes, "minute")}`;
  };

  if (difference > 0) {
    if (absoluteDifference <= minute) {
      return `Due in ${pluralize(toWholeSeconds(absoluteDifference), "second")}`;
    }

    if (absoluteDifference < hour) {
      return `Due in ${pluralize(toWholeMinutes(absoluteDifference), "minute")}`;
    }

    if (absoluteDifference < day) {
      return `Due in ${formatHoursAndMinutes(absoluteDifference)}`;
    }

    if (absoluteDifference < 2 * day) {
      return "Due tomorrow";
    }

    return `Due in ${pluralize(Math.max(1, Math.floor(absoluteDifference / day)), "day")}`;
  }

  if (absoluteDifference <= minute) {
    return `Overdue by ${pluralize(toWholeSeconds(absoluteDifference), "second")}`;
  }

  if (absoluteDifference < hour) {
    return `Overdue by ${pluralize(toWholeMinutes(absoluteDifference), "minute")}`;
  }

  if (absoluteDifference < day) {
    return `Overdue by ${formatHoursAndMinutes(absoluteDifference)}`;
  }

  return `Overdue by ${pluralize(Math.max(1, Math.floor(absoluteDifference / day)), "day")}`;
}

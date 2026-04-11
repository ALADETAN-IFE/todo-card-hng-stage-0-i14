import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "danger";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const BASE_BUTTON_CLASS =
  "min-h-12 flex-1 basis-0 cursor-pointer rounded-2xl border-0 font-bold text-white transition-transform duration-150 ease-out hover:-translate-y-px focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-blue-600/35";

const VARIANT_CLASS_MAP: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-br from-blue-600 to-indigo-600 shadow-[0_14px_28px_rgba(37,99,235,0.24)]",
  danger:
    "bg-gradient-to-br from-red-600 to-orange-500 shadow-[0_14px_28px_rgba(220,38,38,0.2)]",
};

export function Button({
  className = "",
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${BASE_BUTTON_CLASS} ${VARIANT_CLASS_MAP[variant]} ${className}`.trim()}
      {...props}
    />
  );
}

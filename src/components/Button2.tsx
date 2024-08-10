import { ButtonHTMLAttributes, FC } from "react";
import { cn } from "../utils/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  colorVariant?: string;
}

export const Button2: FC<ButtonProps> = ({ children, className, variant, colorVariant, ...props }) => {
  const colors: Record<string, string> = {
    primary: "bg-slate-500",
    secondary: "bg-blue-500",
    success: "bg-green-500",
    warning: "bg-orange-400",
    danger: "bg-red-600",
    default: "bg-slate-500",
  };

  const variants: Record<string, string> = {
    outline: "border-2 border-slate-500 text-black hover:bg-slate-400 hover:text-white",
    basic: "rounded-none",
    rounded: "rounded-lg",
    pill: "rounded-full",
  };

  return (
    <button
      className={cn(
        `inline-block rounded-lg bg-blue-400 px-5 py-3 font-bold text-white ${colorVariant ? colors[colorVariant] : colors.default}`,
        "rounded-lg",
        variant && (variant === "warning" || variant === "danger") && "rounded-none",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

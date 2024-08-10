import { ButtonHTMLAttributes, FC } from "react";
import { cn } from "../utils/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
}

export const Button: FC<ButtonProps> = ({ children, className, variant, ...props }) => {
  const variants: Record<string, string> = {
    default: "bg-slate-500",
    primary: "bg-blue-500",
    success: "bg-green-500",
    warning: "bg-orange-400",
    danger: "bg-red-600",
  };

  return (
    <button
      className={cn(
        `inline-block rounded-lg bg-blue-400 px-5 py-3 font-bold text-white ${variant ? variants[variant] : variants.default}`,
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

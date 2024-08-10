import { ButtonHTMLAttributes, FC } from "react";
import { cn } from "../utils/utils";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("inline-block px-5 py-3 font-bold", {
  variants: {
    colorVariant: {
      default: "bg-slate-500 text-white",
      primary: "bg-blue-500 text-white",
      success: "bg-green-500 text-white",
      warning: "bg-orange-400 text-white",
      danger: "bg-red-600 text-white",
    },
    variant: {
      outline: "border-2 bg-none border-slate-500 text-black hover:bg-slate-400 hover:text-white",
      basic: "rounded-none",
      rounded: "rounded-lg",
      pill: "rounded-full",
    },
    size: {
      sm: "py-1 px-2 text-xs",
      md: "py-2 px-4 text-base",
      lg: "py-3 px-6 text-lg",
      full: "py-3 px-6 text-lg w-full",
    },
  },
  defaultVariants: {
    variant: "outline",
    size: "sm",
  },
});

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {}

export const Button2: FC<ButtonProps> = ({ children, className, variant, colorVariant, size, ...props }) => {
  return (
    <button className={cn(button({ variant, colorVariant, size, className }))} {...props}>
      {children}
    </button>
  );
};

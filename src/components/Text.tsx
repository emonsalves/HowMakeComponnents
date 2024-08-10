import { twMerge } from "tailwind-merge";
import { FC, HtmlHTMLAttributes } from "react";

export const Text: FC<HtmlHTMLAttributes<HTMLParagraphElement>> = ({ children, className, ...props }) => {
  return (
    <p className={twMerge("py-6 px-6 bg-slate-500 text-white font-bold", className)} {...props}>
      {children}
    </p>
  );
};

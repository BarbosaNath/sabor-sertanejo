import { InputHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface InputContentProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
}

function InputContent({ children, ...rest }: InputContentProps) {
  return (
    <input
      {...rest}
      className={twMerge(
        "bg-white px-4 py-3 border border-terciary rounded-lg",
        rest.className
      )}
    >
      {children}
    </input>
  );
}

export default InputContent;

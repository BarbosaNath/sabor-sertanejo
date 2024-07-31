import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface InputRootProps {
  children: ReactNode;
  className?: string;
}

function InputRoot({ children, className }: InputRootProps) {
  return (
    <div className={twMerge("flex flex-col gap-2", className)}>{children}</div>
  );
}

export default InputRoot;

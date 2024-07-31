import { ReactNode, FormHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

export function Form({ children, ...rest }: FormProps) {
  return (
    <form
      {...rest}
      className={twMerge(
        "bg-white shadow-md p-6 gap-6 flex flex-col rounded-lg w-80",
        rest.className
      )}
    >
      {children}
    </form>
  );
}

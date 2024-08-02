import { InputHTMLAttributes, ReactNode } from "react";
import { tv } from "tailwind-variants";

interface InputContentProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
  dark?: boolean;
}

const inputContent = tv({
  base: "bg-white px-4 py-3 border border-tertiary rounded-lg",

  variants: {
    dark: {
      true: "bg-secondary-light border-none text-tertiary-light",
    },
  },
});

function InputContent({ children, dark, ...rest }: InputContentProps) {
  return (
    <input
      {...rest}
      className={inputContent({
        dark,
        className: rest.className,
      })}
    >
      {children}
    </input>
  );
}

export default InputContent;

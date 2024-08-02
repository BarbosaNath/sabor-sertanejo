import { ReactNode, FormHTMLAttributes } from "react";
import { tv } from "tailwind-variants";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  opaque?: boolean;
}

const formVariant = tv({
  base: "bg-none p-6 gap-6 flex flex-col w-full",

  variants: {
    opaque: {
      true: "bg-white shadow-md p-6 gap-6 rounded-lg w-80",
    },
  },
});

export function Form({ children, opaque, ...rest }: FormProps) {
  return (
    <form
      {...rest}
      className={formVariant({ opaque, className: rest.className })}
    >
      {children}
    </form>
  );
}

import { ReactNode, FormHTMLAttributes } from "react";
import { tv } from "tailwind-variants";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  opaque?: boolean;
}

const formVariant = tv({
  base: "flex flex-col gap-6 bg-none md:px-4 p-6 w-full md:w-3/4",

  variants: {
    opaque: {
      true: "gap-6 bg-white shadow-md p-6 rounded-lg w-80 md:w-1/2",
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

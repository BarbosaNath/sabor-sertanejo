import { ReactNode, ButtonHTMLAttributes } from "react";
import { tv } from "tailwind-variants";

interface ButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  primary?: boolean;
  text?: boolean;
}

const button = tv({
  base: "px-2 py-3 rounded-lg flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-dark text-tertiary-light hover:text-primary",

  variants: {
    primary: {
      true: "bg-primary hover:bg-secondary text-secondary hover:text-primary",
    },
    text: {
      true: "bg-transparent hover:bg-transparent underline text-secondary hover:text-primary",
    },
  },

  compoundVariants: [
    {
      primary: true,
      text: true,
      className: "text-primary hover:text-secondary",
    },
  ],
});

function ButtonRoot({ children, primary, text, ...rest }: ButtonRootProps) {
  return (
    <button
      {...rest}
      className={button({ primary, text, className: rest.className })}
    >
      {children}
    </button>
  );
}

export default ButtonRoot;

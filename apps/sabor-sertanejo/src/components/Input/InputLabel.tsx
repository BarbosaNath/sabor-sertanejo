import { LabelHTMLAttributes } from "react";
import { tv } from "tailwind-variants";

interface InputLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  text: string;
  light?: boolean;
}
const label = tv({
  base: "text-secondary",

  variants: {
    light: {
      true: "text-tertiary-light",
    },
  },
});

function InputLabel({ text, light, ...rest }: InputLabelProps) {
  return (
    <label {...rest} className={label({ light, className: rest.className })}>
      {text}
    </label>
  );
}

export default InputLabel;

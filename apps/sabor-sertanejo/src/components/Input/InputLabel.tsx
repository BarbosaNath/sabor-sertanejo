import { LabelHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface InputLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  text: string;
}

function InputLabel({ text, ...rest }: InputLabelProps) {
  return (
    <label {...rest} className={twMerge("text-secondary", rest.className)}>
      {text}
    </label>
  );
}

export default InputLabel;

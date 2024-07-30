import { HTMLProps } from "react";

interface ButtonTextProps extends HTMLProps<HTMLSpanElement> {
  text: string;
}

export default function ButtonText({ text, ...rest }: ButtonTextProps) {
  return <span {...rest}>{text}</span>;
}

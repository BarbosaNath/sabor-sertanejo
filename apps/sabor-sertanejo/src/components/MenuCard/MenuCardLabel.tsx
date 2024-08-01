import { HTMLProps } from "react";

interface MenuCardLabelProps extends HTMLProps<HTMLParagraphElement> {
  text: string;
}

function MenuCardLabel({ text, ...rest }: MenuCardLabelProps) {
  return <p {...rest}>{text}</p>;
}

export default MenuCardLabel;

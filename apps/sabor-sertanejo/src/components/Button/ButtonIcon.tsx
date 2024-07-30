import { ElementType, HTMLProps } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonIconProps extends HTMLProps<HTMLAnchorElement> {
  icon: ElementType;
}

export default function ButtonIcon({ icon: Icon, ...rest }: ButtonIconProps) {
  return <Icon {...rest} className={twMerge("w-4 h-4", rest.className)} />;
}

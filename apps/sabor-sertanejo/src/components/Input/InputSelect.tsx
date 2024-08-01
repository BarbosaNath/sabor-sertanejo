// src/components/SelectGenero.tsx
import Chevron from "../Icons/Chevron.svg";
import { HTMLProps, ReactNode } from "react";

interface InputSelectProps extends HTMLProps<HTMLSelectElement> {
  children: ReactNode;
}

function InputSelect({ children, ...rest }: InputSelectProps) {
  return (
    <select
      {...rest}
      className="p-2 border rounded-lg w-full h-10 text-secondary-dark appearance-none"
      style={{
        backgroundImage: `url("${Chevron}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 8px top 50%",
      }}
    >
      {children}
    </select>
  );
}

export default InputSelect;

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { tv } from "tailwind-variants";

interface PillProps {
  text: string;
  children?: React.ReactNode;
}

const pill = tv({
  base: "flex justify-center items-center gap-2 bg-secondary-light shadow-lg px-4 py-1 rounded-full w-fit relative text-center text-tertiary text-xs",

  variants: {
    toggle: {
      true: "opacity-40 data-[active=true]:opacity-100",
    },
  },
});

function Pill({ text, children }: PillProps) {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <div
      onClick={toggleActive}
      data-active={active}
      className={pill({ toggle: children == undefined })}
    >
      <span>{text}</span>

      {children && <ChevronDown size={12} className="text-tertiary" />}

      {active && children && (
        <div className="top-6 z-10 absolute flex flex-col justify-center items-center gap-2 bg-secondary-light shadow-lg mt-2 px-4 py-1.5 rounded-lg w-fit text-tertiary-dark">
          {children}
        </div>
      )}
    </div>
  );
}

export default Pill;

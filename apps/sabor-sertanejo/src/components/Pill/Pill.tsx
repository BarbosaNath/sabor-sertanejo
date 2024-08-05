import { ChevronDown } from "lucide-react";

interface PillProps {
  text: string;
}

function Pill({ text }: PillProps) {
  return (
    <div className="flex justify-center items-center gap-2 bg-secondary-light shadow-lg m-4 px-4 py-1.5 border-transparent rounded-full w-fit">
      <span className="text-center text-tertiary text-xs">{text}</span>
      <ChevronDown size={12} className="text-tertiary" />
    </div>
  );
}

export default Pill;

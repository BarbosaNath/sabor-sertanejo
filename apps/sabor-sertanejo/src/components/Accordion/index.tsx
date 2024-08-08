import { useState, ReactNode } from "react";
import { Plus } from "lucide-react";

interface AccordionProps {
  question: string;
  children: ReactNode;
}

function Accordion({ question, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="text-sm">
      <div
        data-open={isOpen}
        className="flex justify-between items-center bg-primary sm:bg-secondary-light p-4 rounded-t-lg data-[open=false]:rounded-b-lg sm:text-white"
        onClick={toggleAccordion}
      >
        <h2 className="font-bold">{question}</h2>
        <Plus
          data-open={isOpen}
          size={32}
          strokeWidth={3}
          className="sm:text-white transition-all shrink-0 data-[open=true]:rotate-45"
        />
      </div>
      {isOpen && (
        <div className="bg-secondary-light sm:bg-secondary-dark p-4 rounded-b-lg font-normal text-center text-white">
          {children}
        </div>
      )}
    </div>
  );
}

export default Accordion;

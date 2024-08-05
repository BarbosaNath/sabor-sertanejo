import React from "react";
import { HelpCircle, ChevronRight } from "lucide-react";

interface ProfileButtonProps {
  text: string;
}

function ProfileButton({ text }: ProfileButtonProps) {
  return (
    <div className="flex items-center gap-2">
      <HelpCircle className="text-secondary size-4" />
      <span className="text-secondary">{text}</span>
      <ChevronRight className="w-6 h-12 text-secondary" />
    </div>
  );
}

export default ProfileButton;

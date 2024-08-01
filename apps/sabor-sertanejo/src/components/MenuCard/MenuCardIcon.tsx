import { ElementType } from "react";

interface MenuCardIconProps {
  icon: ElementType;
  className?: string;
}

function MenuCardIcon({ icon: Icon, className }: MenuCardIconProps) {
  return <Icon className={className} />;
}

export default MenuCardIcon;

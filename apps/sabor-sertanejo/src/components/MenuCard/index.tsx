import { ButtonHTMLAttributes, ElementType } from "react";
import menuCardBackground from "./MenuCardBackground.svg";
import menuCardBackgroundLarge from "./MenuCardBackgroundLarge.svg";
import { tv } from "tailwind-variants";

interface MenuCardRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon: ElementType;
  large?: boolean;
}

const menuCard = tv({
  base: "relative flex flex-col justify-center items-center gap-5 bg-white hover:bg-tertiary-light bg-no-repeat drop-shadow-md rounded-lg w-[100px] h-[100px] text-xl text-secondary",

  variants: {
    large: {
      true: "w-[210px]",
    },
  },
});

function MenuCard({ icon: Icon, label, large, ...rest }: MenuCardRootProps) {
  return (
    <button
      {...rest}
      className={menuCard({ large, className: rest.className })}
      style={{
        backgroundImage: large
          ? `url(${menuCardBackgroundLarge})`
          : `url(${menuCardBackground})`,
      }}
    >
      <Icon />

      <p>{label}</p>
    </button>
  );
}

export default MenuCard;

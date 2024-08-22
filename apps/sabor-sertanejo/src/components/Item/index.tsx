import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "../Button";
import { tv } from "tailwind-variants";

interface ItemProps {
  imageURL: string;
  name: string;
  estimatedTime: number;
  price: number;
  originalPrice: number;
  className: string;
  large?: boolean;
  showCartIcon?: boolean;
}

const itemRoot = tv({
  base: "flex text-tertiary-light gap-4",

  variants: {
    large: {
      true: "p-4 bg-tertiary-light shrink-0 rounded-lg text-secondary w-60 h-[360px] flex-col",
    },
  },
});

function Item({
  imageURL,
  name,
  estimatedTime,
  price,
  originalPrice,
  className,
  large,
  showCartIcon = true,
}: ItemProps) {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className={itemRoot({ large, className })}>
      <div className="relative">
        <img
          src={imageURL}
          alt={"Image of " + name}
          className={`rounded-lg  ${large && "w-[208px] h-[247px]"} object-cover size-16 ${!large && "max-w-fit"}`}
        />
        <Heart
          className="right-1 bottom-1 absolute text-tertiary-light hover:cursor-pointer"
          strokeWidth={2}
          fill="rgba(255, 255, 255, 0.2)"
        />
      </div>

      <div className="flex justify-between w-full h-full">
        <div className="flex flex-col justify-between gap-2 mr-auto h-full leading-none">
          <h4>{name}</h4>
          <div className="flex gap-2 leading-none">
            <p className="font-bold leading-none">{formatter.format(price)}</p>
            {price !== originalPrice && (
              <p className="text-primary text-sm line-through leading-none">
                {formatter.format(originalPrice)}
              </p>
            )}
          </div>
          <p className="text-sm text-tertiary leading-none">
            {(estimatedTime / 60).toFixed(0)} minutos
          </p>
        </div>
        {showCartIcon && (
          <Button.Root
            className={`bg-secondary-light self-center size-10 ${large && "self-end"}`}
          >
            <Button.Icon icon={ShoppingCart} />
          </Button.Root>
        )}
      </div>
    </div>
  );
}

export default Item;

import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "../Button";

interface ItemProps {
  imageURL: string;
  name: string;
  estimatedTime: number;
  price: number;
  originalPrice: number;
}

function Item({
  imageURL,
  name,
  estimatedTime,
  price,
  originalPrice,
}: ItemProps) {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="flex justify-between text-tertiary-light">
      <div className="flex gap-4">
        <div className="relative">
          <img
            src={imageURL}
            alt={"Image of " + name}
            className="rounded-lg object-cover size-16"
          />
          <Heart
            className="right-1 bottom-1 z-10 absolute hover:cursor-pointer"
            strokeWidth={3}
          />
        </div>
        <div className="flex flex-col justify-between leading-none">
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
            {estimatedTime / 60} minutos
          </p>
        </div>
      </div>
      <Button.Root className="bg-secondary-light self-center size-10">
        <Button.Icon icon={ShoppingCart} />
      </Button.Root>
    </div>
  );
}

export default Item;

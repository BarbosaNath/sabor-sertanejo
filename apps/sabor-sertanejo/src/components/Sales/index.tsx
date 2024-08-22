import { ItemType } from "../../types/item.types";
import Backdrop from "../Backdrop";
import Item from "../Item";

interface SalesProps {
  items?: ItemType[];
}

function Sales({ items }: SalesProps) {
  return (
    <Backdrop element={"main"} className="gap-5">
      <h2 className="font-bold text-2xl text-secondary">OFERTAS ESPECIAIS</h2>
      <div className="flex md:justify-center gap-3 px-3 snap-mandatory snap-x w-full h-full overflow-x-auto no-scrollbar shrink-0">
        {items &&
          items.map((item) => <Item {...item} large className="snap-center" />)}
      </div>
    </Backdrop>
  );
}

export default Sales;

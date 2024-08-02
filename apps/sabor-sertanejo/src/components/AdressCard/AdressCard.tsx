import { Home, EllipsisVertical } from "lucide-react";

interface AdressCardProps {
  title: string;
  adress: string;
}

function AdressCard({ title, adress }: AdressCardProps) {
  return (
    <div className="flex justify-center items-center gap-2 bg-terciary-light shadow-lg p-4 rounded-lg w-auto max-w-64 h-[100px]">
      <Home className="text-primary size-7" />
      <div>
        <h4 className="text-base">{title}</h4>
        <p className="text-sm text-tertiary-dark">{adress}</p>
      </div>
      <div className="h-full">
        <EllipsisVertical className="text-primary size-4" />
      </div>
    </div>
  );
}

export default AdressCard;

import { TicketPercent } from "lucide-react";

interface CouponCardProps {
  text: string;
}

function CouponCard({ text }: CouponCardProps) {
  return (
    <div className="flex justify-center items-center gap-2 bg-white shadow-lg p-4 rounded-lg w-auto max-w-64 h-[70px]">
      <TicketPercent className="text-black size-7" />
      <div className="text-black text-sm">{text}</div>
    </div>
  );
}

export default CouponCard;

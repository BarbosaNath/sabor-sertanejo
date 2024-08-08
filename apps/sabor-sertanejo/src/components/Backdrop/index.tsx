import { ReactNode } from "react";
import BackdropTop from "../../assets/backdrop_t.png";
import BackdropBottom from "../../assets/backdrop_b.png";

interface BackdropProps {
  children: ReactNode;
  dark?: boolean;
}

function Backdrop({ children, dark }: BackdropProps) {
  return (
    <div className="flex flex-col gap-0 m-0 p-0">
      <div
        style={{ backgroundImage: `url(${BackdropTop})` }}
        className="w-full h-10"
      />
      <div
        data-dark={dark}
        className="flex flex-col justify-center items-center bg-primary data-[dark=true]:bg-secondary-light py-8"
      >
        {children}
      </div>
      <div
        style={{ backgroundImage: `url(${BackdropBottom})` }}
        className="w-full h-10"
      />
    </div>
  );
}

export default Backdrop;

import { ReactNode } from "react";
import BackdropTop from "../../assets/backdrop_t.png";
import BackdropBottom from "../../assets/backdrop_b.png";

interface BackdropProps {
  children: ReactNode;
  dark?: boolean;
  top?: boolean;
  bottom?: boolean;
}

function Backdrop({
  children,
  dark,
  top = true,
  bottom = true,
}: BackdropProps) {
  return (
    <div className="flex flex-col gap-0 m-0 p-0">
      {top && (
        <div
          style={{ backgroundImage: `url(${BackdropTop})` }}
          className="w-full h-10"
        />
      )}
      <div
        data-dark={dark}
        className="flex flex-col justify-center items-center bg-primary data-[dark=true]:bg-secondary-light py-8"
      >
        {children}
      </div>
      {bottom && (
        <div
          style={{ backgroundImage: `url(${BackdropBottom})` }}
          className="w-full h-10"
        />
      )}
    </div>
  );
}

export default Backdrop;

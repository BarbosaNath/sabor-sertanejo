import { ComponentType, ReactNode } from "react";
import BackdropTop from "../../assets/backdrop_t.png";
import BackdropBottom from "../../assets/backdrop_b.png";
import { twMerge } from "tailwind-merge";

interface BackdropProps {
  children: ReactNode;
  dark?: boolean;
  top?: boolean;
  bottom?: boolean;
  className?: string;
  element?: ComponentType<any> | keyof JSX.IntrinsicElements;
}

function Backdrop({
  children,
  dark,
  top = true,
  bottom = true,
  className,
  element: Element = "div",
}: BackdropProps) {
  return (
    <div className="flex flex-col gap-0 m-0 p-0">
      {top && (
        <div
          style={{ backgroundImage: `url(${BackdropTop})` }}
          className="w-full h-10"
        />
      )}
      <Element
        data-dark={dark}
        className={twMerge(
          "flex flex-col justify-center items-center bg-primary data-[dark=true]:bg-secondary-light py-8",
          className
        )}
      >
        {children}
      </Element>
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

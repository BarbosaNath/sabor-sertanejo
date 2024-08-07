import logo from "../../assets/logo.png";
import logo_dark from "../../assets/logo_dark.png";
import logo_primary from "../../assets/logo_primary.png";
import { HTMLProps } from "react";

interface LogoProps extends HTMLProps<HTMLImageElement> {
  dark?: boolean;
  primary?: boolean;
}
function Logo({ dark, primary, ...rest }: LogoProps) {
  if (dark) return <img src={logo_dark} alt="Logo Sabor Sertanejo" {...rest} />;
  if (primary)
    return <img src={logo_primary} alt="Logo Sabor Sertanejo" {...rest} />;
  return <img src={logo} alt="Logo Sabor Sertanejo" {...rest} />;
}

export default Logo;

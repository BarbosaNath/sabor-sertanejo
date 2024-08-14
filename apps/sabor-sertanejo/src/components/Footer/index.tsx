import Backdrop from "../Backdrop";
import PizzaSlice from "../Icons/PizzaSlice";
import Logo from "../Logo";
import { Button } from "../Button";
import { Instagram, Twitter, Facebook, MessageCircle } from "lucide-react";

function Footer() {
  return (
    <Backdrop
      bottom={false}
      element="footer"
      className="lg:flex-row lg:justify-around"
    >
      <div className="flex justify-between lg:m-0 mb-8 px-4 w-full lg:w-4/12 lg:max-w-xs">
        <div className="flex gap-4">
          <PizzaSlice className="h-10 self-center shrink-0" />
          <Logo dark className="h-10 self-center" />
        </div>

        <div className="flex flex-wrap gap-2 text-secondary shrink-0 size-14">
          <Instagram size={24} strokeWidth={2} />
          <Twitter size={24} fill="#1e1e1e" />
          <MessageCircle size={24} strokeWidth={2} />
          <Facebook size={24} fill="#1e1e1e" />
        </div>
      </div>

      <div className="flex flex-col gap-8 border-secondary mx-6 px-1 py-8 border-t border-b lg:border-none text-justify">
        <p className="text-xs">
          © Copyright 2024 - Sabor Sertanejo - Todos os direitos reservados
          Sabor Sertanejo com Agência de Restaurantes Online S.A.
        </p>

        <p className="text-xs">
          CNPJ 15.490.800/0001-67 / Avenida dos Autonomistas, nº 1496, Vila
          Yara, Cratuá/CE - CEP 66.630-050.
        </p>

        <p className="text-xs">Horário de funcionamento: das 16:00 às 00:00.</p>
      </div>

      <div className="flex lg:flex-col justify-between lg:items-start lg:gap-3 px-7 pt-8 lg:pt-0 w-full lg:w-auto lg:min-w-fit text-xs">
        <Button.Root text>
          <Button.Text text="Sobre Nós" />
        </Button.Root>

        <Button.Root text>
          <Button.Text text="Contacte-nos" />
        </Button.Root>

        <Button.Root text>
          <Button.Text text="Termos de Serviço" />
        </Button.Root>

        <Button.Root text>
          <Button.Text text="FAQ" />
        </Button.Root>
      </div>
    </Backdrop>
  );
}

export default Footer;

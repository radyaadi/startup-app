import { Menu } from "lucide-react";
import MenuNavigation from "../../molecules/navigation/menu-navigation";
import {
  DropDownContainer,
  DropDownProvider,
  DropDownTrigger,
} from "../../organisms/provider/dropdown-provider";
import LoginButton from "./login-button";
import { useScroll } from "../../../libs/hooks/use-scroll";

export default function NavDropButton() {
  const yScroll = useScroll();

  return (
    <DropDownProvider>
      <DropDownTrigger>
        <Menu
          size={28}
          strokeWidth={2.2}
          className={`${yScroll ? "text-black" : "text-white"} hover:text-[--second]`}
        />
      </DropDownTrigger>
      <DropDownContainer position="right">
        <MenuNavigation />
        <div className="mt-1 px-5 py-2">
          <LoginButton />
        </div>
      </DropDownContainer>
    </DropDownProvider>
  );
}

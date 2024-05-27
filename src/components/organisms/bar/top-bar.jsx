import { useScroll } from "../../../libs/hooks/use-scroll";
import MenuNavigation from "../../molecules/navigation/menu-navigation";
import AppLogo from "../../atoms/logo/app-logo";
import LoginButton from "../../atoms/button/login-button";
import NavDropButton from "../../atoms/button/nav-drop-button";

export default function TopBar() {
  const yScroll = useScroll();

  return (
    <div
      className={`${yScroll ? "h-16" : "h-32"} box-container flex items-center justify-between transition-all duration-200 ease-in-out`}
    >
      <AppLogo />
      <div className="hidden gap-x-8 sm:inline-flex md:gap-x-12">
        <MenuNavigation />
        <LoginButton />
      </div>
      <div className="block sm:hidden">
        <NavDropButton />
      </div>
    </div>
  );
}

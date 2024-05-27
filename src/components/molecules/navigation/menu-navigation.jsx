import { navMenuData } from "../../../libs/constants/nav-menu-data";
import MenuNavItem from "../../atoms/item/menu-nav-item";

export default function MenuNavigation() {
  return (
    <nav className="flex flex-col gap-x-8 sm:flex-row sm:items-center lg:gap-x-10">
      {navMenuData.map((data, index) => (
        <MenuNavItem key={index} {...data} />
      ))}
    </nav>
  );
}

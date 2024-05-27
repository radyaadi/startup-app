import { navMenuData } from "../../../libs/constants/nav-menu-data";

export default function FooterNavList() {
  return (
    <div className="ml-2 grid grid-cols-1 gap-2 text-sm">
      {navMenuData.map((data, index) => (
        <a key={index} href={data.path} className="text-white hover:underline">
          {data.title}
        </a>
      ))}
    </div>
  );
}

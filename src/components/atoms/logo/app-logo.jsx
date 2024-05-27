import { useScroll } from "../../../libs/hooks/use-scroll";
import { Database } from "lucide-react";

export default function AppLogo() {
  const yScroll = useScroll();

  return (
    <a
      href="#home"
      className={`${yScroll ? "text-[--primary]" : "text-white"} inline-flex items-center gap-x-1 text-xl font-bold leading-none transition-all duration-75 ease-in-out`}
    >
      <Database size={30} strokeWidth={2.2} />
      <p>ERD App</p>
    </a>
  );
}

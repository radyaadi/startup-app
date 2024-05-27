import { Database } from "lucide-react";
import BackButton from "../../atoms/button/back-button";

export default function AuthTopBar() {
  return (
    <div className="box-container flex h-16 items-center justify-between transition-all duration-200 ease-in-out">
      <span
        href="#home"
        className="inline-flex items-center gap-x-1 text-xl font-bold leading-none text-[--primary] transition-all duration-75 ease-in-out"
      >
        <Database size={30} strokeWidth={2.2} />
        <p>ERD App</p>
      </span>
      <BackButton />
    </div>
  );
}

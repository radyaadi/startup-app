import { Database } from "lucide-react";

export default function StaticAppLogo() {
  return (
    <span
      href="#home"
      className="inline-flex items-center gap-x-1 text-xl font-bold leading-none text-[--primary]"
    >
      <Database size={30} strokeWidth={2.2} />
      <p>ERD App</p>
    </span>
  );
}

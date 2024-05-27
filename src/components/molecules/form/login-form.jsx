import { Database } from "lucide-react";
import InputFieldItem from "../../atoms/item/input-field-item";

export default function LoginForm() {
  return (
    <div className="max-w-md basis-full rounded-md border bg-white p-8 shadow sm:px-14">
      <span
        href="#home"
        className="mx-auto mb-10 flex items-center justify-center gap-x-1 text-2xl font-bold leading-none text-[--primary]"
      >
        <Database size={32} strokeWidth={2.2} />
        <p>ERD App</p>
      </span>
      <form className="grid grid-cols-1 gap-5">
        <InputFieldItem title="Email" item="email" type="email" />
        <InputFieldItem title="Password" item="password" type="password" />
        <button
          type="submit"
          className="mx-auto mt-5 w-28 rounded-lg bg-[--second] p-3 font-medium text-white duration-100 ease-in-out hover:bg-[--third] hover:text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
}

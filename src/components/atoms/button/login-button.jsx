import { Link } from "react-router-dom";

export default function LoginButton() {
  return (
    <Link to={"/login"}>
      <button className="w-full rounded-lg bg-[--second] p-2 text-sm font-medium text-white transition-colors duration-100 ease-in-out hover:bg-[--third] hover:text-white sm:w-20">
        Login
      </button>
    </Link>
  );
}

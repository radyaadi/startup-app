import PropTypes from "prop-types";
import AuthTopBar from "../components/organisms/bar/auth-top-bar";

export default function AuthenticationTemplate({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky left-0 top-0 z-10 w-full border-b bg-white shadow transition-all">
        <AuthTopBar />
      </header>
      <main className="flex flex-1 items-center justify-center px-5">
        {children}
      </main>
      <footer>
        <p className="pb-8 text-center text-sm">
          ©2024 ERP App. Created by Radya Adi Anggara
        </p>
      </footer>
    </div>
  );
}

AuthenticationTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

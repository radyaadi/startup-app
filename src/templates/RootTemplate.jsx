import { useScroll } from "../libs/hooks/use-scroll";
import PropTypes from "prop-types";
import TopBar from "../components/organisms/bar/top-bar";
import BottomBar from "../components/organisms/bar/bottom-bar";

export default function RootTemplate({ children }) {
  const yScroll = useScroll();

  return (
    <div className="flex min-h-screen flex-col">
      <header
        className={`${yScroll ? "border-b bg-white shadow" : "border-b-transparent bg-transparent"} fixed left-0 top-0 z-10 w-full transition-all`}
      >
        <TopBar />
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-[--primary]">
        <BottomBar />
      </footer>
    </div>
  );
}

RootTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

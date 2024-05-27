import PropTypes from "prop-types";
import { useScroll } from "../../../libs/hooks/use-scroll";
import { useMediaQuery } from "../../../libs/hooks/use-media-query";

export default function MenuNavItem({ title, path }) {
  const isDesktop = useMediaQuery("(min-width: 640px)");
  const yScroll = useScroll();

  const textStyle = isDesktop
    ? yScroll
      ? "text-black"
      : "text-white"
    : yScroll
      ? "text-red"
      : "text-blue";

  return (
    <a
      href={path}
      className={`${textStyle} w-full px-5 py-3 text-sm font-medium hover:bg-zinc-100 hover:text-[--second] sm:p-0 sm:hover:bg-transparent md:text-[1.1rem]`}
    >
      {title}
    </a>
  );
}

MenuNavItem.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

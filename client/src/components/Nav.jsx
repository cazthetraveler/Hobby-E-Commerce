import { Link, useLocation } from "react-router-dom";

const Nav = ({ isVisible }) => {
  const currentPage = useLocation().pathname;

  return (
    <nav
      className={
        isVisible ? "flex bg-cyan-600 p-2" : "hidden lg:block bg-cyan-600 p-2"
      }
    >
      <ul
        id="navbar"
        className="flex flex-col items-center gap-3 lg:gap-0 lg:flex-row justify-evenly text-white text-3xl lg:text-xl font-medium w-full"
      >
        <li
          className={
            currentPage === "/"
              ? "text-cyan-400"
              : "hover:text-cyan-400 duration-200"
          }
        >
          <Link to="/">HOME</Link>
        </li>
        <li
          className={
            currentPage === "/categories/Comics"
              ? "text-cyan-400"
              : "hover:text-cyan-400 duration-200"
          }
        >
          <Link to="/categories/Comics">COMICS</Link>
        </li>
        <li
          className={
            currentPage === "/categories/Board-Games"
              ? "text-cyan-400"
              : "hover:text-cyan-400 duration-200"
          }
        >
          <Link to="/categories/Board-Games">BOARD GAMES</Link>
        </li>
        <li
          className={
            currentPage === "/categories/Video-Games"
              ? "text-cyan-400"
              : "hover:text-cyan-400 duration-200"
          }
        >
          <Link to="/categories/Video-Games">VIDEO GAMES</Link>
        </li>
        <li
          className={
            currentPage === "/categories/Plushies"
              ? "text-cyan-400"
              : "hover:text-cyan-400 duration-200"
          }
        >
          <Link to="/categories/Plushies">PLUSHIES</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

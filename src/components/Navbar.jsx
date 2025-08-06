import {
  BACKGROUND,
  FOREGROUND,
  PURPLE,
  CYAN,
  PINK,
  CURRENT_LINE,
  COMMENT,
  ORANGE,
  GREEN,
  YELLOW,
  RED,
} from "../assets/colors";
import { Link } from "react-router-dom";
const Navbar = () => {
  const navStyle = {
    width: "100%",
    height: 60,
    backgroundColor: BACKGROUND,
    borderBottom: `1.5px solid ${PURPLE}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: `0 3px 8px rgba(189, 147, 249, 0.4)`,
    boxSizing: "border-box",
  };

  const navLinksContainer = {
    position: "absolute",
    left: 20,
    display: "flex",
    gap: 18,
    top: 0,
    height: "100%",
    alignItems: "center",
  };

  const navLinkStyle = {
    color: CYAN,
    textDecoration: "none",
    fontWeight: "700",
    fontSize: 17,
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "6px 14px",
    borderRadius: 8,
    transition: "all 0.3s ease",
    boxShadow: `0 0 6px ${CYAN}`,
    userSelect: "none",
  };

  const navLinkHover = (e) => {
    e.currentTarget.style.backgroundColor = PURPLE;
    e.currentTarget.style.color = PINK;
    e.currentTarget.style.boxShadow = `0 0 12px ${PINK}`;
  };

  const navLinkLeave = (e) => {
    e.currentTarget.style.backgroundColor = "transparent";
    e.currentTarget.style.color = CYAN;
    e.currentTarget.style.boxShadow = `0 0 6px ${CYAN}`;
  };

  const titleStyle = {
    color: PINK,
    fontWeight: "900",
    fontSize: 24,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    margin: 0,
    userSelect: "none",
    textShadow: `0 0 8px ${PURPLE}`,
  };
  return (
    <nav style={navStyle}>
      <div style={navLinksContainer}>
        <Link
          to="/"
          style={navLinkStyle}
          onMouseEnter={navLinkHover}
          onMouseLeave={navLinkLeave}
        >
          <i className="fa-solid fa-house"></i>
          Home
        </Link>

        <Link
          to="/todos"
          style={navLinkStyle}
          onMouseEnter={navLinkHover}
          onMouseLeave={navLinkLeave}
        >
          <i className="fa-solid fa-list-check"></i>
          To-Do List
        </Link>
      </div>

      <h2 style={titleStyle}>React Practice Project</h2>
    </nav>
  );
};
export default Navbar;

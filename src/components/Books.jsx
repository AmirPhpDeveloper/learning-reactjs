import React from "react";
import { BACKGROUND, COMMENT, PURPLE } from "../assets/colors";

const Navbar = () => {
  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: BACKGROUND,
          padding: "10px 0",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          boxShadow: "0 2px 6px rgba(0,0,0,0.3)", // سایه نوبار
          zIndex: 1000,
        }}
      >
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "30px",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <a
              href="/"
              style={{
                color: "#ecf0f1",
                textDecoration: "none",
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <i className="fas fa-home"></i> خانه
            </a>
          </li>
          <li>
            <a
              href="/books"
              style={{
                color: "#ecf0f1",
                textDecoration: "none",
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <i className="fas fa-book"></i> کتاب‌ها
            </a>
          </li>
        </ul>
      </nav>

      <div
        style={{
          marginTop: "60px", // برای اینکه محتوا زیر نوبار قرار بگیره
          minHeight: "calc(100vh - 60px)", // کل ارتفاع صفحه منهای نوبار
          backgroundColor: COMMENT, // بک‌گراند کل فضای زیر نوبار
        }}
      >
        {/* اینجا محتوای صفحه قرار میگیره، مثلا Outlet */}
      </div>
    </>
  );
};

export default Navbar;

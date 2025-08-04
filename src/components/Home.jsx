import React from "react";
import {
  BACKGROUND,
  COMMENT,
  PURPLE,
  FOREGROUND,
  CYAN,
  RED,
  ORANGE,
  GREEN,
  YELLOW,
} from "../assets/colors";
import { Outlet } from "react-router";

const Home = () => {
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
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: BACKGROUND,
          padding: "0 20px",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          boxShadow: `0 2px 6px ${PURPLE}88`,
          zIndex: 1000,
          direction: "rtl",
          color: FOREGROUND,
        }}
      >
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "30px",
            margin: 0,
            padding: 0,
            alignItems: "center",
          }}
        >
          <li>
            <a
              href="/"
              style={{
                color: PURPLE,
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
                color: CYAN,
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

        {/* متن وسط */}
        <div
          style={{
            fontWeight: "bold",
            fontSize: "20px",
            whiteSpace: "nowrap",
            color: ORANGE,
            textShadow: `1px 1px 2px ${RED}`,
          }}
        >
          React Practice Project
        </div>

        {/* بخش سرچ */}
        <div style={{ position: "relative" }}>
          <input
            type="text"
            placeholder="جستجو..."
            style={{
              padding: "6px 30px 6px 10px",
              borderRadius: "20px",
              border: `1px solid ${COMMENT}`,
              outline: "none",
              fontSize: "16px",
              width: "180px",
              backgroundColor: BACKGROUND,
              color: YELLOW,
              fontWeight: "600",
            }}
          />
          <i
            className="fas fa-search"
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              color: GREEN,
            }}
          ></i>
        </div>
      </nav>

      <div
        style={{
          marginTop: "60px",
          minHeight: "calc(100vh - 60px)",
          backgroundColor: COMMENT,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Home;

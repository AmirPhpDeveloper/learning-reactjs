import React from "react";
import { Link } from "react-router-dom";
import { BACKGROUND, FOREGROUND, PINK, CYAN, PURPLE } from "./../assets/colors";

const Home = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: BACKGROUND,
        color: FOREGROUND,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: "center",
      }}
    >
      {/* Dracula Theme Typora Image */}
      <img
        src="https://theme.typora.io/media/theme/dracula/dracula-typora.png"
        alt="Dracula Theme Typora"
        style={{
          maxWidth: "300px",
          borderRadius: 16,
          marginBottom: 40,
          boxShadow: `0 0 20px ${PURPLE}`,
        }}
      />

      <h1 style={{ color: PINK, fontSize: 42, marginBottom: 20 }}>
        Welcome to Dracula To-Do List!
      </h1>

      <p style={{ color: CYAN, fontSize: 20, marginBottom: 40 }}>
        Click the button below to start managing your tasks.
      </p>

      <Link to="/todo" style={{ textDecoration: "none" }}>
        <button
          style={{
            backgroundColor: PURPLE,
            color: FOREGROUND,
            border: "none",
            borderRadius: 8,
            padding: "15px 40px",
            fontSize: 18,
            cursor: "pointer",
            fontWeight: "bold",
            boxShadow: `0 0 10px ${PURPLE}`,
            transition: "background-color 0.3s ease",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = CYAN;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = PURPLE;
          }}
        >
          <i className="fa-solid fa-play-circle fa-lg"></i>
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default Home;

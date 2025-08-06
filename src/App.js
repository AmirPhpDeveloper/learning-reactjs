import React from "react";
import { BACKGROUND, FOREGROUND, PINK, CYAN, PURPLE } from "./assets/colors";

function App() {
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
        fontFamily: "'Vazirmatn', sans-serif",
        textAlign: "center",
      }}
    >
      {/* تصویر Dracula Theme Typora */}
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

      <h1 dir="rtl" style={{ color: PINK, fontSize: 42, marginBottom: 20 }}>
        به تو-دو لیست دراکولا خوش آمدید!
      </h1>

      <p dir="rtl" style={{ color: CYAN, fontSize: 20, marginBottom: 40 }}>
        با کلیک روی دکمه زیر وارد صفحه‌ی مدیریت تسک‌ها شوید.
      </p>

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
        شروع کن!
      </button>
    </div>
  );
}

export default App;

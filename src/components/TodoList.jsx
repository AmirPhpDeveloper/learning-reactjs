import React from "react";
import {
  BACKGROUND,
  FOREGROUND,
  PURPLE,
  CYAN,
  PINK,
  CURRENT_LINE,
  COMMENT,
} from "../assets/colors";
import Navbar from "./Navbar";
import Todo from "./Todo";

const TodoList = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: BACKGROUND,
        color: FOREGROUND,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        overflowX: "hidden",
        boxSizing: "border-box",
      }}
    >
      <Navbar />

      <main
        style={{
          paddingTop: 100, // فاصله 100 پیکسل از بالا (زیر نوبار)
          paddingLeft: 30,
          paddingRight: 30,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          height: "calc(100vh - 60px)",
          overflow: "auto",
          boxSizing: "border-box",
          color: COMMENT,
          fontSize: 18,
          fontWeight: "500",
          textShadow: `0 0 3px ${CURRENT_LINE}`,
        }}
      >
        <Todo />
      </main>
    </div>
  );
};

export default TodoList;

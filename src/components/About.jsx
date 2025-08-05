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

const About = () => {
  return (
    <div
      style={{
        backgroundColor: BACKGROUND,
        color: FOREGROUND,
        minHeight: "80vh",
        padding: "40px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        direction: "rtl",
        maxWidth: 800,
        margin: "40px auto",
        borderRadius: 12,
        boxShadow: `0 0 20px ${PURPLE}cc`,
      }}
    >
      <h1 style={{ color: ORANGE, marginBottom: 20 }}>درباره پروژه</h1>

      <h2 style={{ color: CYAN, marginBottom: 10 }}>
        Learning React with TopLearn
      </h2>
      <p style={{ fontSize: 18, lineHeight: 1.6, marginBottom: 20 }}>
        این ریپازیتوری شامل پروژه‌ها و تمرین‌های عملی است که من در جریان دوره
        React.js توسط یونس قربانی در TopLearn در حال انجام آنها هستم.
      </p>

      <h3 style={{ color: ORANGE, marginBottom: 10 }}>هدف اصلی</h3>
      <p style={{ fontSize: 18, lineHeight: 1.6, marginBottom: 20 }}>
        هدف اصلی این ریپازیتوری ارتقاء مهارت‌های من در React.js و توسعه مدرن
        فرانت‌اند است، با دنبال کردن دوره و ساخت پروژه‌های عملی.
      </p>

      <h3 style={{ color: ORANGE, marginBottom: 10 }}>محتویات</h3>
      <ul style={{ fontSize: 16, lineHeight: 1.5, marginBottom: 20 }}>
        <li>پروژه‌های مختلف React.js از دوره</li>
        <li>تمرین‌های عملی و مثال‌های واقعی</li>
        <li>یادداشت‌های شخصی، بهبود کد و آزمایش‌ها</li>
      </ul>

      <h3 style={{ color: ORANGE, marginBottom: 10 }}>
        تکنولوژی‌های استفاده شده
      </h3>
      <ul style={{ fontSize: 16, lineHeight: 1.5, marginBottom: 20 }}>
        <li>React.js</li>
        <li>JavaScript (نسخه ES6 و بالاتر)</li>
        <li>HTML و CSS یا styled-components</li>
        <li>Vite / Create React App</li>
        <li>React Router</li>
        <li>Redux / Context API (در صورت نیاز)</li>
        <li>Axios / Fetch API</li>
        <li>کتابخانه‌ها و ابزارهای مرتبط دیگر</li>
      </ul>

      <h3 style={{ color: ORANGE, marginBottom: 10 }}>نحوه استفاده</h3>
      <p style={{ fontSize: 18, lineHeight: 1.6, marginBottom: 20 }}>
        شما می‌توانید کدها را بررسی کرده، از آنها یاد بگیرید و برای پروژه‌های
        خودتان استفاده کنید. اگر باگ، پیشنهاد یا ایده‌ای دارید، خوشحال می‌شوم در
        ریپازیتوری issue یا pull request ارسال کنید.
      </p>
      <p
        style={{
          fontSize: 16,
          fontStyle: "italic",
          color: COMMENT,
          marginBottom: 20,
        }}
      >
        توجه: این ریپازیتوری فقط برای اهداف یادگیری است و ممکن است بخش‌هایی نیاز
        به بهینه‌سازی یا بازنویسی داشته باشند.
      </p>

      <h3 style={{ color: ORANGE, marginBottom: 10 }}>لینک‌ها</h3>
      <ul
        style={{
          listStyleType: "none",
          padding: 0,
          fontSize: 16,
          marginBottom: 40,
        }}
      >
        <li>
          <a
            href="https://github.com/AmirPhpDeveloper"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: GREEN, textDecoration: "underline" }}
          >
            پروفایل گیت‌هاب AmirPhpDeveloper
          </a>
        </li>
        <li>
          <a
            href="https://github.com/AmirPhpDeveloper/learning-reactjs"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: GREEN, textDecoration: "underline" }}
          >
            ریپازیتوری یادگیری React.js
          </a>
        </li>
      </ul>

      <p
        style={{
          fontSize: 14,
          color: COMMENT,
          marginTop: 30,
          textAlign: "center",
        }}
      >
        این پروژه با ❤️ توسط AmirPhpDeveloper ساخته شده است. موفق باشید!
      </p>
    </div>
  );
};

export default About;

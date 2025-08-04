import React from "react";
import books from "./../data/data";
import {
  BACKGROUND,
  PINK,
  FOREGROUND,
  CYAN,
  ORANGE,
  YELLOW,
  RED,
  PURPLE,
} from "../assets/colors";

const Books = ({ filter }) => {
  let filteredBooks = books;

  if (filter) {
    filteredBooks = filteredBooks.filter((book) =>
      book.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px", // فاصله بین کارت‌ها
        padding: "20px",
      }}
    >
      {filteredBooks.map((book) => (
        <div
          key={book.id}
          style={{
            backgroundColor: BACKGROUND,
            boxShadow: `0 6px 15px ${PINK}88`,
            borderRadius: "12px",
            maxWidth: 900,
            width: "100%",
            display: "flex",
            overflow: "hidden",
            color: FOREGROUND,
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            gap: "20px",
            flexWrap: "wrap", // اجازه می‌ده تو صفحه‌های کوچک زیر هم برن
          }}
        >
          {/* بخش متن سمت چپ */}
          <div
            style={{
              flex: "1 1 400px", // حداقل عرض 400px، قابل تغییر اندازه
              padding: "30px 40px",
              borderRight: `5px solid ${PURPLE}`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minWidth: 300,
              boxSizing: "border-box",
            }}
          >
            <h3
              style={{
                marginBottom: 15,
                color: ORANGE,
                fontWeight: "700",
                fontSize: "28px",
              }}
            >
              {book.name}
            </h3>
            <p
              style={{
                marginBottom: 25,
                lineHeight: 1.6,
                color: YELLOW,
                fontSize: 16,
              }}
            >
              {book.description}
            </p>
            <div
              style={{
                fontSize: "20px",
                fontWeight: "700",
                color: RED,
                backgroundColor: PURPLE + "22",
                padding: "8px 15px",
                borderRadius: "8px",
                width: "fit-content",
                boxShadow: `0 0 10px ${RED}88`,
                alignSelf: "flex-start",
              }}
            >
              قیمت: {book.price}
            </div>
          </div>

          {/* بخش عکس سمت راست */}
          <div
            style={{
              flex: "1 1 300px", // حداقل عرض 300px، قابل تغییر اندازه
              overflow: "hidden",
              minWidth: 200,
              maxHeight: 300,
              boxSizing: "border-box",
            }}
          >
            <img
              src={book.imageUrl}
              alt={book.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                filter: "drop-shadow(0 0 5px " + CYAN + ")",
                transition: "transform 0.3s ease",
                cursor: "pointer",
                borderRadius: "0 12px 12px 0",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Books;

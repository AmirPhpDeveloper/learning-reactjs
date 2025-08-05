import React, { useState } from "react";
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
import Filter from "./Filter";

const Books = ({ filter, onPriceFilter }) => {
  const [priceFilter, setPriceFilter] = useState("");

  // فیلتر کتاب‌ها بر اساس نام (ورودی والد) و در اینجا فقط نام
  let filteredBooks = filter
    ? books.filter((book) =>
        book.name.toLowerCase().includes(filter.toLowerCase())
      )
    : books;

  if (priceFilter) {
    const priceNum = Number(priceFilter);
    if (!isNaN(priceNum)) {
      filteredBooks = filteredBooks.filter(
        (book) => Number(book.price) <= priceNum
      );
    }
  }

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: BACKGROUND,
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      <Filter
        priceFilter={priceFilter}
        setPriceFilter={setPriceFilter}
      ></Filter>

      {/* لیست کتاب‌ها */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            style={{
              backgroundColor: BACKGROUND,
              boxShadow: `0 6px 15px ${PINK}88`,
              borderRadius: "12px",
              width: "calc(50% - 20px)",
              display: "flex",
              overflow: "hidden",
              color: FOREGROUND,
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              gap: "20px",
              minWidth: 300,
              boxSizing: "border-box",
              flexBasis: "calc(50% - 20px)",
            }}
          >
            {/* بخش متن سمت چپ */}
            <div
              style={{
                flex: 3,
                padding: "30px 40px",
                borderRight: `5px solid ${PURPLE}`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
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
                {"تومان"}
              </div>
            </div>

            {/* بخش عکس سمت راست */}
            <div
              style={{
                flex: 2,
                overflow: "hidden",
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
                  filter: `drop-shadow(0 0 5px ${CYAN})`,
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
    </div>
  );
};

export default Books;

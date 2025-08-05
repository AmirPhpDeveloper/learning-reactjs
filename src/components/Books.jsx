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
      {/* بخش فیلتر قیمت */}
      <div
        style={{
          marginBottom: 30,
          display: "flex",
          alignItems: "center",
          gap: 12,
          backgroundColor: PURPLE + "ee",
          padding: "12px 20px",
          borderRadius: "10px",
          boxShadow: `0 0 15px ${PURPLE}bb`,
          maxWidth: 400,
          marginLeft: "auto",
          marginRight: "auto",
          flexWrap: "nowrap",
          justifyContent: "center",
        }}
      >
        <label
          htmlFor="priceInput"
          style={{
            fontWeight: "700",
            fontSize: 16,
            color: YELLOW,
            minWidth: 70,
            whiteSpace: "nowrap",
          }}
        >
          قیمت تا:
        </label>

        <input
          type="number"
          id="priceInput"
          placeholder="مثلا 50000"
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
          style={{
            flexGrow: 1,
            padding: "10px 14px",
            fontSize: 16,
            borderRadius: "8px",
            border: `1.5px solid ${CYAN}`,
            backgroundColor: BACKGROUND,
            color: FOREGROUND,
            outline: "none",
            transition: "border-color 0.3s ease",
            minWidth: 140,
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = CYAN)}
          onBlur={(e) =>
            (e.currentTarget.style.borderColor = `1.5px solid ${CYAN}`)
          }
        />
      </div>

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

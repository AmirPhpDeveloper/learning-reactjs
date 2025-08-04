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
const BestBook = () => {
  const book = {
    name: "بیست هزار فرسنگ زیر دریا",
    description:
      "کتابی جذاب درباره ماجراجویی‌های دریایی و دنیای زیر آب که شما را به دنیایی ناشناخته می‌برد.",
    price: "45,000 تومان",
    imageUrl:
      "https://image.torob.com/base/images/g7/VZ/g7VZPQWRyF4dsTpx.jpg_/0x244.jpg",
  };
  return (
    <div
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
        <h2
          style={{
            marginBottom: 20,
            fontWeight: "bold",
            color: CYAN,
            textShadow: `0 0 5px ${PURPLE}`,
          }}
        >
          برترین کتاب هفته
        </h2>
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
      <div style={{ flex: 2, overflow: "hidden" }}>
        <img
          src={book.imageUrl}
          alt="کتاب"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            filter: "drop-shadow(0 0 5px " + CYAN + ")",
            transition: "transform 0.3s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.05)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>
    </div>
  );
};

export default BestBook;

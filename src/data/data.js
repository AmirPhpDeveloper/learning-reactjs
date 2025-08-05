const books = [
  {
    id: 1,
    name: "بیست هزار فرسنگ زیر دریا",
    description:
      "کتابی جذاب درباره ماجراجویی‌های دریایی و دنیای زیر آب که شما را به دنیایی ناشناخته می‌برد.",
    price: "45000",
    imageUrl:
      "https://image.torob.com/base/images/g7/VZ/g7VZPQWRyF4dsTpx.jpg_/0x244.jpg",
  },
  {
    id: 2,
    name: "صد سال تنهایی",
    description:
      "داستانی جذاب درباره تاریخچه یک خانواده و اتفاقات عجیب در طول نسل‌ها.",
    price: "38000",
    imageUrl: "https://img.ketabrah.ir/img/l/4914926097353970.jpg",
  },
  {
    id: 3,
    name: "شازده کوچولو",
    description: "داستانی شاعرانه و فلسفی درباره دوستی، عشق و معنای زندگی.",
    price: "22000",
    imageUrl:
      "https://cdn.niloofarpublications.com/wp-content/uploads/2021/05/31-2.jpg",
  },
  {
    id: 4,
    name: "کلیدر",
    description:
      "رمانی حماسی درباره زندگی مردم در کوهستان‌های ایران و داستانی پر از عشق و مبارزه.",
    price: "50000",
    imageUrl:
      "https://avanameh.com/medias/cache/images/2023/05/U9Cq8Q6JXsAVeTWBg4hDnL-large-400x560.jpg",
  },
  {
    id: 5,
    name: "ملت عشق",
    description: "داستانی عاشقانه و عرفانی در بستر زندگی مولانا و شمس تبریزی.",
    price: "42000",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2liJwxmqgKfxkXKzgdYS0lS_mc7iF88XxSA&s",
  },
  {
    id: 6,
    name: "کافکا در کرانه",
    description:
      "رمانی پیچیده و رمزآلود از هاروکی موراکامی با تم‌های فلسفی و ماورایی.",
    price: "55000",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk0xt1T1vp9jG7RfChhJxC92LFOLNCg21oWw&s",
  },
  {
    id: 7,
    name: "غرور و تعصب",
    description:
      "داستانی کلاسیک درباره عشق و روابط اجتماعی در جامعه انگلیس قرن نوزدهم.",
    price: "30000",
    imageUrl: "https://img.ketabrah.ir/img/l/8471413686274121.jpg",
  },
  {
    id: 8,
    name: "بیگانه",
    description: "رمانی فلسفی درباره پوچی زندگی و بی‌معنایی انسان.",
    price: "25000",
    imageUrl: "https://www.bennubook.com/Media/Book/1523247.jpg",
  },
  {
    id: 9,
    name: "بینوایان",
    description:
      "داستانی حماسی درباره فقر، عدالت و انسانیت در فرانسه قرن نوزدهم.",
    price: "60000",
    imageUrl: "https://img.ketabrah.ir/img/l/6615108459354620.jpg",
  },
  {
    id: 10,
    name: "مدیر یک دقیقه‌ای",
    description: "کتابی کاربردی درباره مدیریت و رهبری موثر در محیط کار.",
    price: "18000",
    imageUrl:
      "https://www.iranketab.ir/Images/ProductImages/60abae16be3d4a05bfc8e68a31d06fe9.jpg",
  },
  {
    id: 11,
    name: "هنر شفاف‌اندیشی",
    description:
      "مجموعه‌ای از نکات کاربردی برای تصمیم‌گیری بهتر در زندگی و کار.",
    price: "33000",
    imageUrl:
      "https://dkstatics-public.digikala.com/digikala-products/1d20db7010ed50a6edddae27e0b52faed594343d_1696055276.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
  },
  {
    id: 12,
    name: "قلعه حیوانات",
    description: "داستانی سیاسی و تمثیلی درباره انقلاب و قدرت.",
    price: "20000",
    imageUrl: "https://img.ketabrah.ir/img/l/1195983372329976.jpg",
  },
  {
    id: 13,
    name: "دنیای سوفی",
    description: "رمانی فلسفی درباره تاریخچه فلسفه و زندگی انسان.",
    price: "40000",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNerroBPPxAbCJoBahNjolEfreYuBxWmYHXw&s",
  },
  {
    id: 14,
    name: "ملت عشق",
    description: "روایتی عاشقانه و عرفانی درباره شمس تبریزی و مولانا.",
    price: "44000",
    imageUrl:
      "https://www.iranketab.ir/Images/ProductImages/f0f515bdd07f4e9dafa50ac82edd3da9.jpg",
  },
  {
    id: 15,
    name: "فرانکنشتاین",
    description: "داستانی علمی-تخیلی درباره خلق موجودی مصنوعی و عواقب آن.",
    price: "20000",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVfga9GH1CYxEz2dLzRUIvg5_cajeSG8Hgjg&s",
  },
  {
    id: 16,
    name: "دنیای قشنگ نو",
    description:
      "رمانی دیستوپیایی درباره جامعه‌ای کنترل‌شده و از دست رفته‌ی آزادی‌ها.",
    price: "35000",
    imageUrl:
      "https://www.iranketab.ir/Images/ProductImages/4540bc22e0a84758ad53dd3c01d09259.jpg",
  },
  {
    id: 17,
    name: "غرور و تعصب",
    description: "داستانی عاشقانه و اجتماعی از جین آستن.",
    price: "32000",
    imageUrl:
      "https://cdn.fidibo.com/phoenixpub/content/fc3c0287-cd7b-43a8-8162-7b642c138512/f44f6369-837a-4b6f-9b64-a1459a43a490.jpg",
  },
  {
    id: 18,
    name: "سقوط امپراتوری روم",
    description: "بررسی تاریخچه سقوط یکی از بزرگ‌ترین امپراتوری‌های جهان.",
    price: "40000",
    imageUrl: "https://img.ketabrah.ir/img/l/3402307385591784.jpg",
  },
  {
    id: 19,
    name: "تسخیرناپذیر",
    description: "زندگی‌نامه الهام‌بخش از یک ورزشکار بزرگ و موفق.",
    price: "27000",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKOPI5t55INlSsGSrDTbmQe9XX96UcMO8sAw&s",
  },
  {
    id: 20,
    name: "مردی به نام اوه",
    description: "داستانی تلخ و شیرین درباره زندگی مردی تنها و تغییراتش.",
    price: "30000",
    imageUrl: "https://img.ketabrah.ir/img/l/5188236767456125.jpg",
  },
];
export default books;

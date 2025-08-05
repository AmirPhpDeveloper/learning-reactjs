import React from "react";
import { BACKGROUND, CYAN, PURPLE, YELLOW, FOREGROUND } from "../assets/colors";

const Filter = ({ priceFilter, setPriceFilter }) => {
  return (
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
  );
};

export default Filter;

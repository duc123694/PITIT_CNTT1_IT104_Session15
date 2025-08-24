import React, { useState } from "react";

const Exercise02: React.FC = () => {
  const [color, setColor] = useState("#000000"); 
  const [submitColor, setSubmitColor] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitColor(color);
  };

  return (
    <div>
      <h2>
        Color: {submitColor && <span style={{ color: submitColor }}>{submitColor}</span>}
      </h2>
      <form onSubmit={handleSubmit}>
        <label>Màu sắc</label>
        <br />
        <input type="color" value={color} onChange={handleChange} />
        <br />
        <button type="submit">Submit</button>
      </form>

      {submitColor && (
        <div style={{ marginTop: "20px" }}>
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: submitColor,
              border: "1px solid #000",
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Exercise02;

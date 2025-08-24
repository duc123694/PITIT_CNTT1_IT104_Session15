import React, { useState } from "react";

const Exersice01: React.FC = () => {
  const [email, setEmail] = useState(""); 

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value); 
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    console.log("Email:", email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={handleChange}
        placeholder="Mời nhập email"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Exersice01;
import React, { useState } from "react";

const Home = () => {
  const [name, setName] = useState("");
  console.log("Name : - ", name);

  return (
    <>
      <div className="container">
        <h1>Home Page</h1>
        <input
          type="text"
          placeholder="Enter  Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className="bg-dark" style={{ color: "white" }}>
          Submit
        </button>
      </div>
    </>
  );
};

export default Home;

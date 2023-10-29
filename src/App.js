import "./App.css";
import React from 'react';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
function App() {
  return (
    <>
      <Header  title="Main Home Page" searchBar={true} />
      <Home />
      <Footer />
    </>
  );
}

export default App;

import "./App.css";
import React from 'react';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./page/Home";
function App() {
  return (
    <>
      <Header  title="Logo" searchBar={true} />
      <Home />
      <Footer />
    </>
  );
}

export default App;

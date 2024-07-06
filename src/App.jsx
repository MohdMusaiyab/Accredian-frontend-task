import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Footer from "./components/Footer";
import Home from "./pages/Home";

const App = () => {
  
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
       <Route path="/" element={<Home></Home>}></Route>
     
       
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Toaster} from "react-hot-toast"
import Home from './components/Home'
import Header from './components/Header'

import "./styles/app/app.scss";
import "./styles/colors/colors.scss"
import "./styles/header/header.scss"
import "./styles/home/home.scss"
import Cart from "./components/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;

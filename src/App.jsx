

import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Header from './components/Header'

import "./styles/app/app.scss";
import "./styles/colors/colors.scss"
import "./styles/header/header.scss"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

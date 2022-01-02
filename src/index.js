import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  Navigation,
  LiarsDice,
  Gruble,
  Hangman
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hh-apps" element={<Home />} />
      <Route path="/liars-dice" element={<LiarsDice />} />
      <Route path="/gruble" element={<Gruble />} />
      <Route path="/hangman" element={<Hangman />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

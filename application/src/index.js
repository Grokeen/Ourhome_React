import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

// 2401031844 뭐지? 왜 앞에 대문자를 사용하니까 돼????
import ItemList from "./shop/itemList";
import BarsketPage from "./shop/barsketPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";



// index.js -> ❌ App.js -> ./shop/
// index.js가 하는 일은 App.js의 내용을 -> public/index.html에 박아넣는 것.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // 2401031703 경로 설정을 위해 BrowserRouter를 감싸주었다.
  <BrowserRouter>
    {/* 헤더 설정 import 해서, 태그로 만들 수 있다. Switch는 각각 다르게 설정 가능하다. */}
    <Routes>
  <Route path="/" element={<ItemList />} />
  <Route path="barsketPage" element={<BarsketPage />} />
</Routes>

  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



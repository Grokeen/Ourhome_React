import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";


// -------------------------------------------------------------------------------
// desc    :    2024-01-03 17:03 경로 설정을 위해 BrowserRouter를 감싸주었다.
//              index.js -> ❌ App.js -> ./shop/
//              index.js가 하는 일은 App.js의 내용을 -> public/index.html에 박아넣는 것.
// -------------------------------------------------------------------------------
import { BrowserRouter} from "react-router-dom";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* 2024-12-21 김용록 : App.js 헤더/푸터 설정 */}
    <App/>
  </BrowserRouter>
);


reportWebVitals();



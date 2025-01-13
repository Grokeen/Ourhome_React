import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation(); // 현재 경로를 가져옴

  const isActive = (path) => {
    // 현재 경로가 path로 시작하면 활성화
    return location.pathname.startsWith(path) ? "on" : "";
  };

  return (
    <div className="left_nav" id="left_nav">
      <h2>
        마이페이지<p>Site Information</p>
      </h2>
      <ul className="sub_nav_ul">
        <li className={isActive("/mypage/joined")}>
          <Link
            to={"/mypage/joined"}
            style={{ textDecoration: "none" }}
            className="transition hover:bg-gray-100 rounded-full"
          >
            가입상품
          </Link>
        </li>
        <li className={isActive("/mypage/requested")}>
          <Link
            to={"/mypage/requested"}
            style={{ textDecoration: "none" }}
            className="transition hover:bg-gray-100 rounded-full"
          >
            청구내역
          </Link>
        </li>
        <li className={isActive("/mypage/transaction")}>
          <Link
            to={"/mypage/transaction"}
            style={{ textDecoration: "none" }}
            className="transition hover:bg-gray-100 rounded-full"
          >
            지급내역
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

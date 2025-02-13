import React from "react";
import A_Navbar from "../A_Navbar/A_Navbar";

const A_StockCheck = () => {
  return (
    <A_Navbar>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">창고관리</li>
          <li className="breadcrumb-item active" aria-current="page">
            재고조사
          </li>
        </ol>
      </nav>
    </A_Navbar>
  );
};

export default A_StockCheck;

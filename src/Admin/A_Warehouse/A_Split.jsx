import React from "react";
import A_Navbar from "../A_Navbar/A_Navbar";

const A_Split = () => {
  return (
    <A_Navbar>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">창고관리</li>
          <li className="breadcrumb-item active" aria-current="page">
            스플릿
          </li>
        </ol>
      </nav>
      <div className="card">
        <div className="card-body">
          <table className="table table-sm table-hover">
            <thead>
              <tr>
                <th>주문번호</th>
                <th>주문날짜</th>
                <th>스페이스코드</th>
                <th>성함</th>
                <th>송장번호</th>
                <th>분할수량</th>
                <th>위치</th>
                <th>상태</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </A_Navbar>
  );
};

export default A_Split;

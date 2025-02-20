import React from "react";
import A_Navbar from "../A_Navbar/A_Navbar";

const A_Qna = () => {
  return (
    <A_Navbar>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">고객</li>
          <li className="breadcrumb-item active" aria-current="page">
            문의답변
          </li>
        </ol>
      </nav>

      <div className="row">
        <div className="col-sm-3 mb-3">
          <div className="input-group input-group-sm">
            <select
              className="form-select form-select-sm me-2"
              aria-label="Default select example"
            >
              <option selected>필터(질문유형)</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <input type="text" className="form-control" />
            <button className="btn btn-outline-success">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body table-responsive text-nowrap">
          <table className="table table-sm table-hover">
            <thead>
              <tr>
                <th>질문유형</th>
                <th>제목</th>
                <th>질문등록일</th>
                <th>스페이스코드</th>
                <th>성함</th>
                <th>답변일</th>
                <th>담당자</th>
                <th>상태</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>질문유형</td>
                <td>제목</td>
                <td>질문등록일</td>
                <td>스페이스코드</td>
                <td>성함</td>
                <td>답변일</td>
                <td>담당자</td>
                <td>
                  <span className="badge text-bg-secondary">미완료</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </A_Navbar>
  );
};

export default A_Qna;

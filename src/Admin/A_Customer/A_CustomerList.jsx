import React from "react";
import A_Navbar from "../A_Navbar/A_Navbar";

const A_CustomerList = () => {
  return (
    <A_Navbar>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">고객</li>
          <li className="breadcrumb-item active" aria-current="page">
            회원목록
          </li>
        </ol>
      </nav>

      <div className="row mb-3">
        <div className="col-sm-6">
          <div className="d-flex">
            <select
              className="form-select form-select-sm me-2 w-25"
              aria-label="Default select example"
            >
              <option value="1">전체보기</option>
              <option value="2">VIP</option>
              <option value="3">마케팅동의</option>
            </select>

            <div className="input-group input-group-sm w-25 me-2">
              <input type="text" className="form-control" />
              <button className="btn btn-outline-success">
                <i className="bi bi-search"></i>
              </button>
            </div>
            <button className="btn btn-sm btn-success">
              <i class="bi bi-file-earmark-spreadsheet"></i> Download
            </button>
          </div>
        </div>
      </div>

      <div className="card rounded-4">
        <div className="card-header">
          <select
            className="form-select form-select-sm w-25"
            aria-label="Default select example"
          >
            <option selected>페이지 노출수량</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="card-body">
          <div className="table-responsive text-nowrap">
            <table className="table table-sm text-center">
              <thead>
                <tr>
                  <th>스페이스코드</th>
                  <th>성함</th>
                  <th>가입날짜</th>
                  <th>이메일</th>
                  <th>포인트</th>
                  <th>등급</th>
                  <th>마케팅동의</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>KB00001A</td>
                  <td>Quantino Abracadabra</td>
                  <td>2025-02-10 14:00</td>
                  <td>hohwang88@gamil.com</td>
                  <td>18</td>
                  <td>
                    <span className="badge text-bg-success">VIP</span>
                  </td>
                  <td>
                    <i class="bi bi-envelope-check text-success"></i>
                  </td>
                </tr>
                <tr>
                  <td>KB00001A</td>
                  <td>Quantino Abracadabra</td>
                  <td>2025-02-10 14:00</td>
                  <td>hohwang88@gamil.com</td>
                  <td>18</td>
                  <td>
                    <span className="badge text-bg-secondary">BASIC</span>
                  </td>
                  <td>
                    <i class="bi bi-x text-secondary"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </A_Navbar>
  );
};

export default A_CustomerList;

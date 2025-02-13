import React from "react";
import A_Navbar from "../A_Navbar/A_Navbar";

const A_Forwarded = () => {
  return (
    <A_Navbar>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">창고관리</li>
          <li className="breadcrumb-item active" aria-current="page">
            출고관리
          </li>
        </ol>
      </nav>
      <div className="row">
        <div className="col-sm-3">
          <div className="card">
            <div className="card-header">
              <div className="d-flex justify-content-between">
                <div>
                  <div className="input-group input-group-sm">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="출고번호, 내용"
                    />
                    <button className="btn btn-success">검색</button>
                  </div>
                </div>
                <div>
                  <select
                    className="form-select form-select-sm"
                    aria-label="Default select example"
                  >
                    <option selected>표시수량</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="card-body">
              <table className="table table-sm table-hover text-center">
                <thead>
                  <tr>
                    <th>출고번호</th>
                    <th>출고날짜</th>
                    <th>출고수량</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>250213A</td>
                    <td>2025-02-13</td>
                    <td>50</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-sm-9">
          <div className="card">
            <div className="card-header">
              <div className="input-group input-group-sm mb-2">
                {/* 1 */}
                <span className="input-group-text">1</span>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>상태선택</option>
                  <option value="1">보관</option>
                  <option value="2">출고</option>
                  <option value="3">폐기대상</option>
                  <option value="4">폐기</option>
                </select>

                {/* 2 */}
                <span className="input-group-text">2</span>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>페이지 표시수량</option>
                  <option value="1">10</option>
                  <option value="2">50</option>
                  <option value="3">전체보기</option>
                </select>

                {/* 3 */}
                <span className="input-group-text">3</span>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>배송사</option>
                  <option value="1">FEDEX</option>
                  <option value="2">UPS</option>
                  <option value="3">EMS</option>
                </select>
                <button className="btn btn-success">검색</button>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <div className="input-group input-group-sm">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Box Number"
                    />
                    <button className="btn btn-primary">선택</button>
                  </div>
                </div>
                <div>
                  <div className="input-group input-group-sm">
                    <span className="input-group-text me-2">선택수량 : </span>
                    <button className="btn btn-sm btn-primary me-2">
                      출고
                    </button>
                    <button className="btn btn-sm btn-danger">폐기</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <table className="table table-sm table-hover">
                <thead>
                  <tr>
                    <th>
                      <input type="checkbox" className="form-check" />
                    </th>
                    <th>박스번호</th>
                    <th>스페이스코드</th>
                    <th>성함</th>
                    <th>견적전송일</th>
                    <th>특송사</th>
                    <th>특송사 송장번호</th>
                    <th>상태</th>
                    <th>위치</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="checkbox" className="form-check" />
                    </td>
                    <td>SASFD87DS-01</td>
                    <td>KB00001A</td>
                    <td>Ariana Grande</td>
                    <td>2025-02-13 14:00:00</td>
                    <td>FEDEX</td>
                    <td>SD890879DFSGY</td>
                    <td>보관</td>
                    <td>A-01</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </A_Navbar>
  );
};

export default A_Forwarded;

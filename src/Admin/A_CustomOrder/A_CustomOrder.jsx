import React, { useState } from "react";
import A_Navbar from "../A_Navbar/A_Navbar";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import shopping from "../../assets/img/online-shopping.svg";
const A_CustomOrder = () => {
  return (
    <A_Navbar>
      <Breadcrumb>
        <Breadcrumb.Item href="/관리자_대시보드">대시보드</Breadcrumb.Item>
        <Breadcrumb.Item active>구매대행 요청서</Breadcrumb.Item>
      </Breadcrumb>

      {/* 데스크탑 현황 */}
      <div className="card info-card revenue-card mb-3 d-sm-block d-none">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
              <img src={shopping} className="card-img"></img>
            </div>
            <div className="d-flex justify-content-around w-100">
              <div className="ps-3 text-center btn btn-sm">
                <h6>
                  <a className="fw-bold d-block text-decoration-none text-dark d-none d-sm-block">
                    145
                  </a>
                </h6>
                <span className="text-success small pt-1 fw-bold">요청</span>{" "}
              </div>
              <div className="ps-3 text-center btn btn-sm">
                <h6>
                  <a className="fw-bold d-block text-decoration-none text-dark d-none d-sm-block">
                    145
                  </a>
                </h6>
                <span className="text-success small pt-1 fw-bold">
                  결제대기
                </span>{" "}
              </div>
              <div className="ps-3 text-center btn btn-sm">
                <h6>
                  <a className="fw-bold d-block text-decoration-none text-dark d-none d-sm-block">
                    145
                  </a>
                </h6>
                <span className="text-success small pt-1 fw-bold">
                  결제완료
                </span>{" "}
              </div>
              <div className="ps-3 text-center btn btn-sm">
                <h6>
                  <a className="fw-bold d-block text-decoration-none text-dark d-none d-sm-block">
                    145
                  </a>
                </h6>
                <span className="text-success small pt-1 fw-bold">
                  주문완료
                </span>{" "}
              </div>
              <div className="ps-3 text-center btn btn-sm">
                <h6>
                  <a className="fw-bold d-block text-decoration-none text-dark d-none d-sm-block">
                    145
                  </a>
                </h6>
                <span className="text-success small pt-1 fw-bold">취소</span>{" "}
              </div>
              <div className="ps-3 text-center btn btn-sm">
                <h6>
                  <a className="fw-bold d-block text-decoration-none text-dark d-none d-sm-block">
                    145
                  </a>
                </h6>
                <span className="text-success small pt-1 fw-bold">
                  전체보기
                </span>{" "}
              </div>
              <div className="ps-3 text-center d-flex align-items-center">
                <div className="input-group input-group-sm">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="SpaceCode, TrackingNum"
                  />
                  <button className="btn btn-outline-success">
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 📌 데스크탑 테이블 (d-none d-md-table) */}
      <div className="card d-none d-sm-block">
        <div className="card-header">
          <div className="row">
            <div className="col-sm-3">
              <select
                className="form-select form-select-sm"
                aria-label="Default select example"
              >
                <option selected>전체보기</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
        <div className="card-body">
          <table className="table table-bordered text-center">
            <thead>
              <tr>
                <th>주문번호</th>
                <th>주문일</th>
                <th>스페이스코드</th>
                <th>상품합계</th>
                <th>상태</th>
                <th>확인요청</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>S250213A01</td>
                <td>2025-02-13 14:00:00</td>
                <td>KB00001A</td>
                <td>120000</td>
                <td>
                  <a href="/구매대행_요청">
                    <span className="badge text-bg-secondary">요청</span>
                  </a>
                </td>
                <td>-</td>
              </tr>
              <tr>
                <td>S250213A01</td>
                <td>2025-02-13 14:00:00</td>
                <td>KB00001A</td>
                <td>120000</td>
                <td>
                  <a href="/구매대행_결제대기">
                    <span className="badge text-bg-info">결제대기</span>
                  </a>
                </td>
                <td>
                  <i className="bi bi-check text-success"></i>
                </td>
              </tr>
              <tr>
                <td>S250213A01</td>
                <td>2025-02-13 14:00:00</td>
                <td>KB00001A</td>
                <td>120000</td>
                <td>
                  <a href="/구매대행_결제대기">
                    <span className="badge text-bg-info">결제대기</span>
                  </a>
                </td>
                <td>-</td>
              </tr>
              <tr>
                <td>S250213A01</td>
                <td>2025-02-13 14:00:00</td>
                <td>KB00001A</td>
                <td>120000</td>
                <td>
                  <a href="/구매대행_결제완료">
                    <span className="badge text-bg-primary">결제완료</span>
                  </a>
                </td>
                <td>-</td>
              </tr>
              <tr>
                <td>S250213A01</td>
                <td>2025-02-13 14:00:00</td>
                <td>KB00001A</td>
                <td>120000</td>
                <td>
                  <a href="/구매대행_주문완료">
                    <span className="badge text-bg-warning">주문완료</span>
                  </a>
                </td>
                <td>-</td>
              </tr>
              <tr>
                <td>S250213A01</td>
                <td>2025-02-13 14:00:00</td>
                <td>KB00001A</td>
                <td>120000</td>
                <td>
                  <a href="/구매대행_취소">
                    <span className="badge text-bg-danger">취소</span>
                  </a>
                </td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 모바일 현황 */}
      <div className="card d-sm-none mb-2">
        <div className="card-body">
          <table className="table table-sm table-hover">
            <tbody>
              <tr>
                <th>요청</th>
                <td>145</td>
              </tr>
              <tr>
                <th>결제대기</th>
                <td>145</td>
              </tr>
              <tr>
                <th>결제완료</th>
                <td>145</td>
              </tr>
              <tr>
                <th>주문완료</th>
                <td>145</td>
              </tr>
              <tr>
                <th>취소</th>
                <td>145</td>
              </tr>
              <tr>
                <th>전체보기</th>
                <td>145</td>
              </tr>
            </tbody>
          </table>
          <div className="input-group input-group-sm">
            <input
              type="text"
              className="form-control"
              placeholder="주문번호, 스페이스코드"
            />
            <button className="btn btn-success">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>
      </div>

      {/* 📌 모바일 카드 리스트 (d-md-none) */}
      <div className="d-md-none">
        <div className="card">
          <div className="card-body">
            <select
              className="form-select form-select-sm mb-2"
              aria-label="Default select example"
            >
              <option value="1">30개</option>
              <option value="2">50개</option>
              <option value="3">100개</option>
              <option value="4">전체보기</option>
            </select>
          </div>
        </div>
      </div>
    </A_Navbar>
  );
};

export default A_CustomOrder;

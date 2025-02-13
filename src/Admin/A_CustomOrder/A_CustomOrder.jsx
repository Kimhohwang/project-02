import React, { useState } from "react";
import A_Navbar from "../A_Navbar/A_Navbar";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import orders from "./orders"; // 🔥 주문 데이터 불러오기

import RequestDetailModal from "./Modals/RequestDetailModal";
import PaymentPendingModal from "./Modals/PaymentPendingModal";
import PaymentCompleteModal from "./Modals/PaymentCompleteModal";
import OrderCompleteModal from "./Modals/OrderCompleteModal";
import CancelDetailModal from "./Modals/CancelDetailModal";
import shopping from "../../assets/img/online-shopping.svg";
const A_CustomOrder = () => {
  // 선택된 주문 및 모달 상태 관리
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // 주문 클릭 시 모달 표시
  const handleRowClick = (order) => {
    setSelectedOrder(order);
    setSelectedStatus(order.상태);
    setShowModal(true);
  };

  // 모달 닫기
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedOrder(null);
    setSelectedStatus(null);
  };

  return (
    <A_Navbar>
      <Breadcrumb>
        <Breadcrumb.Item href="/관리자_대시보드">대시보드</Breadcrumb.Item>
        <Breadcrumb.Item active>구매대행 요청서</Breadcrumb.Item>
      </Breadcrumb>

      <div className="row">
        {/* 검색바 및 필터 */}
        <div className="col-sm-3 mb-3">
          <div className="card">
            <div className="card-body">
              <div className="input-group input-group-sm mb-2">
                <span className="input-group-text">1</span>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>상태 선택</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <div className="input-group input-group-sm">
                <span className="input-group-text">2</span>
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

        {/* 카드 */}
        <div className="col-sm-9 mb-3">
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
                    <span className="text-success small pt-1 fw-bold">
                      요청
                    </span>{" "}
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
                </div>
              </div>
            </div>
          </div>
          {/* 모바일 현황 */}
          <div className="card d-sm-none">
            <div className="card-body">
              <table className="table table-sm table-hover">
                <tbody>
                  <tr>
                    <th>요청</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>결제대기</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>결제완료</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>주문완료</th>
                    <td></td>
                  </tr>
                </tbody>
              </table>
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
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => {
                // 🔥 상품합계 재계산: 각 상품의 (수량 * 단가) 합산
                const totalAmount = order.상품상세정보.reduce(
                  (sum, item) => sum + item.수량 * item.단가,
                  0
                );

                return (
                  <tr
                    key={index}
                    onClick={() => handleRowClick(order)}
                    style={{ cursor: "pointer" }}
                  >
                    <td>{order.주문번호}</td>
                    <td>{order.주문일}</td>
                    <td>{order.스페이스코드}</td>
                    <td>{totalAmount.toLocaleString()} 원</td>{" "}
                    {/* 🔥 상품합계 자동 계산 */}
                    <td>
                      <span className={`badge text-bg-${order.상태색}`}>
                        {order.상태}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* 📌 모바일 카드 리스트 (d-md-none) */}
      <div className="d-md-none">
        <div className="mb-2">
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
        {orders.map((order, index) => {
          // 🔥 상품합계 재계산: 각 상품의 (수량 * 단가) 합산
          const totalAmount = order.상품상세정보.reduce(
            (sum, item) => sum + item.수량 * item.단가,
            0
          );

          return (
            <div
              key={index}
              className="card mb-2"
              onClick={() => handleRowClick(order)}
              style={{ cursor: "pointer" }}
            >
              <div className="card-body">
                <h5 className="card-title">주문번호: {order.주문번호}</h5>
                <p className="card-text">
                  <strong>주문일:</strong> {order.주문일} <br />
                  <strong>스페이스코드:</strong> {order.스페이스코드} <br />
                  <strong>상품합계:</strong> {totalAmount.toLocaleString()} 원
                </p>
                <span className={`badge text-bg-${order.상태색}`}>
                  {order.상태}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* 상태별 모달 */}
      {selectedOrder && showModal && (
        <>
          {selectedStatus === "요청" && (
            <RequestDetailModal
              show={true}
              order={selectedOrder}
              handleClose={handleCloseModal}
            />
          )}
          {selectedStatus === "결제대기" && (
            <PaymentPendingModal
              show={true}
              order={selectedOrder}
              handleClose={handleCloseModal}
            />
          )}
          {selectedStatus === "결제완료" && (
            <PaymentCompleteModal
              show={true}
              order={selectedOrder}
              handleClose={handleCloseModal}
            />
          )}
          {selectedStatus === "주문완료" && (
            <OrderCompleteModal
              show={true}
              order={selectedOrder}
              handleClose={handleCloseModal}
            />
          )}
          {selectedStatus === "취소" && (
            <CancelDetailModal
              show={true}
              order={selectedOrder}
              handleClose={handleCloseModal}
            />
          )}
        </>
      )}
    </A_Navbar>
  );
};

export default A_CustomOrder;

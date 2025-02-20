import React, { useState, useEffect } from "react";
import A_Navbar from "../../A_Navbar/A_Navbar";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import * as bootstrap from "bootstrap"; // Bootstrap 전체 import
import Toast from "react-bootstrap/Toast";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const CustomOrder01 = () => {
  const [showFanCall, setShowFanCall] = useState(false);
  const [showA, setShowA] = useState(true);

  const toggleShowA = () => setShowA(!showA);

  useEffect(() => {
    // Bootstrap 툴팁 초기화
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map((tooltipTriggerEl) => {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  // 링크 클릭 핸들러 (새 창 열기)
  const handleLinkClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <A_Navbar>
      <h5 className="fw-bold">구매대행 주문서</h5>
      <div className="row">
        {/* 주문정보 */}
        <div className="col-sm-9 mb-3">
          <div className="card rounded-4">
            <div className="card-body bg-customRequest rounded-4">
              <h5 className="mb-3">주문번호: #C0000005</h5>
              <span className="badge text-bg-light rounded-5 mb-2">요청서</span>
              <p className="form-text">2025. 02. 20 오후 01:06:00</p>
            </div>
          </div>
        </div>

        {/* 사용자 정보 */}
        <div className="col-sm-3 mb-3">
          <div className="card rounded-4">
            <div className="card-body rounded-4">
              <h5 className="fw-bold">사용자</h5>
              <table className="table table-sm">
                <tbody>
                  <tr>
                    <td>스페이스코드</td>
                    <th className="text-end">KB000034</th>
                  </tr>
                  <tr>
                    <td>이름</td>
                    <th className="text-end">이진재</th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 상품목록 */}
        <div className="col-sm-9">
          <div className="card rounded-4">
            <div className="card-body rounded-4">
              <h5 className="fw-bold mb-3">상품 목록</h5>
              <div className="row">
                <div className="d-flex align-items-center mb-2">
                  <h6 className="me-4">#C0000005-01</h6>
                  <button
                    type="button"
                    className="badge text-bg-primary border-0 rounded-3"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-custom-class="custom-tooltip"
                    data-bs-title="https://shop.weverse.io/ko/shop/KRW/artists/3/sales/35730"
                    onClick={() =>
                      handleLinkClick(
                        "https://shop.weverse.io/ko/shop/KRW/artists/3/sales/35730"
                      )
                    }
                  >
                    구매처<i class="bi bi-chevron-right"></i>
                  </button>
                </div>
                <div className="col-sm-9 border-end">
                  <table className="table table-sm">
                    <tbody>
                      <tr>
                        <th>상품명:</th>
                        <th>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </th>
                      </tr>
                      <tr>
                        <th>품목:</th>
                        <th>
                          <select
                            className="form-select form-select-sm"
                            aria-label="Default select example"
                          >
                            <option selected>Select</option>
                            <option value="1">10%</option>
                            <option value="2">9%</option>
                          </select>
                        </th>
                      </tr>
                      <tr>
                        <th>옵션:</th>
                        <th>
                          <div className="input-group input-group-sm">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                            />
                            <input
                              type="text"
                              className="form-control form-control-sm"
                            />
                          </div>
                        </th>
                      </tr>
                      <tr>
                        <th>주문번호:</th>
                        <th>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-sm-3">
                  <table className="table table-sm">
                    <tbody>
                      <tr>
                        <th>수량</th>
                        <th>
                          <input
                            type="number"
                            className="form-control form-control-sm"
                          />
                        </th>
                      </tr>
                      <tr>
                        <th>단가</th>
                        <th>
                          <input
                            type="number"
                            className="form-control form-control-sm"
                          />
                        </th>
                      </tr>
                      <tr>
                        <th>배송비</th>
                        <th>
                          <input
                            type="number"
                            className="form-control form-control-sm"
                          />
                        </th>
                      </tr>
                      <tr>
                        <th>합계</th>
                        <th>
                          <input
                            type="number"
                            className="form-control form-control-sm"
                          />
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 견적서 */}
        <div className="col-sm-3">
          <div className="card rounded-4">
            <div className="card-body rounded-4">
              <h5 className="fw-bold mb-3">견적서</h5>
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th></th>
                    <th>KRW</th>
                    <th>USD</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>총 상품 가격</th>
                    <th>
                      <input className="form-control form-control-sm" />
                    </th>
                    <th>
                      <input className="form-control form-control-sm" />
                    </th>
                  </tr>
                  <tr>
                    <th>총 국내 배송비</th>
                    <th>
                      <input className="form-control form-control-sm" />
                    </th>
                  </tr>
                  <tr>
                    <th></th>
                    <th>
                      <input className="form-control form-control-sm" />
                    </th>
                  </tr>
                  <tr>
                    <th>총 상품 가격</th>
                    <th>
                      <input className="form-control form-control-sm" />
                    </th>
                  </tr>
                </tbody>
              </table>
              <hr />
              <table className="table table-sm">
                <tbody>
                  <tr>
                    <th>총 결제 가격</th>
                    <td></td>
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

export default CustomOrder01;

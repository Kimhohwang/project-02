import React, { useState } from "react";
import A_Navbar from "../../A_Navbar/A_Navbar";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const CustomOrder04 = () => {
  const [showFanCall, setShowFanCall] = useState(false);

  return (
    <A_Navbar>
      <Breadcrumb>
        <Breadcrumb.Item href="/관리자_대시보드">대시보드</Breadcrumb.Item>
        <Breadcrumb.Item href="/관리자_구매요청서">구매요청서</Breadcrumb.Item>
        <Breadcrumb.Item active>S250213A01 (주문완료) </Breadcrumb.Item>
      </Breadcrumb>
      <div className="row">
        <div
          className="col-sm-7"
          style={{ maxHeight: "650px", overflow: "auto" }}
        >
          <div className="card mb-2">
            <div className="card-header d-flex justify-content-between align-items-center">
              <p className="form-text">S250213A01-01</p>
              <div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                    checked
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    구매가능
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    수량제한
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio3"
                    value="option3"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio3">
                    구매불가
                  </label>
                </div>
              </div>
            </div>
            <div className="card-body">
              <table
                className="table table-sm table-hover text-center"
                style={{ tableLayout: "fixed", width: "100%" }}
              >
                <tbody>
                  <tr>
                    <th>품목</th>
                    <td>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Dolls"
                      />
                    </td>
                    <th>상품명</th>
                    <td>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="mini minini PLUSH CHILL BREAK"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>옵션1</th>
                    <td>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Shooky"
                      />
                    </td>
                    <th>옵션2</th>
                    <td>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>수량</th>
                    <td>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="3"
                      />
                    </td>
                    <th>단가</th>
                    <td>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="13000"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>국내배송비</th>
                    <td>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                      />
                    </td>
                    <th>링크</th>
                    <td style={{ overflow: "auto", whiteSpace: "nowrap" }}>
                      <a
                        href="https://linefriendssquare.com/en/products/bt21-shooky-mini-minini-plush-chill-break"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://linefriendssquare.com/en/products/bt21-shooky-mini-minini-plush-chill-break
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={4}>
                      <button
                        className="btn btn-outline-primary btn-sm"
                        onClick={() => setShowFanCall(!showFanCall)}
                      >
                        팬콜 {showFanCall ? "숨기기" : "보기"}
                      </button>
                    </th>
                  </tr>
                  {showFanCall && (
                    <>
                      <tr>
                        <th>성함</th>
                        <td>Ariana Grande</td>
                        <th>생년월일</th>
                        <td>2025-02-13</td>
                      </tr>
                      <tr>
                        <th>이메일</th>
                        <td>grande@gmail.com</td>
                        <th>연락처</th>
                        <td>82+ 01082787844</td>
                      </tr>
                      <tr>
                        <th>국가</th>
                        <td>Mexico</td>
                        <th>카카오톡</th>
                        <td>kakao ID</td>
                      </tr>
                      <tr>
                        <th>라인</th>
                        <td>Line ID</td>
                      </tr>
                    </>
                  )}
                  <tr>
                    <th>타사 주문번호</th>
                    <td colSpan={3}>
                      <div className="input-group input-group-sm mb-1">
                        <span className="input-group-text">주문번호</span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="ABC1"
                          disabled
                        />
                        <span className="input-group-text">수량</span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="2"
                          disabled
                        />
                        <button className="btn text-danger">
                          <i className="bi bi-x"></i>
                        </button>
                      </div>
                      <div className="input-group input-group-sm">
                        <span className="input-group-text">주문번호</span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="ABC2"
                          disabled
                        />
                        <span className="input-group-text">수량</span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="1"
                          disabled
                        />
                        <button className="btn text-danger">
                          <i className="bi bi-x"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-sm-5">
          {/* 주문정보 */}
          <div className="card mb-3">
            <div className="card-body">
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th>주문번호</th>
                    <th>주문날짜</th>
                    <th>스페이스코드</th>
                    <th>성함</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>S250213A01</td>
                    <td>2025-02-13</td>
                    <td>KB00001A</td>
                    <td>Ariana Grande</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 견적작성 */}
          <div className="card mb-3">
            <div className="card-body">
              <table className="table table-sm table-hover">
                <thead>
                  <tr>
                    <th>적용환율: 1400</th>
                    <th>KRW</th>
                    <th>USD</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>상품합계</th>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th>
                      <select
                        class="form-select form-select-sm"
                        aria-label="Default select example"
                      >
                        <option selected>직접입력</option>
                        <option value="1">10% = 10% 계산금액</option>
                        <option value="2">8% = 8% 계산금액</option>
                        <option value="3">5% = 5% 계산금액</option>
                      </select>
                    </th>
                    <td>
                      <input
                        type="number"
                        className="form-control form-control-sm"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control form-control-sm"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>국내배송비</th>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th>견적합계</th>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* 결제정보 */}
          <div className="card">
            <div className="card-body">
              <table className="table table-sm">
                <tbody>
                  <tr>
                    <th>환불방법</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>결제수단</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>포인트할인금액</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>쿠폰할인금액</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>결제금액</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>환불수단</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>환불금액</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>은행</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>예금주</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>계좌번호</th>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* 고객에게 보내는 메시지 */}
          <div className="card mb-3">
            <div className="card-body">
              <textarea
                className="form-control"
                placeholder="고객에게 보내는 메시지"
              />
            </div>
            <div className="card-footer d-flex justify-content-end">
              <button className="btn btn-outline-danger btn-sm me-2">
                전체환불
              </button>
              <button className="btn btn-outline-danger btn-sm me-2">
                부분환불
              </button>
              <button className="btn btn-secondary btn-sm">닫기</button>
            </div>
          </div>
        </div>
      </div>
    </A_Navbar>
  );
};

export default CustomOrder04;

import React, { useState, useRef } from "react";
import GenericModal from "./GenericModal";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";

const PaymentPendingModal = ({ show, order, handleClose }) => {
  // 🔥 Toast 상태 관리
  const [showToast, setShowToast] = useState(false);
  const [toastData, setToastData] = useState(null);
  const [toastPosition, setToastPosition] = useState({ top: 0, left: 0 });

  // 🔥 버튼 클릭 시 Toast 표시 및 위치 설정
  const handleFanCallClick = (e, 팬콜정보) => {
    if (팬콜정보) {
      setToastData(팬콜정보);
      setShowToast(true);

      // 버튼 위치 가져오기
      const buttonRect = e.target.getBoundingClientRect();
      setToastPosition({
        top: buttonRect.bottom + window.scrollY + 5, // 버튼 바로 아래
        left: buttonRect.left + window.scrollX, // 버튼 위치에 맞춤
      });
    }
  };

  return (
    <GenericModal
      show={show}
      handleClose={handleClose}
      title="결제대기 상세 정보"
    >
      {!order ? (
        <div className="text-center py-3">요청 정보를 불러올 수 없습니다.</div>
      ) : (
        <div className="row mb-2">
          <div className="col-sm-9">
            <div className="card mb-2">
              <div className="card-body d-sm-none">
                <table className="table table-sm">
                  <tbody>
                    <tr>
                      <th>주문번호</th>
                      <td>{order.주문번호}</td>
                    </tr>
                    <tr>
                      <th>주문일</th>
                      <td>{order.주문일}</td>
                    </tr>
                    <tr>
                      <th>스페이스코드</th>
                      <td>{order.스페이스코드}</td>
                    </tr>
                    <tr>
                      <th>성함</th>
                      <td>{order.성함}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* 모바일 상품상세정보 */}
            {order.상품상세정보.map((item, index) => (
              <div className="card mb-3 d-sm-none" key={index}>
                <div className="card-body">
                  <table className="table table-sm table-hover">
                    <thead>
                      <tr></tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>상품번호</th>
                        <td>{item.상품번호}</td>
                      </tr>
                      <tr>
                        <th>품목</th>
                        <td>{item.품목}</td>
                      </tr>
                      <tr>
                        <th>상품명</th>
                        <td>{item.상품명}</td>
                      </tr>
                      <tr>
                        <th>옵션</th>
                        <td>{item.옵션}</td>
                      </tr>
                      <tr>
                        <th>수량</th>
                        <td>{item.수량}</td>
                      </tr>
                      <tr>
                        <th>단가</th>
                        <td>{item.단가.toLocaleString()} 원</td>
                      </tr>
                      <tr>
                        <th>링크</th>
                        <td>
                          <a href="#">링크</a>
                        </td>
                      </tr>
                      <tr>
                        <th>팬콜유무</th>
                        <td>
                          <button
                            type="button"
                            className="btn btn-sm"
                            onClick={(e) =>
                              handleFanCallClick(e, item.팬콜정보)
                            }
                          >
                            {item.팬콜 ? (
                              <span className="badge text-bg-success">YES</span>
                            ) : (
                              <span className="badge text-bg-secondary">
                                NO
                              </span>
                            )}
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th colSpan={2}>팬콜정보</th>
                      </tr>
                      <tr>
                        <th>이름</th>
                        <td></td>
                      </tr>
                      <tr>
                        <th>국가</th>
                        <td></td>
                      </tr>
                      <tr>
                        <th>연락처</th>
                        <td></td>
                      </tr>
                      <tr>
                        <th>국내배송비</th>
                        <td>
                          <input
                            type="number"
                            className="form-control form-control-sm"
                            placeholder="5000"
                          />
                        </td>
                      </tr>
                      <tr>
                        <th colSpan={3}>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio1"
                              value="option1"
                            />
                            <label
                              className="form-check-label"
                              for="inlineRadio1"
                            >
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
                            <label
                              className="form-check-label"
                              for="inlineRadio2"
                            >
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
                            <label
                              className="form-check-label"
                              for="inlineRadio3"
                            >
                              품절
                            </label>
                          </div>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
            {/* 데스크탑 상품상세정보 */}
            {order.상품상세정보.map((item, index) => (
              <div className="card mb-3 d-none d-sm-block" key={index}>
                <div className="card-body">
                  <table className="table table-sm table-hover">
                    <thead>
                      <tr className="table-light">
                        <th>상품번호</th>
                        <th>{item.상품번호}</th>
                        <th colSpan={5}>
                          <div className="d-flex justify-content-between">
                            <div className="input-group input-group-sm w-50">
                              <span className="input-group-text">
                                국내배송비
                              </span>

                              <input
                                type="number"
                                className="form-control form-control-sm"
                                placeholder="5000"
                              />
                              <span className="input-group-text">원</span>
                            </div>
                            <div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
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
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
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
                                <label
                                  className="form-check-label"
                                  for="inlineRadio3"
                                >
                                  구매불가
                                </label>
                              </div>
                            </div>
                          </div>
                        </th>
                      </tr>
                      <tr>
                        <th>품목</th>
                        <th>상품명</th>
                        <th>옵션</th>
                        <th>수량</th>
                        <th>단가</th>
                        <th>링크</th>
                        <th>팬콜유무</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{item.품목}</td>
                        <td>{item.상품명}</td>
                        <td>{item.옵션}</td>
                        <td>{item.수량}</td>
                        <td>{item.단가.toLocaleString()} 원</td>
                        <td>
                          <a href="#">링크</a>
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-sm"
                            onClick={(e) =>
                              handleFanCallClick(e, item.팬콜정보)
                            }
                          >
                            {item.팬콜 ? (
                              <span className="badge text-bg-success">YES</span>
                            ) : (
                              <span className="badge text-bg-secondary">
                                NO
                              </span>
                            )}
                          </button>
                        </td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          <div className="col-sm-3">
            <div className="card mb-2 d-none d-sm-block">
              <div className="card-body">
                <table className="table table-sm">
                  <tbody>
                    <tr>
                      <th>주문번호</th>
                      <td>{order.주문번호}</td>
                    </tr>
                    <tr>
                      <th>주문일</th>
                      <td>{order.주문일}</td>
                    </tr>
                    <tr>
                      <th>스페이스코드</th>
                      <td>{order.스페이스코드}</td>
                    </tr>
                    <tr>
                      <th>성함</th>
                      <td>{order.성함}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-body">
                <table className="table table-sm text-nowrap">
                  <tbody>
                    <tr>
                      <th>상품합계</th>
                      <td colSpan={2}></td>
                    </tr>
                    <tr>
                      <th>서비스비용</th>
                      <td>
                        <div className="input-group input-group-sm w-50">
                          <input
                            type="number"
                            className="form-control form-control-sm"
                          />
                          <span className="input-group-text">%</span>
                        </div>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>국내배송비</th>
                      <td colSpan={2}></td>
                    </tr>
                    <tr>
                      <th>견적합계</th>
                      <td colSpan={2}></td>
                    </tr>
                    <tr>
                      <th>결제마감</th>
                      <td colSpan={2}>
                        <div className="input-group input-group-sm w-50">
                          <input type="number" className="form-control" />
                          <span className="input-group-text">시간</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-body">
                <textarea
                  className="form-control"
                  placeholder="고객에게 보내는 메시지"
                ></textarea>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-around">
                  <button className="btn btn-outline-danger">취소</button>
                  <button className="btn btn-outline-success">재전송</button>
                  <button className="btn btn-outline-secondary">닫기</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 🔥 버튼 바로 아래에 위치하는 Toast */}
      {showToast && (
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          style={{
            position: "absolute",
            top: `${toastPosition.top}px`,
            left: `${toastPosition.left}px`,
            zIndex: 1050,
          }}
        >
          <Toast.Header>
            <strong className="me-auto">팬콜 정보</strong>
          </Toast.Header>
          <Toast.Body>
            {toastData ? (
              <>
                <strong>이름:</strong> {toastData.이름} <br />
                <strong>국가:</strong> {toastData.국가} <br />
                <strong>연락처:</strong> {toastData.연락처}
              </>
            ) : (
              "팬콜 정보 없음"
            )}
          </Toast.Body>
        </Toast>
      )}
    </GenericModal>
  );
};

export default PaymentPendingModal;

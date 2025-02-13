import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import A_Navbar from "../A_Navbar/A_Navbar";

const A_LostProducts = () => {
  // 모달 상태 관리
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null); // 선택된 행 데이터

  // 모달1 (등록)
  const handleShowModal1 = () => setShowModal1(true);
  const handleCloseModal1 = () => setShowModal1(false);

  // 모달2 (테이블 행 클릭)
  const handleShowModal2 = (rowData) => {
    setSelectedRow(rowData);
    setShowModal2(true);
  };
  const handleCloseModal2 = () => setShowModal2(false);

  return (
    <A_Navbar>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">창고관리</li>
          <li className="breadcrumb-item active" aria-current="page">
            분실신고
          </li>
        </ol>
      </nav>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-2 mb-3">
              <div className="card">
                <div className="card-body">
                  <p className="form-text">필터 및 검색</p>
                  <div className="input-group input-group-sm mb-2">
                    <span className="input-group-text">1</span>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>표시수량</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="input-group input-group-sm mb-2">
                    <span className="input-group-text">2</span>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>상태</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="input-group input-group-sm mb-2">
                    <span className="input-group-text">3</span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="스페이스코드"
                    />
                    <button className="btn btn-success">검색</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-2 mb-3">
              <div className="card">
                <div className="card-body">
                  <p className="form-text">배송조회</p>
                  <a href="#" className="btn btn-sm btn-outline-secondary m-1">
                    CJ대한통운
                  </a>
                  <a href="#" className="btn btn-sm btn-outline-secondary m-1">
                    우체국
                  </a>
                  <a href="#" className="btn btn-sm btn-outline-secondary m-1">
                    롯데
                  </a>
                  <a href="#" className="btn btn-sm btn-outline-secondary m-1">
                    한진
                  </a>
                  <a href="#" className="btn btn-sm btn-outline-secondary m-1">
                    로젠
                  </a>
                  <a href="#" className="btn btn-sm btn-outline-secondary m-1">
                    경동
                  </a>
                  <a href="#" className="btn btn-sm btn-outline-secondary m-1">
                    합동
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-3 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <p className="form-text">예상배송사</p>
                    <button
                      className="btn btn-sm btn-outline-primary"
                      onClick={handleShowModal1}
                    >
                      등록
                    </button>
                  </div>
                  <table className="table table-sm table-hover">
                    <thead>
                      <tr>
                        <th>사이트</th>
                        <th>예상배송사</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Weverse</td>
                        <td>CJ 대한통운</td>
                      </tr>
                      <tr>
                        <td>JYP</td>
                        <td>우체국</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <table className="table table-sm table-hover">
                <thead>
                  <tr>
                    <th>구매사이트</th>
                    <th>송장번호</th>
                    <th>요청날짜</th>
                    <th>스페이스코드</th>
                    <th>상태</th>
                    <th>입고기록</th>
                    <th>담당자</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    onClick={() => handleShowModal2()}
                    style={{ cursor: "pointer" }}
                  >
                    <td>JYP</td>
                    <td>678486487876</td>
                    <td>2025-02-13 14:00:00</td>
                    <td>KB00001A</td>
                    <td>요청</td>
                    <td>입고기록없음</td>
                    <td>-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* 모달 1: 등록 */}
      <Modal show={showModal1} onHide={handleCloseModal1}>
        <Modal.Header closeButton>
          <Modal.Title>분실 신고 등록</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card mb-3">
            <div className="card-body">
              <div className="input-group input-group-sm mb-2">
                <span className="input-group-text">사이트</span>
                <input type="text" className="form-control" />
              </div>
              <div className="input-group input-group-sm mb-2">
                <span className="input-group-text">배송사</span>
                <input type="text" className="form-control" />
              </div>
              <div className="input-group input-group-sm mb-2">
                <span className="input-group-text">링크</span>
                <input type="text" className="form-control" />
              </div>
              <button className="btn btn-sm btn-outline-primary w-100">
                등록
              </button>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <p className="form-text">목록</p>
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th>사이트</th>
                    <th colSpan={2}>배송사</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>JYP</td>
                    <td>우체국</td>
                    <td>
                      <button className="btn btn-sm">
                        <i className="bi bi-trash text-danger"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal1}>
            닫기
          </Button>
        </Modal.Footer>
      </Modal>

      {/* 모달 2: 테이블 행 클릭 시 상세 정보 */}
      <Modal show={showModal2} onHide={handleCloseModal2}>
        <Modal.Header closeButton>
          <Modal.Title>분실 신고 상세</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedRow ? (
            <div>
              <p>
                <strong>사이트:</strong> {selectedRow.사이트}
              </p>
              <p>
                <strong>예상배송사:</strong> {selectedRow.예상배송사}
              </p>
            </div>
          ) : (
            <p>선택된 데이터가 없습니다.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal2}>
            닫기
          </Button>
        </Modal.Footer>
      </Modal>
    </A_Navbar>
  );
};

export default A_LostProducts;

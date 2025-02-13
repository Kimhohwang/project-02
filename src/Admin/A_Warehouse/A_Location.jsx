import React, { useState } from "react";
import A_Navbar from "../A_Navbar/A_Navbar";
import { Modal, Button } from "react-bootstrap";

const A_Location = () => {
  const [showModal, setShowModal] = useState(false);

  // 모달 열기 및 닫기
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <A_Navbar>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">창고관리</li>
          <li className="breadcrumb-item active" aria-current="page">
            창고위치
          </li>
        </ol>
      </nav>

      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 mb-3">
              <div className="input-group input-group-sm">
                <input
                  type="text"
                  className="form-control"
                  placeholder="스페이스코드"
                />
                <button className="btn btn-outline-success me-3">
                  <i className="bi bi-search"></i>
                </button>

                {/* 위치등록 버튼 클릭 시 모달 실행 */}
                <button
                  className="btn btn-outline-primary"
                  onClick={handleShow}
                >
                  위치등록
                </button>
              </div>
            </div>
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <div className="row">
                    <div className="col-sm-3">
                      <div className="input-group input-group-sm">
                        <select
                          className="form-select me-3"
                          aria-label="Default select example"
                        >
                          <option selected>표시수량</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <button className="btn btn-success">
                          <i class="bi bi-file-earmark-spreadsheet">Download</i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <table className="table table-sm table-hover text-center border">
                    <thead>
                      <tr>
                        <th>스페이스코드</th>
                        <th>이전</th>
                        <th>현재</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>KB00001A</td>
                        <td>-</td>
                        <td>1F-A01</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 위치등록 모달 */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>위치 등록</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label className="form-label form-text">스페이스코드</label>
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="KB00001A"
              />
            </div>
            <div className="mb-3">
              <label className="form-label form-text">성함</label>
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="KB00001A"
              />
            </div>
            <div className="mb-3">
              <label className="form-label form-text">최근 위치</label>
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="1F-A02"
                disabled
              />
            </div>
            <div className="mb-3">
              <label className="form-label form-text">위치 변경</label>
              <div className="input-group input-group-sm">
                <span className="input-group-text">Floor</span>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="1">1F</option>
                  <option value="2">2F</option>
                  <option value="3">3F</option>
                </select>
                <span className="input-group-text">Line</span>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="1">A</option>
                  <option value="2">B</option>
                  <option value="3">C</option>
                </select>
                <span className="input-group-text">Num</span>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="1">01</option>
                  <option value="2">02</option>
                  <option value="3">03</option>
                </select>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">위치변경</Button>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
        </Modal.Footer>
      </Modal>
    </A_Navbar>
  );
};

export default A_Location;

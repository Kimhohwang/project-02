import React, { useState } from "react";
import A_Navbar from "../A_Navbar/A_Navbar";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Modal, Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const A_Repacking = () => {
  const [showModal, setShowModal] = useState(false);
  const [showPackingModal, setShowPackingModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  // 행 클릭 시 첫 번째 모달 실행
  const handleRowClick = (rowData) => {
    setSelectedRow(rowData);
    setShowModal(true);
  };

  // 첫 번째 모달 닫기
  const handleClose = () => setShowModal(false);

  // 두 번째 모달 닫기
  const handlePackingClose = () => setShowPackingModal(false);

  // 포장 시작 버튼 클릭 시
  const handleStartPacking = () => {
    setShowModal(false); // 첫 번째 모달 닫기
    setShowPackingModal(true); // 두 번째 모달 실행
  };

  return (
    <A_Navbar>
      <Breadcrumb>
        <Breadcrumb.Item active>배송대행</Breadcrumb.Item>
        <Breadcrumb.Item active>상품포장중</Breadcrumb.Item>
      </Breadcrumb>

      <div className="card">
        <div className="card-body">
          <table className="table table-sm table-hover">
            <thead>
              <tr>
                <th>주문번호</th>
                <th>주문날짜</th>
                <th>스페이스코드</th>
                <th>성함</th>
                <th>요청수량</th>
                <th>담당자</th>
              </tr>
            </thead>
            <tbody>
              <tr
                onClick={() =>
                  handleRowClick({
                    주문번호: "SSDFG8DS",
                    주문날짜: "2025-02-20 14:00:00",
                    스페이스코드: "KB00001A",
                    성함: "Valeria Alejandra Zurita Lizarraga",
                    요청수량: 30,
                    담당자: "Fodric",
                  })
                }
                style={{ cursor: "pointer" }}
              >
                <td>SSDFG8DS</td>
                <td>2025-02-20 14:00:00</td>
                <td>KB00001A</td>
                <td>Valeria Alejandra Zurita Lizarraga</td>
                <td>30</td>
                <td>Fodric</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 첫 번째 모달 (상품 포장 상세 정보) */}
      <Modal show={showModal} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>상품 포장 상세 정보</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-4 mb-3">
                  <div className="card">
                    <div className="card-body">
                      <p className="form-text">주문정보</p>
                      <table className="table table-sm table-hover">
                        <tbody>
                          <tr>
                            <th>주문번호</th>
                            <td></td>
                          </tr>
                          <tr>
                            <th>주문날짜</th>
                            <td></td>
                          </tr>
                          <tr>
                            <th>스페이스코드</th>
                            <td></td>
                          </tr>
                          <tr>
                            <th>성함</th>
                            <td></td>
                          </tr>

                          <tr>
                            <th>요청수량</th>
                            <td></td>
                          </tr>
                          <tr>
                            <th>상태</th>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-sm-8 mb-3">
                  <div className="card">
                    <div className="card-body">
                      <p className="form-text">배송지 정보</p>
                      <div className="row">
                        <div className="col-sm-6">
                          <table className="table table-sm table-hover">
                            <tbody>
                              <tr>
                                <th>받는분</th>
                                <td></td>
                              </tr>
                              <tr>
                                <th>이메일</th>
                                <td></td>
                              </tr>
                              <tr>
                                <th>연락처</th>
                                <td></td>
                              </tr>
                              <tr>
                                <th>개인통관부호</th>
                                <td></td>
                              </tr>
                              <tr>
                                <th>국가</th>
                                <td></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="col-sm-6">
                          <table className="table table-sm table-hover">
                            <tbody>
                              <tr>
                                <th>우편번호</th>
                                <td></td>
                              </tr>
                              <tr>
                                <th>주</th>
                                <td></td>
                              </tr>
                              <tr>
                                <th>도시</th>
                                <td></td>
                              </tr>
                              <tr>
                                <th>주소1</th>
                                <td></td>
                              </tr>
                              <tr>
                                <th>주소2</th>
                                <td></td>
                              </tr>
                              <tr>
                                <th>주소3</th>
                                <td></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body table-responsive text-nowrap">
                  <table className="table table-sm table-hover">
                    <thead>
                      <tr>
                        <th>송장번호</th>
                        <th>상품명</th>
                        <th>만료일</th>
                        <th>필수포함</th>
                        <th>진공포장백</th>
                        <th>에어셀</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>586000000001</td>
                        <td>Festa + Wings tour...외 4건 </td>
                        <td>4</td>
                        <td className="text-success">
                          <i class="bi bi-check"></i>
                        </td>
                        <td>-</td>
                        <td>-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-info btn-sm">요청서 출력</button>
          <button
            className="btn btn-primary btn-sm"
            onClick={handleStartPacking} // 포장 시작 버튼 클릭 시 실행
          >
            포장시작
          </button>
          <button className="btn btn-secondary btn-sm" onClick={handleClose}>
            닫기
          </button>
        </Modal.Footer>
      </Modal>

      {/* 두 번째 모달 (포장 시작) */}
      <Modal
        show={showPackingModal}
        onHide={handlePackingClose}
        size="fullscreen"
      >
        <Modal.Header closeButton>
          <Modal.Title>포장 작업 시작</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-sm-3">
              <div className="card">
                <div className="card-header">
                  <p className="p-0 m-0">미포함 : 27</p>
                </div>
                <div className="card-body">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <span className="me-2">주문번호-01</span>
                        <button className="btn btn-sm btn-danger">Del</button>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="input-group input-group-sm">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Tracking Number"
                          />
                          <button className="btn btn-danger">
                            <i className="bi bi-trash"></i>
                          </button>
                        </div>
                        <button className="btn btn-sm btn-outline-primary w-100 mt-2 mb-2">
                          Add +
                        </button>
                        <div className="input-group input-group-sm mb-2">
                          <span className="input-group-text">KG</span>
                          <input type="number" className="form-control" />
                          <span className="input-group-text">W</span>
                          <input type="number" className="form-control" />
                          <span className="input-group-text">L</span>
                          <input type="number" className="form-control" />
                          <span className="input-group-text">H</span>
                          <input type="number" className="form-control" />
                        </div>
                        <div className="input-group input-group-sm mb-2">
                          <span className="input-group-text">특송사</span>
                          <input
                            type="number"
                            className="form-control"
                            disabled
                          />
                          <span className="input-group-text">우체국</span>
                          <input
                            type="number"
                            className="form-control"
                            disabled
                          />
                        </div>
                        <input
                          type="file"
                          className="form-control form-control-sm"
                        />
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>주문번호-02</Accordion.Header>
                      <Accordion.Body></Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <table className="table table-sm table-hover text-center">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>송장번호</th>
                        <th>필수포함</th>
                        <th>진공포장</th>
                        <th>에어셀</th>
                        <th>배터리</th>
                        <th>음식</th>
                        <th>포함</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>568000000001</td>
                        <td>
                          <i class="bi bi-check text-primary"></i>
                        </td>
                        <td>
                          <i class="bi bi-check text-primary"></i>
                        </td>
                        <td>-</td>
                        <td>
                          <input type="checkbox" className="form-check" />
                        </td>
                        <td>
                          <input type="checkbox" className="form-check" />
                        </td>
                        <td>-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-sm btn-outline-secondary">라벨출력</button>
          <button className="btn btn-sm btn-outline-warning">초기화</button>
          <button className="btn btn-sm btn-primary">포장완료</button>
        </Modal.Footer>
      </Modal>
    </A_Navbar>
  );
};

export default A_Repacking;

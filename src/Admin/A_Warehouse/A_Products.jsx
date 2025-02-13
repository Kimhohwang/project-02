import React, { useState } from "react";
import A_Navbar from "../A_Navbar/A_Navbar";
import { Modal, Button } from "react-bootstrap";
import warehouse from "../../assets/img/warehouse.svg";

const A_Products = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (rowData) => {
    setSelectedRow(rowData);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <A_Navbar>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">창고관리</li>
          <li className="breadcrumb-item active" aria-current="page">
            전체상품관리
          </li>
        </ol>
      </nav>
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
        <div className="col-sm-9">
          {/* 데스크탑 현황 */}
          <div className="card info-card revenue-card mb-3 d-sm-block d-none">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <img src={warehouse} className="card-img"></img>
                </div>
                <div className="d-flex justify-content-around w-100">
                  <div className="ps-3 text-center">
                    <h6>
                      <a className="fw-bold d-block text-decoration-none text-dark d-none d-sm-block">
                        145
                      </a>
                    </h6>
                    <span className="text-success small pt-1 fw-bold">
                      미입력
                    </span>{" "}
                  </div>
                  <div className="ps-3 text-center">
                    <h6>
                      <a className="fw-bold d-block text-decoration-none text-dark d-none d-sm-block">
                        145
                      </a>
                    </h6>
                    <span className="text-success small pt-1 fw-bold">
                      배송가능
                    </span>{" "}
                  </div>
                  <div className="ps-3 text-center">
                    <h6>
                      <a className="fw-bold d-block text-decoration-none text-dark d-none d-sm-block">
                        145
                      </a>
                    </h6>
                    <span className="text-success small pt-1 fw-bold">
                      출고완료
                    </span>{" "}
                  </div>
                  <div className="ps-3 text-center">
                    <h6>
                      <a className="fw-bold d-block text-decoration-none text-dark d-none d-sm-block">
                        145
                      </a>
                    </h6>
                    <span className="text-success small pt-1 fw-bold">
                      체크컨텐츠
                    </span>{" "}
                  </div>
                  <div className="ps-3 text-center">
                    <h6>
                      <a className="fw-bold d-block text-decoration-none text-dark d-none d-sm-block">
                        145
                      </a>
                    </h6>
                    <span className="text-success small pt-1 fw-bold">
                      인클루전
                    </span>{" "}
                  </div>
                  <div className="ps-3 text-center">
                    <h6>
                      <a className="fw-bold d-block text-decoration-none text-dark d-none d-sm-block">
                        145
                      </a>
                    </h6>
                    <span className="text-success small pt-1 fw-bold">
                      스플릿
                    </span>{" "}
                  </div>
                  <div className="ps-3 text-center">
                    <h6>
                      <a className="fw-bold d-block text-decoration-none text-dark d-none d-sm-block">
                        145
                      </a>
                    </h6>
                    <span className="text-success small pt-1 fw-bold">
                      NONE
                    </span>{" "}
                  </div>
                  <div className="ps-3 text-center">
                    <h6>
                      <a className="fw-bold d-block text-decoration-none text-dark d-none d-sm-block">
                        145
                      </a>
                    </h6>
                    <span className="text-success small pt-1 fw-bold">
                      폐기
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
                    <th>미입력</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>배송가능</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>출고완료</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>체크컨텐츠</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>인클루전</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>스플릿</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>NONE</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>폐기</th>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-sm-3">
              <div className="input-group input-group-sm mb-1">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>페이지당 수량선택</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body table-responsive text-nowrap">
          <table className="table table-sm table-hover">
            <thead>
              <tr>
                <th>송장번호</th>
                <th>스페이스코드</th>
                <th>입고일</th>
                <th>실중량</th>
                <th>상태</th>
                <th>출고번호</th>
              </tr>
            </thead>
            <tbody>
              <tr
                onClick={() =>
                  handleRowClick({
                    송장번호: "586000000001",
                    스페이스코드: "KB00001A",
                    입고일: "2025-02-11 14:00:00",
                    상태: "미입력",
                    출고번호: "-",
                  })
                }
                style={{ cursor: "pointer" }}
              >
                <td>586000000001</td>
                <td>KB00001A</td>
                <td>2025-02-11 14:00:00</td>
                <td>4kg</td>
                <td>미입력</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 모달 창 */}
      <Modal show={showModal} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>상품 상세 정보</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <img src="#" />
                  입고사진
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="mb-1">
                        <label for="basic-url" className="form-label form-text">
                          상태
                        </label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            id="basic-url"
                            aria-describedby="basic-addon3 basic-addon4"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="mb-1">
                        <label for="basic-url" className="form-label form-text">
                          출고번호
                        </label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            id="basic-url"
                            aria-describedby="basic-addon3 basic-addon4"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="mb-1">
                        <label for="basic-url" className="form-label form-text">
                          송장번호
                        </label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            id="basic-url"
                            aria-describedby="basic-addon3 basic-addon4"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="mb-1">
                        <label for="basic-url" className="form-label form-text">
                          입고날짜
                        </label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            id="basic-url"
                            aria-describedby="basic-addon3 basic-addon4"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="mb-1">
                        <label for="basic-url" className="form-label form-text">
                          스페이스코드
                        </label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            id="basic-url"
                            aria-describedby="basic-addon3 basic-addon4"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="mb-1">
                        <label for="basic-url" className="form-label form-text">
                          입고금액
                        </label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            id="basic-url"
                            aria-describedby="basic-addon3 basic-addon4"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="mb-1">
                        <label for="basic-url" className="form-label form-text">
                          사유
                        </label>
                        <select
                          className="form-select form-select-sm"
                          aria-label="Default select example"
                        >
                          <option selected>Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>

                    <div className="col">
                      <div
                        className="accordion accordion-flush"
                        id="accordionFlushExample"
                      >
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button collapsed border"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseOne"
                              aria-expanded="false"
                              aria-controls="flush-collapseOne"
                            >
                              상품상세정보
                            </button>
                          </h2>
                          <div
                            id="flush-collapseOne"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              <div className="card mb-2">
                                <div className="card-body">
                                  <table className="table table-sm table-hover">
                                    <tbody>
                                      <tr>
                                        <th>품목</th>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <th>상품명</th>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <th>수량</th>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <th>단가</th>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={handleClose}
          >
            삭제
          </button>
          <button
            className="btn btn-sm btn-outline-primary"
            onClick={handleClose}
          >
            수정
          </button>
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={handleClose}
          >
            닫기
          </button>
        </Modal.Footer>
      </Modal>
    </A_Navbar>
  );
};

export default A_Products;

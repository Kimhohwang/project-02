import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import A_Navbar from "../A_Navbar/A_Navbar";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import airplane from "../../assets/img/direct-flight.svg";
import box1 from "../../assets/img/1.jpg";
import { Modal, Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const A_ShippingRequest = () => {
  const [activeTab, setActiveTab] = useState("basic");
  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const [show, setShow] = useState(false);

  const modalClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleRowClick = (rowData) => {
    setSelectedRow(rowData);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <A_Navbar>
      <Breadcrumb>
        <Breadcrumb.Item active>배송대행</Breadcrumb.Item>
        <Breadcrumb.Item active>배송대행 요청서</Breadcrumb.Item>
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
                  <img src={airplane} className="card-img"></img>
                </div>
                <div className="d-flex justify-content-around w-100">
                  <div className="ps-3 text-center">
                    <h6>
                      <a className="fw-bold d-block text-decoration-none text-dark d-none d-sm-block">
                        145
                      </a>
                    </h6>
                    <span className="text-success small pt-1 fw-bold">
                      요청
                    </span>{" "}
                  </div>
                  <div className="ps-3 text-center">
                    <h6>
                      <a className="fw-bold d-block text-decoration-none text-dark d-none d-sm-block">
                        145
                      </a>
                    </h6>
                    <span className="text-success small pt-1 fw-bold">
                      포장중
                    </span>{" "}
                  </div>
                  <div className="ps-3 text-center">
                    <h6>
                      <a className="fw-bold d-block text-decoration-none text-dark d-none d-sm-block">
                        145
                      </a>
                    </h6>
                    <span className="text-success small pt-1 fw-bold">
                      포장완료
                    </span>{" "}
                  </div>
                  <div className="ps-3 text-center">
                    <h6>
                      <a className="fw-bold d-block text-decoration-none text-dark d-none d-sm-block">
                        145
                      </a>
                    </h6>
                    <span className="text-success small pt-1 fw-bold">
                      결제완료
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
                    <th>출고완료</th>
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
            <div className="col-sm-2">
              <select
                className="form-select"
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
        <div className="card-body table-responsive text-nowrap">
          <table className="table table-sm table-hover">
            <thead>
              <tr>
                <th>No</th>
                <th>주문번호</th>
                <th>주문날짜</th>
                <th>스페이스코드</th>
                <th>성함</th>
                <th>배송국가</th>
                <th>요청수량</th>
                <th>상태</th>
              </tr>
            </thead>
            <tbody>
              <tr
                onClick={() =>
                  handleRowClick({
                    No: 1,
                    주문번호: "SA87807D89",
                    주문날짜: "2025-02-20 14:00:00",
                    스페이스코드: "KB00001A",
                    성함: "Andrea Morocco",
                    요청수량: 27,
                    상태: "요청",
                  })
                }
                style={{ cursor: "pointer" }}
              >
                <td>1</td>
                <td>SA87807D89</td>
                <td>2025-02-20 14:00:00</td>
                <td>KB00001A</td>
                <td>Andrea Morocco</td>
                <td>North Korea</td>
                <td>27</td>
                <td>요청</td>
              </tr>
              <tr onClick={handleShow}>
                <td>2</td>
                <td>S897F2GDD6</td>
                <td>2025-02-20 15:00:00</td>
                <td>KB00001B</td>
                <td>Mongthacho uklelle</td>
                <td>Mexico</td>
                <td>2</td>
                <td>출고완료</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 모달 창 */}
      <Modal show={showModal} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>배송 요청 상세 정보</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k)}
            className="mb-3"
          >
            <Tab eventKey="basic" title="요청정보">
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
              <div className="d-flex justify-content-end p-2">
                <button className="btn btn-sm btn-outline-danger me-2">
                  취소
                </button>
                <button className="btn btn-sm btn-outline-primary me-2">
                  포장시작
                </button>
                <button className="btn btn-sm btn-outline-secondary">
                  닫기
                </button>
              </div>
            </Tab>
            <Tab eventKey="2st" title="포장정보">
              <div className="card">
                <div className="card-body">
                  <div className="card">
                    <div className="card-body">
                      <p>미포함 1건</p>
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
                  <hr />
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>S897F2GDD6-01</Accordion.Header>
                      <Accordion.Body>
                        <div className="row">
                          <div className="col-sm-3">
                            <div className="card">
                              <div className="card-body">
                                <img src={box1} className="card-img" />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-9">
                            <table className="table table-sm table-hover">
                              <tbody>
                                <tr>
                                  <th>박스번호</th>
                                  <td></td>
                                </tr>
                                <tr>
                                  <th>실중량</th>
                                  <td></td>
                                </tr>
                                <tr>
                                  <th>가로</th>
                                  <td></td>
                                </tr>
                                <tr>
                                  <th>세로</th>
                                  <td></td>
                                </tr>
                                <tr>
                                  <th>높이</th>
                                  <td></td>
                                </tr>
                                <tr>
                                  <th>특송사 적용중량</th>
                                  <td></td>
                                </tr>
                                <tr>
                                  <th>우체국 적용중량</th>
                                  <td></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-body">
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
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>S897F2GDD6-02</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </Tab>
            <Tab eventKey="3st" title="견적서">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="card mb-3">
                        <div className="card-body table-responsive text-nowrap">
                          <table className="table table-sm table-hover">
                            <tbody>
                              <tr>
                                <th>배송국가</th>
                                <th>요청수량</th>
                                <th>미포함</th>
                                <th>포장상태</th>
                                <th>박스수량</th>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="card mb-3">
                        <div className="card-body table-responsive text-nowrap">
                          <table className="table table-sm table-hover">
                            <tbody>
                              <tr>
                                <th>포장비용</th>
                                <th>옵션비용</th>
                                <th>창고비용</th>
                                <th>입고비용</th>
                                <th>합계</th>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="card">
                        <div className="card-body table-responsive text-nowrap">
                          <div
                            style={{
                              minHeight: "240px",
                              maxHeight: "240px",
                              overflowY: "auto",
                            }}
                          >
                            <table className="table table-sm table-hover text-center">
                              <thead>
                                <tr>
                                  <th>박스번호</th>
                                  <th>포함수량</th>
                                  <th>실중량</th>
                                  <th>포장비용</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>S987SFDA-01</td>
                                  <td>27</td>
                                  <td>15.8</td>
                                  <td>1580</td>
                                </tr>
                                <tr>
                                  <td>S987SFDA-02</td>
                                  <td>27</td>
                                  <td>15.8</td>
                                  <td>1580</td>
                                </tr>
                                <tr>
                                  <td>S987SFDA-03</td>
                                  <td>27</td>
                                  <td>15.8</td>
                                  <td>1580</td>
                                </tr>
                                <tr>
                                  <td>S987SFDA-04</td>
                                  <td>27</td>
                                  <td>15.8</td>
                                  <td>1580</td>
                                </tr>
                                <tr>
                                  <td>S987SFDA-05</td>
                                  <td>27</td>
                                  <td>15.8</td>
                                  <td>1580</td>
                                </tr>
                                <tr>
                                  <td>S987SFDA-06</td>
                                  <td>27</td>
                                  <td>15.8</td>
                                  <td>1580</td>
                                </tr>
                                <tr>
                                  <td>S987SFDA-07</td>
                                  <td>27</td>
                                  <td>15.8</td>
                                  <td>1580</td>
                                </tr>
                                <tr>
                                  <td>S987SFDA-08</td>
                                  <td>1</td>
                                  <td>15.8</td>
                                  <td>-</td>
                                </tr>
                              </tbody>
                              <tfoot>
                                <tr className="table-light">
                                  <th>소계</th>
                                  <td></td>
                                  <td></td>
                                  <td>11060</td>
                                </tr>
                              </tfoot>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6 mb-3">
                      {/* 옵션비용 카드 */}
                      <div className="card mb-2">
                        <div className="card-body table-responsive text-nowrap">
                          <table className="table table-sm table-hover text-center">
                            <thead>
                              <tr>
                                <th></th>
                                <th>스티커</th>
                                <th>보험</th>
                                <th>진공백</th>
                                <th>에어셀</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td></td>
                                <td>-</td>
                                <td>
                                  <i class="bi bi-check"></i>
                                </td>
                                <td>1</td>
                                <td>3</td>
                              </tr>
                              <tr className="table-light">
                                <td>소계</td>
                                <td>-</td>
                                <td>40000</td>
                                <td>2000</td>
                                <td>6000</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      {/* 창고이용료 카드 */}
                      <div className="card">
                        <div className="card-body table-responsive text-nowrap">
                          <table className="table table-sm table-hover text-center">
                            <thead>
                              <tr>
                                <th>창고이용료</th>
                                <th>입고비용</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="table-light">
                                <td>-</td>
                                <td>-</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6 mb-3">
                      <div className="card">
                        <div className="card-body">
                          <table className="table table-sm table-hover">
                            <thead>
                              <tr>
                                <th>배송사</th>
                                <th>배송비</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th>FEDEX</th>
                                <td></td>
                              </tr>
                              <tr>
                                <th>UPS</th>
                                <td></td>
                              </tr>
                              <tr>
                                <th>DHL</th>
                                <td></td>
                              </tr>
                              <tr>
                                <th>EMS</th>
                                <td></td>
                              </tr>
                              <tr>
                                <th>K-PACKET</th>
                                <td></td>
                              </tr>
                              <tr>
                                <th>GOLD STAR</th>
                                <td></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <div className="card">
                        <div className="card-body">
                          <textarea
                            className="form-control"
                            placeholder="메시지"
                            disabled
                            style={{
                              minHeight: "247px",
                              maxHeight: "247px",
                              overflowY: "auto",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="4st" title="결제정보">
              <div className="card mb-3">
                <div className="card-body">
                  <p className="form-text">결제정보</p>
                  <table className="table table-sm table-hover text-center">
                    <thead>
                      <tr>
                        <th>배송사</th>
                        <th>결제일</th>
                        <th>견적금액</th>
                        <th>결제수단</th>
                        <th>결제금액</th>
                        <th>포인트할인</th>
                        <th>쿠폰할인</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>FEDEX</td>
                        <td>2025-02-20 14:00:00</td>
                        <td>700000</td>
                        <td>무통장</td>
                        <td>500000</td>
                        <td>100000</td>
                        <td>100000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3 mb-3">
                      <div className="card">
                        <div className="card-body">
                          <p className="form-text">입금정보</p>
                          <table className="table table-sm table-hover text-center">
                            <thead>
                              <tr>
                                <th>입금자명</th>
                                <th>입금금액</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>구아바</td>
                                <td>500000</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-9 mb-3">
                      <div className="card">
                        <div className="card-body">
                          <p className="form-text">환불계좌정보</p>
                          <table className="table table-sm table-hover text-center">
                            <thead>
                              <tr>
                                <th>은행</th>
                                <th>예금주</th>
                                <th>계좌번호</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>농협은행</td>
                                <td>구아바</td>
                                <td>3520146660313</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <button className="btn btn-outline-primary me-2 btn-sm">
                  입금확인
                </button>
                <button className="btn btn-sm btn-outline-danger">
                  상태변경(되돌리기)
                </button>
              </div>
            </Tab>
            <Tab eventKey="5st" title="접수정보">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-5">
                      <div className="card mb-3">
                        <div className="card-body">
                          <p className="form-text">특송사 송장등록</p>
                          <table className="table table-sm table-hover mb-2">
                            <thead>
                              <tr>
                                <th>박스번호</th>
                                <th>특송사 송장번호</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>SDAFS897-01</td>
                                <td>
                                  <input
                                    type="text"
                                    className="form-control form-control-sm"
                                    disabled
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div>
                            <button className="btn btn-outline-primary btn-sm w-100">
                              수정
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-body">
                          <p className="form-text">배송지 정보</p>
                          <table className="table table-sm table-hover">
                            <tbody>
                              <tr>
                                <th>받는분</th>
                                <td>Mireya Ortega Gonzalez</td>
                              </tr>
                              <tr>
                                <th>이메일</th>
                                <td>abigailcarringtxn@gmail.com</td>
                              </tr>
                              <tr>
                                <th>연락처</th>
                                <td>3337279012</td>
                              </tr>
                              <tr>
                                <th>국가</th>
                                <td>Mexico</td>
                              </tr>
                              <tr>
                                <th>개인통관부호</th>
                                <td>OEMG961106575</td>
                              </tr>
                              <tr>
                                <th>우편번호</th>
                                <td>45685</td>
                              </tr>
                              <tr>
                                <th>주</th>
                                <td>Jalisco</td>
                              </tr>
                              <tr>
                                <th>도시</th>
                                <td>El Salto</td>
                              </tr>
                              <tr>
                                <th>주소1</th>
                                <td>Avenida Castillo de Siguenza #972</td>
                              </tr>
                              <tr>
                                <th>주소2</th>
                                <td>Fracc. Parques del Castillo</td>
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
                    <div className="col-sm-7">
                      <div className="card">
                        <div className="card-body">
                          <p className="form-text">내용물 정보</p>
                          <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseOne"
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                                >
                                  SDAFS897-01
                                </button>
                              </h2>
                              <div
                                id="collapseOne"
                                className="accordion-collapse collapse show"
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body">
                                  <div className="card mb-2">
                                    <div className="card-header d-flex justify-content-end">
                                      <button className="btn btn-success btn-sm">
                                        <i class="bi bi-file-earmark-spreadsheet">
                                          {" "}
                                          SDAFS897-01
                                        </i>
                                      </button>
                                    </div>
                                    <div className="card-body">
                                      <table className="table table-sm text-center">
                                        <thead>
                                          <tr>
                                            <th>실중량</th>
                                            <th>가로</th>
                                            <th>세로</th>
                                            <th>높이</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td>20</td>
                                            <td>60</td>
                                            <td>50</td>
                                            <td>30</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                  <div className="card mb-2">
                                    <div className="card-body">
                                      <p className="form-text">상품정보요약</p>
                                      <table className="table table-sm text-center">
                                        <thead>
                                          <tr>
                                            <th>품목</th>
                                            <th>카테고리 수량</th>
                                            <th>상품 수량</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td>Albums</td>
                                            <td>5</td>
                                            <td>21</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                  <div className="card">
                                    <div className="card-body mb-3">
                                      <table className="table table-sm text-center table-striped">
                                        <thead>
                                          <tr>
                                            <th>송장번호</th>
                                            <th>품목</th>
                                            <th>수량</th>
                                            <th>단가</th>
                                            <th>소계</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td>458257073072</td>
                                            <td>Albums</td>
                                            <td>9</td>
                                            <td>$3</td>
                                            <td>$27</td>
                                          </tr>
                                          <tr>
                                            <td>458257073072</td>
                                            <td>Albums</td>
                                            <td>3</td>
                                            <td>$2</td>
                                            <td>$6</td>
                                          </tr>
                                          <tr>
                                            <td>458257073072</td>
                                            <td>Albums</td>
                                            <td>3</td>
                                            <td>$2</td>
                                            <td>$6</td>
                                          </tr>
                                          <tr>
                                            <td>458257073072</td>
                                            <td>Albums</td>
                                            <td>3</td>
                                            <td>$3</td>
                                            <td>$9</td>
                                          </tr>
                                          <tr>
                                            <td>458257073072</td>
                                            <td>Albums</td>
                                            <td>3</td>
                                            <td>$3</td>
                                            <td>$9</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseTwo"
                                  aria-expanded="false"
                                  aria-controls="collapseTwo"
                                >
                                  Accordion Item #2
                                </button>
                              </h2>
                              <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body">
                                  <strong>
                                    This is the second item's accordion body.
                                  </strong>{" "}
                                  It is hidden by default, until the collapse
                                  plugin adds the appropriate classes that we
                                  use to style each element. These classes
                                  control the overall appearance, as well as the
                                  showing and hiding via CSS transitions. You
                                  can modify any of this with custom CSS or
                                  overriding our default variables. It's also
                                  worth noting that just about any HTML can go
                                  within the <code>.accordion-body</code>,
                                  though the transition does limit overflow.
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseThree"
                                  aria-expanded="false"
                                  aria-controls="collapseThree"
                                >
                                  Accordion Item #3
                                </button>
                              </h2>
                              <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body">
                                  <strong>
                                    This is the third item's accordion body.
                                  </strong>{" "}
                                  It is hidden by default, until the collapse
                                  plugin adds the appropriate classes that we
                                  use to style each element. These classes
                                  control the overall appearance, as well as the
                                  showing and hiding via CSS transitions. You
                                  can modify any of this with custom CSS or
                                  overriding our default variables. It's also
                                  worth noting that just about any HTML can go
                                  within the <code>.accordion-body</code>,
                                  though the transition does limit overflow.
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
            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </A_Navbar>
  );
};

export default A_ShippingRequest;

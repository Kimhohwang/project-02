import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import A_Navbar from "../A_Navbar/A_Navbar";

const A_Warehousing_Co = () => {
  const [activeTab, setActiveTab] = useState("basic");
  const [previewImage, setPreviewImage] = useState(null);

  // 파일 선택 시 미리보기 설정
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
    }
  };

  return (
    <A_Navbar>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">입고관리</li>
          <li className="breadcrumb-item active" aria-current="page">
            구매대행 입고등록
          </li>
        </ol>
      </nav>

      <Tabs
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
        className="mb-3"
      >
        {/* 입고등록 */}
        <Tab eventKey="basic" title="입고등록">
          <div className="row">
            <div className="col-sm-5">
              <div className="card">
                <div className="card-body">
                  <table className="table table-sm table-hover text-nowrap">
                    <tbody>
                      <tr>
                        <th>스페이스코드</th>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                      </tr>
                      <tr>
                        <th>송장번호</th>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                      </tr>
                      <tr>
                        <th>입고날짜</th>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                      </tr>
                      <tr>
                        <th>실중량</th>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td colSpan={2}>
                          <div className="input-group input-group-sm">
                            <input
                              type="file"
                              className="form-control"
                              onChange={handleImageUpload}
                              accept="image/*"
                            />
                            <button className="btn btn-outline-secondary">
                              촬영
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th colSpan={2}>
                          <div className="card">
                            <div className="card-body text-center">
                              {previewImage ? (
                                <img
                                  src={previewImage}
                                  alt="입고사진 미리보기"
                                  className="img-fluid rounded"
                                  style={{ maxHeight: "300px" }}
                                />
                              ) : (
                                <p className="text-muted">
                                  사진을 업로드하세요
                                </p>
                              )}
                            </div>
                          </div>
                        </th>
                      </tr>
                      <tr>
                        <th colSpan={2}>
                          <button className="btn btn-primary w-100 btn-sm">
                            입고등록
                          </button>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-sm-7">
              <div className="card">
                <div className="card-header">
                  <div className="row">
                    <div className="col-sm-8"></div>
                    <div className="col-sm-4">
                      <div className="input-group input-group-sm">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="주문번호, 스페이스코드"
                        />
                        <button className="btn btn-outline-primary">
                          조회
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="card mb-2">
                    <div className="card-header">
                      <div className="input-group input-group-sm">
                        <span className="input-group-text">
                          <input type="checkbox" className="form-check" />
                        </span>
                        <span className="input-group-text">주문번호</span>
                        <span className="input-group-text">C45643A3-01</span>
                      </div>
                    </div>
                    <div className="card-body">
                      <table className="table table-sm table-hover">
                        <tbody>
                          <tr>
                            <th>주문날짜</th>
                            <td></td>
                          </tr>
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
                  <div className="card mb-2">
                    <div className="card-header">
                      <div className="input-group input-group-sm">
                        <span className="input-group-text">
                          <input type="checkbox" className="form-check" />
                        </span>
                        <span className="input-group-text">주문번호</span>
                        <span className="input-group-text">C45643A3-01</span>
                      </div>
                    </div>
                    <div className="card-body">
                      <table className="table table-sm table-hover">
                        <tbody>
                          <tr>
                            <th>주문날짜</th>
                            <td></td>
                          </tr>
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
        </Tab>

        {/* 입고기록 */}
        <Tab eventKey="bundle" title="입고기록">
          <div className="row">
            <div className="col-sm-3">
              <div className="input-group input-group-sm mb-2">
                <input type="date" className="form-control form-control-sm" />
                <button className="btn btn-outline-success">검색</button>
              </div>
            </div>
            <div className="col-sm-6"></div>
            <div className="col-sm-3 mb-3">
              <div className="input-group input-group-sm">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Spacecode or Tracking Num"
                />
                <button className="btn btn-outline-success">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div>
            <div className="col-sm-3 mb-3"></div>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="input-group input-group-sm w-25">
                <span className="input-group-text">Start</span>
                <input type="number" className="form-control" />
                <span className="input-group-text">End</span>
                <input type="number" className="form-control" />
                <button className="btn btn-outline-primary me-2">선택</button>
                <button className="btn btn-success btn-sm">라벨출력</button>
              </div>
            </div>
            <div className="card-body table-responsive text-nowrap">
              <table className="table table-sm table-hover">
                <thead>
                  <tr>
                    <th>
                      <input type="checkbox" className="form-check" />
                    </th>
                    <th>No</th>
                    <th>송장번호</th>
                    <th>스페이스코드</th>
                    <th>성함</th>
                    <th>위치</th>
                    <th>입고일</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>
                      <input type="checkbox" className="form-check" />
                    </th>
                    <th>1</th>
                    <th>586011112222</th>
                    <th>KB00001A</th>
                    <th>Trantino Black</th>
                    <th>1F-A01</th>
                    <th>2025-02-10 14:00:00</th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Tab>

        {/* 미입고 목록 */}
        <Tab eventKey="notDelivered" title="미입고">
          <div className="d-flex justify-content-end mb-3">
            <div className="input-group input-group-sm w-25">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Spacecode or Tracking Num"
              />
              <button className="btn btn-outline-success">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="d-flex align-items-center">
                <p className="m-0 me-2">총 1건</p>
                <select
                  className="form-select form-select-sm w-25"
                  aria-label="Default select example"
                >
                  <option selected>10개 보기</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="card-body table-responsive text-nowrap">
              <table className="table table-sm table-hover text-center">
                <thead>
                  <tr>
                    <th>주문번호</th>
                    <th>스페이스코드</th>
                    <th>성함</th>
                    <th>품목</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>단가</th>
                    <th>링크</th>
                    <th>타사주문번호</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>586011112222</td>
                    <td>KB00001A</td>
                    <td>Trantino Black</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      주문번호 / 수량
                      <br />
                      주문번호 / 수량
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Tab>
      </Tabs>
    </A_Navbar>
  );
};

export default A_Warehousing_Co;

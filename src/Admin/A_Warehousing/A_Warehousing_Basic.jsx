import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import A_Navbar from "../A_Navbar/A_Navbar";

const A_Warehousing_Basic = () => {
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
            일반 입고등록
          </li>
        </ol>
      </nav>

      <Tabs
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
        className="mb-3"
      >
        <Tab eventKey="basic" title="입고등록">
          <div className="row">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
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
                              type="datetime-local"
                              className="form-control form-control-sm"
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>실중량</th>
                          <td>
                            <input
                              type="number"
                              className="form-control form-control-sm"
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>입고금액</th>
                          <td>
                            <input
                              type="number"
                              className="form-control form-control-sm"
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>사유</th>
                          <td>
                            <select
                              class="form-select form-select-sm"
                              aria-label="Default select example"
                            >
                              <option selected>입고금액 사유</option>
                              <option value="1">세금</option>
                              <option value="2">착불배송비</option>
                              <option value="3">반송비</option>
                              <option value="4">스플릿</option>
                              <option value="5">인클루전</option>
                            </select>
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
                            <button className="btn btn-primary w-100 btn-sm">
                              입고등록
                            </button>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-sm-6">
                    <div className="card">
                      <div className="card-body text-center">
                        {previewImage ? (
                          <img
                            src={previewImage}
                            alt="입고사진 미리보기"
                            className="img-fluid rounded"
                            style={{ maxHeight: "500px" }}
                          />
                        ) : (
                          <p className="text-muted">사진을 업로드하세요</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tab>

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
                    <th>입고날짜</th>
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
      </Tabs>
    </A_Navbar>
  );
};

export default A_Warehousing_Basic;

import React from "react";
import A_Navbar from "../A_Navbar/A_Navbar";

const A_Setting = () => {
  return (
    <A_Navbar>
      <div className="row">
        <div className="col-sm-3">
          <div className="card mb-3">
            <div className="card-body">
              <p>환율설정</p>
              <p>KST 2025-02-10 환율 1452.78</p>
              <div className="input-group input-group-sm ">
                <span className="input-group-text">환율</span>
                <input type="number" className="form-control" disabled />
                <button className="btn btn-outline-primary">수정</button>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-body">
              <p>배송마진설정</p>
              <table className="table table-sm text-nowrap">
                <tbody>
                  <tr>
                    <td>FEDEX</td>
                    <td>
                      <div className="input-group input-group-sm">
                        <input
                          type="number"
                          className="form-control"
                          disabled
                        />
                        <span className="input-group-text">%</span>
                        <button className="btn btn-outline-primary">
                          수정
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>UPS</td>
                    <td>
                      <div className="input-group input-group-sm">
                        <input
                          type="number"
                          className="form-control"
                          disabled
                        />
                        <span className="input-group-text">%</span>
                        <button className="btn btn-outline-primary">
                          수정
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>DHL</td>
                    <td>
                      <div className="input-group input-group-sm">
                        <input
                          type="number"
                          className="form-control"
                          disabled
                        />
                        <span className="input-group-text">%</span>
                        <button className="btn btn-outline-primary">
                          수정
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>EMS</td>
                    <td>
                      <div className="input-group input-group-sm">
                        <input
                          type="number"
                          className="form-control"
                          disabled
                        />
                        <span className="input-group-text">%</span>
                        <button className="btn btn-outline-primary">
                          수정
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>K-PACKET</td>
                    <td>
                      <div className="input-group input-group-sm">
                        <input
                          type="number"
                          className="form-control"
                          disabled
                        />
                        <span className="input-group-text">%</span>
                        <button className="btn btn-outline-primary">
                          수정
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>GOLD STAR</td>
                    <td>
                      <div className="input-group input-group-sm">
                        <input
                          type="number"
                          className="form-control"
                          disabled
                        />
                        <span className="input-group-text">%</span>
                        <button className="btn btn-outline-primary">
                          수정
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-sm-9">
          <div className="card">
            <div className="card-body">
              <p>수정내역</p>
              <select
                class="form-select w-25 form-select-sm mb-3"
                aria-label="Default select example"
              >
                <option selected>전체보기</option>
                <option value="1">환율</option>
                <option value="2">FEDEX</option>
                <option value="3">UPS</option>
                <option value="4">DHL</option>
                <option value="5">EMS</option>
                <option value="6">K-PACKET</option>
                <option value="7">GOLD STAR</option>
              </select>
              <div className="table-responsive text-nowrap">
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th>구분</th>
                      <th>수정일</th>
                      <th>내용</th>
                      <th>담당자</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>환율</td>
                      <td>2025-02-01 14:00</td>
                      <td>
                        1300 <i class="bi bi-arrow-right-short"></i> 1350
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>FEDEX</td>
                      <td>2025-02-01 14:00</td>
                      <td>
                        20 <i class="bi bi-arrow-right-short"></i> 40
                      </td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </A_Navbar>
  );
};

export default A_Setting;

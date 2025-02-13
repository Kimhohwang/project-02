import React from "react";
import A_Navbar from "../A_Navbar/A_Navbar";

const truncateText = (text, length = 30) => {
  return text.length > length ? text.slice(0, length) + "..." : text;
};

const A_Review = () => {
  return (
    <A_Navbar>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">고객</li>
          <li className="breadcrumb-item active" aria-current="page">
            리뷰관리
          </li>
        </ol>
      </nav>

      <div>
        <div className="row">
          <div className="col-sm-3">
            <div className="input-group input-group-sm mb-2">
              <input type="text" className="form-control" />
              <button className="btn btn-outline-success">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-body table-responsive text-nowrap">
          <table className="table table-sm table-hover text-center">
            <thead>
              <tr>
                <th>주문번호</th>
                <th>스페이스코드</th>
                <th>등록일</th>
                <th>별점</th>
                <th>내용</th>
                <th>조회수</th>
                <th>사진</th>
                <th>상태</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>S081389A</td>
                <td>KB00001A</td>
                <td>2025-02-20 14:00</td>
                <td className="text-warning">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </td>
                <td>
                  {truncateText(
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo maxime ad repellendus. Sed molestias placeat illo repellendus. Id, assumenda, magnam, non vel praesentium nesciunt blanditiis libero officia necessitatibus in iure."
                  )}
                </td>
                <td>0</td>
                <td className="text-success">
                  <i className="bi bi-camera"></i>
                </td>
                <td>
                  <span className="badge text-bg-success">공개</span>
                </td>
              </tr>
              <tr>
                <td>S081389A</td>
                <td>KB00001A</td>
                <td>2025-02-20 14:00</td>
                <td className="text-warning">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </td>
                <td>
                  {truncateText(
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo maxime ad repellendus. Sed molestias placeat illo repellendus. Id, assumenda, magnam, non vel praesentium nesciunt blanditiis libero officia necessitatibus in iure."
                  )}
                </td>
                <td>0</td>
                <td>
                  <i className="bi bi-x"></i>
                </td>
                <td>
                  <span className="badge text-bg-secondary">비공개</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="d-flex justify-content-center">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </A_Navbar>
  );
};

export default A_Review;

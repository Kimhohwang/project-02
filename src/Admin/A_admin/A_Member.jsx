import React, { useState } from "react";
import A_Navbar from "../A_Navbar/A_Navbar";

const A_Member = () => {
  const [activeTab, setActiveTab] = useState("정상");
  const [members, setMembers] = useState([
    {
      name: "KIM HO HWANG",
      department: "관리",
      position: "대표",
      status: "가입대기",
      email: "khh@koreawave.kr",
      phone: "01082787844",
    },
    {
      name: "LEE JI HOON",
      department: "영업",
      position: "팀장",
      status: "정상",
      email: "khh@koreawave.kr",
      phone: "01082787844",
    },
    {
      name: "PARK SEO JUN",
      department: "개발",
      position: "사원",
      status: "이용중지",
      email: "khh@koreawave.kr",
      phone: "01082787844",
    },
  ]);

  const updateStatus = (index, newStatus) => {
    setMembers((prevMembers) =>
      prevMembers.map((member, i) =>
        i === index ? { ...member, status: newStatus } : member
      )
    );
  };

  return (
    <A_Navbar>
      <div className="container">
        <div className="card rounded-4">
          <div className="card-body">
            <ul className="nav nav-tabs">
              {["정상", "이용중지", "가입대기"].map((tab) => (
                <li className="nav-item" key={tab}>
                  <button
                    className={`nav-link ${activeTab === tab ? "active" : ""}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                </li>
              ))}
            </ul>
            <div className="input-group input-group-sm m-3 w-25">
              <input type="text" className="form-control" />
              <button className="btn btn-outline-success">검색</button>
            </div>
            <table className="table table-sm table-hover text-center mt-3">
              <thead>
                <tr>
                  <th>이름</th>
                  <th>부서</th>
                  <th>직책</th>
                  <th>이메일</th>
                  <th>연락처</th>
                  <th>입사일</th>
                  <th>상태</th>
                </tr>
              </thead>
              <tbody className="fs-6">
                {members
                  .filter((member) => member.status === activeTab)
                  .map((member, index) => (
                    <tr key={index}>
                      <td>{member.name}</td>
                      <td>{member.department}</td>
                      <td>{member.position}</td>
                      <td>{member.email}</td>
                      <td>{member.phone}</td>
                      <td>
                        <input
                          type="date"
                          className="form-control form-control-sm"
                        />
                      </td>
                      <td>
                        <div className="dropdown">
                          <button
                            className={`btn btn-sm dropdown-toggle ${
                              member.status === "정상"
                                ? "btn-success"
                                : member.status === "이용중지"
                                ? "btn-danger"
                                : "btn-secondary"
                            }`}
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            {member.status}
                          </button>
                          <ul className="dropdown-menu">
                            {["정상", "이용중지", "가입대기"].map((status) => (
                              <li key={status}>
                                <button
                                  className="dropdown-item"
                                  onClick={() => updateStatus(index, status)}
                                >
                                  {status}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </A_Navbar>
  );
};

export default A_Member;

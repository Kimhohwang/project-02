import React, { useState, useEffect } from "react";
import A_Navbar from "../A_Navbar/A_Navbar";
import DoughnutChart from "./Components/DoughnutChart";
import BarChart from "./Components/BarChart";
import ExchangeRate from "./Components/ExchangeRate";

import airplane from "../../assets/img/direct-flight.svg";
import warehouse from "../../assets/img/warehouse.svg";
import shopping from "../../assets/img/online-shopping.svg";
import worldmap from "../../assets/img/worldwide.svg";
import faq from "../../assets/img/question.svg";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const A_Dashboard = () => {
  const [exchangeRate, setExchangeRate] = useState(null);
  const [goals, setGoals] = useState([
    { id: 1, text: "구매대행 매출 얼마", completed: false },
    { id: 2, text: "목표2", completed: false },
    { id: 3, text: "목표3", completed: false },
    { id: 4, text: "목표4", completed: false },
  ]);

  const [worldTimes, setWorldTimes] = useState([]);

  useEffect(() => {
    const updateWorldTimes = () => {
      const timeZones = [
        { city: "Paris", timeZone: "Europe/Paris" },
        { city: "Jakarta", timeZone: "Asia/Jakarta" },
        { city: "Sydney", timeZone: "Australia/Sydney" },
        { city: "Vancouver", timeZone: "America/Vancouver" },
        { city: "Los Angeles", timeZone: "America/Los_Angeles" },
        { city: "Mexico City", timeZone: "America/Mexico_City" },
        { city: "Sao Paulo", timeZone: "America/Sao_Paulo" },
      ];

      const updatedTimes = timeZones.map(({ city, timeZone }) => {
        const now = new Date().toLocaleString("en-US", {
          timeZone,
          hour12: true,
          hour: "2-digit",
          minute: "2-digit",
        });
        const date = new Date().toLocaleDateString("en-US", { timeZone });
        return { city, time: now, date };
      });

      setWorldTimes(updatedTimes);
    };

    updateWorldTimes();
    const interval = setInterval(updateWorldTimes, 60000); // Update every minute

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const toggleGoal = (id) => {
    setGoals((prevGoals) =>
      prevGoals.map((goal) =>
        goal.id === id ? { ...goal, completed: !goal.completed } : goal
      )
    );
  };

  const completedGoals = goals.filter((goal) => goal.completed).length;
  const percentage = Math.round((completedGoals / goals.length) * 100);

  useEffect(() => {
    fetch("https://open.er-api.com/v6/latest/USD")
      .then((response) => response.json())
      .then((data) => setExchangeRate(data.rates.KRW))
      .catch((error) => console.error("Error fetching exchange rate:", error));
  }, []);

  const doughnutData = {
    labels: ["VIP", "BASIC"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 100],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(255, 205, 86)"],
        hoverOffset: 4,
      },
    ],
  };

  const barData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Bar Chart",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const today = new Date().toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <A_Navbar>
      <div className="row p-3">
        <div className="col-lg-6">
          {/* 카드 1 */}
          <div className="card info-card revenue-card mb-3">
            <div className="card-body">
              <h5 className="card-title">Custom Order</h5>

              <div className="d-flex align-items-center">
                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <img src={shopping} className="card-img" />
                </div>
                <div className="d-flex justify-content-around w-100">
                  <div className="ps-3 text-center">
                    <h6>
                      <a className="fw-bold d-block text-decoration-none text-dark d-none d-sm-block">
                        145
                      </a>
                    </h6>
                    <span className="text-success small pt-1 fw-bold">
                      구매요청
                    </span>{" "}
                  </div>
                  <div className="ps-3 text-center">
                    <h6>
                      <a className="fw-bold d-block text-decoration-none text-dark d-none d-sm-block">
                        145
                      </a>
                    </h6>
                    <span className="text-success small pt-1 fw-bold">
                      벌크오더
                    </span>{" "}
                  </div>
                  <div className="ps-3 text-center">
                    <h6>
                      <a className="fw-bold d-block text-decoration-none text-dark d-none d-sm-block">
                        145
                      </a>
                    </h6>
                    <span className="text-success small pt-1 fw-bold">
                      결제대기
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
                </div>
              </div>
            </div>
          </div>

          {/* 카드 2 */}
          <div className="card info-card revenue-card mb-3">
            <div className="card-body">
              <h5 className="card-title">Shipments</h5>

              <div className="d-flex align-items-center">
                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <img src={airplane} className="card-img" />
                </div>
                <div className="d-flex justify-content-around w-100">
                  <div className="ps-3 text-center">
                    <h6>
                      <a className="fw-bold d-block text-decoration-none text-dark d-none d-sm-block">
                        145
                      </a>
                    </h6>
                    <span className="text-success small pt-1 fw-bold">
                      배송요청
                    </span>{" "}
                  </div>
                  <div className="ps-3 text-center">
                    <h6>
                      <a className="fw-bold d-block text-decoration-none text-dark d-none d-sm-block">
                        145
                      </a>
                    </h6>
                    <span className="text-success small pt-1 fw-bold">
                      결제대기
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
                      폐기대상
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 카드 3 */}
          <div className="card info-card revenue-card mb-3">
            <div className="card-body">
              <h5 className="card-title">Warehouse</h5>

              <div className="d-flex align-items-center">
                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <img src={warehouse} className="card-img" />
                </div>
                <div className="d-flex justify-content-around w-100">
                  <div className="ps-3 text-center">
                    <h6>
                      <a className="fw-bold d-block text-decoration-none text-dark d-none d-sm-block">
                        145
                      </a>
                    </h6>
                    <span className="text-success small pt-1 fw-bold">
                      상세검수
                    </span>{" "}
                  </div>
                  <div className="ps-3 text-center">
                    <h6>
                      <a className="fw-bold d-block text-decoration-none text-dark d-none d-sm-block">
                        145
                      </a>
                    </h6>
                    <span className="text-success small pt-1 fw-bold">
                      상세분할
                    </span>{" "}
                  </div>
                  <div className="ps-3 text-center">
                    <h6>
                      <a className="fw-bold d-block text-decoration-none text-dark d-none d-sm-block">
                        145
                      </a>
                    </h6>
                    <span className="text-success small pt-1 fw-bold">
                      상품해체
                    </span>{" "}
                  </div>
                  <div className="ps-3 text-center">
                    <h6>
                      <a className="fw-bold d-block text-decoration-none text-dark d-none d-sm-block">
                        145
                      </a>
                    </h6>
                    <span className="text-success small pt-1 fw-bold">
                      폐기대상
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 카드 4 */}
          <div className="card info-card revenue-card mb-3">
            <div className="card-body">
              <h5 className="card-title">Customer Support</h5>

              <div className="d-flex align-items-center">
                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <img src={faq} className="card-img" />
                </div>
                <div className="d-flex justify-content-around w-100">
                  <div className="ps-3 text-center">
                    <h6>
                      <a className="fw-bold d-block text-decoration-none text-dark d-none d-sm-block">
                        145
                      </a>
                    </h6>
                    <span className="text-success small pt-1 fw-bold">
                      1:1문의
                    </span>{" "}
                  </div>
                  <div className="ps-3 text-center">
                    <h6>
                      <a className="fw-bold d-block text-decoration-none text-dark d-none d-sm-block">
                        145
                      </a>
                    </h6>
                    <span className="text-success small pt-1 fw-bold">
                      분실신고
                    </span>{" "}
                  </div>
                  <div className="ps-3 text-center">
                    <h6>
                      <a className="fw-bold d-block text-decoration-none text-dark d-none d-sm-block">
                        145
                      </a>
                    </h6>
                    <span className="text-success small pt-1 fw-bold">
                      리뷰관리
                    </span>{" "}
                  </div>
                  <div className="ps-3 text-center">
                    <h6>
                      <a className="fw-bold d-block text-decoration-none text-dark d-none d-sm-block">
                        145
                      </a>
                    </h6>
                    <span className="text-success small pt-1 fw-bold">
                      고객목록
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 차트 */}
        <div className="col-lg-6 mb-3">
          <div className="row g-3">
            {/* Chart Cards */}
            <div className="col-sm-5 col-md-4 d-flex align-items-stretch">
              <DoughnutChart data={doughnutData} />
            </div>
            <div className="col-sm-7 col-md-8 d-flex align-items-stretch">
              <BarChart data={barData} options={barOptions} />
            </div>
            <div className="col-sm-5 col-md-4 d-flex align-items-stretch">
              <ExchangeRate exchangeRate={exchangeRate} today={today} />
            </div>
            <div className="col-sm-7 col-md-8 d-flex align-items-stretch">
              
            </div>
          </div>
        </div>

        {/* 세계시간 */}
        <div className="card info-card revenue-card mb-3 d-none d-lg-block">
          <div className="card-body">
            <h5 className="card-title">
              World Time <span>| Real-Time</span>
            </h5>
            <div className="d-flex align-items-center">
              <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                <img src={worldmap} className="card-img" alt="world map" />
              </div>
              <div className="d-flex justify-content-around w-100">
                {worldTimes.map(({ city, time, date }) => (
                  <div key={city} className="ps-3 text-center">
                    <h6 className="fw-bold">{city}</h6>
                    <span className="text-success small pt-1 fw-bold">
                      {time}
                    </span>
                    <br />
                    <span className="text-success small pt-1 fw-bold">
                      {date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </A_Navbar>
  );
};

export default A_Dashboard;

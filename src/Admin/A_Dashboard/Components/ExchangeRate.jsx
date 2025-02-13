import React from "react";

const ExchangeRate = ({ exchangeRate, today }) => {
  return (
    <div className="card flex-grow-1 ">
      <div className="card-body">
        <h5 className="card-title">Exchange rate</h5>
        <table className="table table-sm">
          <thead>
            <tr>
              <th colSpan={2}>실시간 환율</th>
            </tr>
            <tr>
              <td colSpan={2} className="small">
                {today}
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>KRW</th>
              <td>
                {exchangeRate ? `${exchangeRate.toFixed(2)} KRW` : "로딩 중..."}
              </td>
            </tr>
          </tbody>
        </table>
        <table className="table table-sm">
          <thead>
            <tr>
              <th colSpan={2}>설정 환율</th>
            </tr>
            <tr>
              <td colSpan={2} className="small">
                2025.01.20 ~ 2025.01.27
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>KRW</th>
              <td>1400.00 KRW</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExchangeRate;

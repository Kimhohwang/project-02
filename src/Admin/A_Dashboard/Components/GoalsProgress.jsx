import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const GoalsProgress = ({ goals, percentage, toggleGoal }) => {
  return (
    <div className="card flex-grow-1 ">
      <div className="card-body">
        <h5 className="card-title">Goals for this month</h5>
        <div className="row p-4">
          <div className="col-sm-12 col-md-5 d-flex align-items-center justify-content-center mb-3">
            <div style={{ width: "160px", height: "160px" }}>
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                  textColor: "#3e98c7",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#f3f3f3",
                })}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-7">
            <ul className="list-unstyled">
              {goals.map((goal) => (
                <li key={goal.id}>
                  <label>
                    <input
                      type="checkbox"
                      checked={goal.completed}
                      onChange={() => toggleGoal(goal.id)}
                    />{" "}
                    {goal.text}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalsProgress;

const StepProgress = ({ steps, currentStep }) => {
  return (
    <div className="step-progress d-flex align-items-center justify-content-between">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`step-item d-flex flex-column align-items-center ${
            index <= currentStep ? "active" : ""
          }`}
        >
          <div className="step-circle"></div>
          <span className="step-label">{step}</span>
          {index < steps.length - 1 && <div className="step-line"></div>}
        </div>
      ))}
    </div>
  );
};

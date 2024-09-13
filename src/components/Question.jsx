import React, { useState } from "react";

const Question = ({
  options,
  question,
  questionNo,
  explanation,
  correctIndex,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelection = (index) => {
    setSelectedOption(index);
    if (index === correctIndex - 1) {
      console.log(`Correct answer selected (${correctIndex})`);
    }
  };

  const handleRetry = (index) => {
    setSelectedOption(null);
  };

  return (
    <div className="mx-10 text-start mt-2">
      <p className="fs-5">{question}</p>
      {options.map((option, index) => (
        <div className="form-check mb-2" key={index}>
          <input
            className="form-check-input"
            type="radio"
            name={`flexRadioDefault${questionNo}`}
            id={`answer${index}/${questionNo}`}
            onChange={() => handleSelection(index)}
            checked={selectedOption === index}
            disabled={selectedOption !== null ? true : false}
          />
          <label
            className="form-check-label"
            htmlFor={`answer${index}/${questionNo}`}
            style={{
              color:
                selectedOption === index && index === correctIndex
                  ? "green"
                  : selectedOption === index && index !== correctIndex
                  ? "red"
                  : "black",
            }}
          >
            {option.text}
            <span
              style={{
                display: selectedOption === index ? "" : "none",
              }}
            >
              {" "}
              {index === correctIndex ? "✅" : "❌"}
            </span>
          </label>
          <div
            className={`rounded p-1 px-3 bg-secondary border border-${
              index === correctIndex ? "success" : "danger"
            }`}
            style={{
              maxHeight: selectedOption === index ? "200px" : "0",
              opacity: selectedOption === index ? 1 : 0,
              transition: "max-height 0.75s ease, opacity 1s ease",
              overflow: "hidden",
            }}
          >
            {option.explanation}
          </div>
        </div>
      ))}
      {selectedOption !== null && (
        <div className="text-center mt-3">
          <button
            type="button"
            className="btn btn-primary px-4 py-2"
            onClick={handleRetry}
          >
            Retry
          </button>
        </div>
      )}
    </div>
  );
};

export default Question;

import React from "react";

const NextPrev = ({
  lastPath = null,
  nextPath = null,
  practiceProblems = null,
}) => {
  return (
    <div className="container text-start py-3 bg-light">
      <hr></hr>
      <div className="row pt-2">
        <div className="col text-start">
          <a
            href={lastPath}
            style={{ display: lastPath === null ? "none" : "" }}
            className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          >
            {"<<< Previous"}
          </a>
        </div>
        <div className="col text-end">
          <a
            href={nextPath}
            style={{ display: nextPath === null ? "none" : "" }}
            className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          >
            {"Next >>>"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default NextPrev;

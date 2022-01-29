import React from "react";
import GitHubCalendar from "react-github-calendar";

const DayCode = () => {
  return (
    <div className="skillset daycode">
      <h1>
        Days I <span className="purple">Code</span>
      </h1>
      <GitHubCalendar
        username="hello5423"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
      />
    </div>
  );
};

export default DayCode;

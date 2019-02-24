import React, { useState } from "react";
import ReactDOM from "react-dom";

import { convertToDisplayFormat, convertFromDisplayFormat } from "./date-utils";

import "./styles.css";

function App() {
  const [apiDate, setApiDate] = useState("2019-01-12T04:40:12.340Z");
  const [displayDate, setDisplayDate] = useState("07/17/2018");

  const handleApiDateChange = e => {
    setApiDate(e.target.value);
  };

  const handleDisplayDateChange = e => {
    setDisplayDate(e.target.value);
  };

  const apiToDisplayFormatted = convertToDisplayFormat(apiDate);
  const displayToAPIFormatted = convertFromDisplayFormat(displayDate);

  return (
    <div className="App">
      <h4>Convert from API to Display format:</h4>
      <input type="text" value={apiDate} onChange={handleApiDateChange} />
      <p>API Format Value: {apiDate}</p>
      <p>
        Formatted Value: <strong>{apiToDisplayFormatted}</strong>
      </p>

      <hr />

      <h4>Convert from Display to API format:</h4>
      <input
        type="text"
        value={displayDate}
        onChange={handleDisplayDateChange}
      />
      <p>Display Format Value: {displayDate}</p>
      <p>
        Formatted Value: <strong>{displayToAPIFormatted}</strong>
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

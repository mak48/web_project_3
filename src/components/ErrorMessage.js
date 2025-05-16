import React from "react";

function ErrorMessage({ message }) {
  return (
    <div id="error-message">
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;

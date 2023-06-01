import React, { useState } from "react";
import PropTypes from "prop-types";

const ErrorBoundary = ({ children }) => {
  const [error, setError] = useState(null);

  const handleCatch = (error, info) => {
    console.log(error);
    console.log(info);
    setError(error);
  };

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return <div onError={handleCatch}>{children}</div>;
};

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ErrorBoundary;

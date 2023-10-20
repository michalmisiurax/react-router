import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>404 Page</h2>
      <p>Strona, której szukasz, nie istnieje.</p>
      <Link to="/">Do strony głównej</Link>
    </div>
  );
};

export default NotFound;

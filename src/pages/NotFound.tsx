import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div
      style={{
        padding: "2rem",
        textAlign: "center",
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Oops! Page Not Found</h1>
      <p>The page you are looking for doesn't exist.</p>
      <Link
        to="/"
        style={{
          marginTop: "1rem",
          color: "#0066cc",
          textDecoration: "none",
        }}
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const FileContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { result } = location.state || {};

  if (!result) {
    // If no result, redirect to home
    navigate("/");
    return null;
  }

  return (
    <div>
      <h1>File Content</h1>
      <pre>{result}</pre>
    </div>
  );
};

export default FileContent;

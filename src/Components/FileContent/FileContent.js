import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const FileContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { result } = location.state || {}; // Get the JSON response from state

  if (!result) {
    navigate("/");
    return null;
  }

  return (
    <div>
      <h1>File Content</h1>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
};

export default FileContent;

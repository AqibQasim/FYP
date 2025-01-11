import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home/Home";
import FileContent from "./Components/FileContent/FileContent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingScreen from "./Components/Loading/LoadingScreen";
import Error from "./Components/Error/Error";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loading" element={<LoadingScreen />} />
        <Route path="/fileContent" element={<FileContent />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;

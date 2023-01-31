import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/header";
import Create from "./Components/create";
import Home from "./Components/home";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

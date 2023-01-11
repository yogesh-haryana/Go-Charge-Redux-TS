import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import SearchBar from "./components/SearchBar";
import StationsInfo from "./components/StationsInfo";
import FallBack from "./components/FallBack";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route
              path="/findStation"
              element={
                <>
                  <SearchBar />
                  <StationsInfo />
                </>
              }
            ></Route>
            <Route path="/*" element={<FallBack />}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;

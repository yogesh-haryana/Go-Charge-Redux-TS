import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import SearchBar from "./components/SearchBar";
import StationsInfo from "./components/StationsInfo";
import AppContext from "./contexts/searchContext";

function App() {
  return (
    <div className="App">
      <Router>
        <AppContext>
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
          </Routes>
        </AppContext>
      </Router>
    </div>
  );
}

export default App;

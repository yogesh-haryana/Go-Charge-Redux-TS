import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import SearchBar from "./components/SearchBar";
import StationsInfo from "./components/StationsInfo";
// import SearchBarContainer from "./container/SearchBarContainer";
// import StationsInfoContainer from "./container/StationInfoContainer";
import FallBack from "./components/FallBack";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <AppContext> */}
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
        {/* </AppContext> */}
      </Router>
    </div>
  );
}

export default App;

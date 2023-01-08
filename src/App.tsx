import "./App.css";
import HomePage from "./components/HomePage";
import SearchBar from "./components/SearchBar";
import StationsInfo from "./components/StationsInfo";
import AppContext from "./contexts/searchContext";

function App() {
  return (
    <div className="App">
      <AppContext>
        <HomePage />
        <SearchBar />
        <StationsInfo />
      </AppContext>
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Counter from "./Components/Counter";
import ControlInput from "./Components/ControlInput";
import ToggleVisiblity from "./Components/ToggleVisiblity";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="/controlinput" element={<ControlInput />} />
            <Route path="/toggle" element={<ToggleVisiblity />} />
            
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

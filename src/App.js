import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Counter from "./Components/Counter";
import ControlInput from "./Components/ControlInput";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="/controlinput" element={<ControlInput />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

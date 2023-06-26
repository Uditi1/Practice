import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Counter from "./Components/Counter";
import ControlInput from "./Components/ControlInput";
import ToggleVisiblity from "./Components/ToggleVisiblity";
import CharacterCounter from "./Components/CharacterCounter";
import Todo from "./Components/Todo";
import ColorSwitcher from "./Components/ColorSwitcher";
import SearchFilter from "./Components/SearchFilter";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="/controlinput" element={<ControlInput />} />
            <Route path="/toggle" element={<ToggleVisiblity />} />
            <Route path="/character" element={<CharacterCounter />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/switcher" element={<ColorSwitcher />} />
            <Route path="/search" element={<SearchFilter />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

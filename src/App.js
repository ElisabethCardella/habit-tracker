import "./App.css";
import Home from "./pages/Home";
import HabitPage from "./pages/HabitPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/habit" element={<HabitPage />} />
    </Routes>
  );
}

export default App;

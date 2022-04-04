import "./App.css";
import Home from "./pages/Home";
import HabitPage from "./pages/HabitPage";
import { VStack } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <VStack>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/habit" element={<HabitPage />} />
        </Routes>
      </VStack>
    </div>
  );
}

export default App;

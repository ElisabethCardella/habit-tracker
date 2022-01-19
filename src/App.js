import "./App.css";
import Habit from "./components/Habit";
import Date from "./components/Date";
import { VStack } from "@chakra-ui/react";

function App() {
  return (
    <VStack>
      <Date />;
      <Habit />;
    </VStack>
  );
}

export default App;

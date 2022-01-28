import "./App.css";
import Habit from "./components/Habit";
import DateBox from "./components/DateBox";
import { VStack } from "@chakra-ui/react";

function App() {
  return (
    <VStack>
      <DateBox />;
      <Habit />;
    </VStack>
  );
}

export default App;

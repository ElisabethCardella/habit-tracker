import "./App.css";
import Header from "./components/Header";
import Habit from "./components/Habit";
import AddHabit from "./components/AddHabit";
import {
  VStack,
  IconButton,
  useMenuState,
  StatHelpText,
} from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";

function App(habits) {
  const initialHabits = [
    {
      id: 1,
      body: "sleep",
    },

    {
      id: 2,
      body: "dance",
    },
  ];

  useState[habits] = useState(initialHabits);

  return (
    <VStack p={5}>
      <IconButton
        icon={<FaSun />}
        isRound="true"
        size="lg"
        alignSelf="flex-end"
      />
      <Header />

      <Habit habits={habits} />
      <AddHabit />
    </VStack>
  );
}

export default App;

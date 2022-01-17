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
import Days from "./components/Days";

function App(habits) {
  const initialHabits = [
    {
      id: 1,
      body: "Exercice",
    },

    {
      id: 2,
      body: "Yoga",
    },

    {
      id: 2,
      body: "Writing",
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
      <Days />

      <Habit habits={habits} />
      <AddHabit />
    </VStack>
  );
}

export default App;

import "./App.css";
import Habit from "./components/Habit";
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

  return <Habit />;
}

export default App;

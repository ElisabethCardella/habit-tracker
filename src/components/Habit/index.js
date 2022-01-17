import { Container, HStack, Spacer } from "@chakra-ui/react";
import { Editable, EditableInput, EditablePreview } from "@chakra-ui/react";
import { Checkbox, Stack, VStack, Text } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

const Habit = () => {
  const Habits = [
    {
      id: 1,
      body: "sleep",
    },

    {
      id: 2,
      body: "dance",
    },
  ];

  return (
    <VStack
      divider={<Divider />}
      borderColor="#97266D"
      border="2px"
      p="4"
      borderRadius="lg"
      w="100%"
      maxW={{ base: "100%", md: "50%", xl: "25%" }}
      alignItems="stretch"
    >
      {Habits.map((habit) => (
        <HStack p={5} key={habit.id}>
          <Editable>
            {habit.body}
            <EditablePreview />
            <EditableInput />
          </Editable>
          <Spacer />
          <Checkbox size="lg" />
        </HStack>
      ))}
    </VStack>
  );
};

export default Habit;

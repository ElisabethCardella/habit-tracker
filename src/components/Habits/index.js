import { Container, HStack, Spacer } from "@chakra-ui/react";
import { Checkbox, VStack } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { ListItem, UnorderedList } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";

const Habits = () => {
  const [checked] = useState(false);
  const habits = useSelector((state) => state.habits.habitsList);

  return (
    <Container>
      <VStack p="4" w="100%">
        <UnorderedList>
          {habits.map((habit) => (
            <ListItem>
              <HStack p={5}>
                <Text fontSize="lg">{habit.name}</Text>

                <Spacer />

                <Checkbox
                  size="lg"
                  type="checkbox"
                  checked={checked}
                  onChange={console.log("hello")}
                />
              </HStack>
            </ListItem>
          ))}

          <Divider />
        </UnorderedList>
      </VStack>
    </Container>
  );
};

export default Habits;

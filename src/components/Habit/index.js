import { Container, HStack, Spacer } from "@chakra-ui/react";
import { Checkbox, VStack } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { ListItem, UnorderedList } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { useState } from "react";

const Habit = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Container>
      <VStack p="4" w="100%">
        <UnorderedList>
          <ListItem>
            <HStack p={5}>
              <Text fontSize="lg">Gym</Text>

              <Spacer />

              <Checkbox
                size="lg"
                type="checkbox"
                checked={checked}
                onChange={console.log("hello")}
              />
            </HStack>
          </ListItem>

          <Divider />

          <ListItem>
            <HStack spacing="150" p={5} display="flex" justifyContent="stretch">
              <Text fontSize="lg">Exercices</Text>
              <Spacer />

              <Checkbox
                size="lg"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
            </HStack>
          </ListItem>

          <Divider />

          <ListItem>
            <HStack p={5}>
              <Text fontSize="lg">Dancing</Text>
              <Spacer />
              <Checkbox
                size="lg"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
            </HStack>
          </ListItem>
        </UnorderedList>
      </VStack>
    </Container>
  );
};

export default Habit;

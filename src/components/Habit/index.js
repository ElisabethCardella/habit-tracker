import { Container, HStack, Spacer } from "@chakra-ui/react";
import { Editable, EditableInput, EditablePreview } from "@chakra-ui/react";
import { Checkbox, Stack, VStack, Text } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

const Habit = () => {
  /*const eachHabit = [
    {
      id: 1,
      body: "sleep",
    },

    {
      id: 2,
      body: "dance",
    },
  ];*/

  return (
    <VStack
      borderColor="#97266D"
      border="2px"
      p="4"
      borderRadius="lg"
      w="100%"
      maxW={{ base: "100%", md: "50%", xl: "25%" }}
      alignItems="stretch"
    >
      <UnorderedList>
        <ListItem>
          <HStack p={5} /*key={eachHabit.id}*/>
            <Editable>
              Cinema
              <EditableInput />
            </Editable>
            <Spacer />
            <Checkbox size="lg" />
          </HStack>
        </ListItem>
        <Divider />
        <ListItem>
          <HStack p={5} /*key={eachHabit.id}*/>
            <Editable>
              Exercices
              <EditableInput />
            </Editable>
            <Spacer />
            <Checkbox size="lg" />
          </HStack>
        </ListItem>
        <Divider />
        <ListItem>
          <HStack p={5} /*key={eachHabit.id}*/>
            <Editable>
              Dancing
              <EditableInput />
            </Editable>
            <Spacer />
            <Checkbox size="lg" />
          </HStack>
        </ListItem>
      </UnorderedList>
    </VStack>
  );
};

export default Habit;

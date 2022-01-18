import { Box, Container, HStack, Spacer } from "@chakra-ui/react";
import { Editable, EditableInput } from "@chakra-ui/react";
import { Checkbox, VStack } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { ListItem, UnorderedList } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";

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
    <Container>
      <Container
        borderColor="#97266D"
        border="2px"
        p="4"
        w="100%"
        maxW={{ base: "100%", md: "100%", xl: "100%" }}
      >
        <Flex>
          <Box>
            <button>
              <ChevronLeftIcon />
            </button>
          </Box>
          <Spacer />
          <Box>
            <Text>Monday</Text>
          </Box>
          <Spacer />
          <Box>
            <button>
              <ChevronRightIcon />
            </button>
          </Box>
        </Flex>
      </Container>

      <Container>
        <VStack p="4" w="100%">
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
              <HStack
                spacing="150"
                p={5}
                display="flex"
                justifyContent="stretch"
                /*key={eachHabit.id}*/
              >
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
      </Container>
    </Container>
  );
};

export default Habit;

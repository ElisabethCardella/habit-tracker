import { Flex } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Container, Spacer, Text } from "@chakra-ui/react";

const Date = () => {
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
    </Container>
  );
};

export default Date;

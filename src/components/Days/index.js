import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { Flex, Spacer } from "@chakra-ui/react";

const Days = () => {
  return (
    <Flex
      borderColor="#97266D"
      border="2px"
      p="4"
      borderRadius="lg"
      w="100%"
      maxW={{ base: "100%", md: "50%", xl: "25%" }}
    >
      <Box>
        <button>
          <ArrowBackIcon />
        </button>
      </Box>
      <Spacer />
      <Box>
        <Text>Monday</Text>
      </Box>
      <Spacer />
      <Box>
        <button>
          <ArrowForwardIcon />
        </button>
      </Box>
    </Flex>
  );
};

export default Days;

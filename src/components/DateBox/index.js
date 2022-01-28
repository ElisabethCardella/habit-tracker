import { Flex } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Container, Spacer, Text } from "@chakra-ui/react";
import { useState } from "react";
import {
  add,
  format,
  isBefore,
  isToday,
  isTomorrow,
  isYesterday,
  sub,
} from "date-fns";

const DateBox = () => {
  const [date, setDate] = useState(new Date());

  console.log(date);

  const formatDate = (date) => {
    if (isToday(date)) {
      return "Today";
    }
    if (isYesterday(date)) {
      return "Yesterday";
    }
    if (isTomorrow(date)) {
      return "Tomorrow";
    }

    return format(date, "MM/dd/yyyy");
  };

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
            <button onClick={() => setDate(sub(date, { days: 1 }))}>
              <ChevronLeftIcon />
            </button>
          </Box>
          <Spacer />
          <Box>
            <Text>{formatDate(date)}</Text>
          </Box>
          <Spacer />
          <Box>
            <button onClick={() => setDate(add(date, { days: 1 }))}>
              <ChevronRightIcon />
            </button>
          </Box>
        </Flex>
      </Container>
    </Container>
  );
};

export default DateBox;

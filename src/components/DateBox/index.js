import { Flex } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Container, Spacer, Text } from "@chakra-ui/react";
import { format, isToday, isTomorrow, isYesterday } from "date-fns";
import { useDispatch } from "react-redux";
import { previousDay, nextDay } from "../../actions/dateActions";
import { useSelector } from "react-redux";

const DateBox = () => {
  const date = useSelector((state) => state.date.date);
  const dispatch = useDispatch();

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

    return format(date, "MMMM do");
  };

  return (
    <Container p="8">
      <Container
        borderColor="#97266D"
        border="2px"
        p="4"
        w="100%"
        maxW={{ base: "100%", md: "100%", xl: "100%" }}
      >
        <Flex>
          <Box>
            <button onClick={() => dispatch(previousDay())}>
              <ChevronLeftIcon />
            </button>
          </Box>
          <Spacer />
          <Box>
            <Text>{formatDate(date)}</Text>
          </Box>
          <Spacer />
          <Box>
            <button onClick={() => dispatch(nextDay())}>
              <ChevronRightIcon />
            </button>
          </Box>
        </Flex>
      </Container>
    </Container>
  );
};

export default DateBox;

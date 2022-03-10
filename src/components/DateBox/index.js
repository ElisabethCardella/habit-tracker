import { Flex } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Container, Spacer, Text } from "@chakra-ui/react";
import { format, isToday, isTomorrow, isYesterday } from "date-fns";
import { useDispatch } from "react-redux";
import { NEXT_DAY, PREVIOUS_DAY } from "../../actions/dateActions";
import { dateReducer } from "../../reducers/dateReducer";
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
            <button onClick={() => dispatch({ type: PREVIOUS_DAY })}>
              <ChevronLeftIcon />
            </button>
          </Box>
          <Spacer />
          <Box>
            <Text>{formatDate(date)}</Text>
          </Box>
          <Spacer />
          <Box>
            <button onClick={() => dispatch({ type: NEXT_DAY })}>
              <ChevronRightIcon />
            </button>
          </Box>
        </Flex>
      </Container>
    </Container>
  );
};

export default DateBox;

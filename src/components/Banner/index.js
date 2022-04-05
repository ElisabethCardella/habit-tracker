import { Center, Button, Flex } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Formfortrial from "../FormForTrial";

const theme = extendTheme({
  fonts: {
    heading: "Open Sans, sans-serif",
    body: "Raleway, sans-serif",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
});

const Banner = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex direction="column" justify="center" bg="black" w="100%">
      <Center h=" 200px" color="black">
        <Text fontSize="4xl" align="center" color="white">
          {" "}
          Your Habbit Tracker !<br></br> Every day, it gets a little bit easier
          :)
        </Text>
      </Center>

      <Center h="100px" color="black" w="100%">
        <Button onClick={onOpen} colorScheme="teal" variant="outline">
          Have a free try here
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Form for the trial</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Formfortrial />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Link to="/habit">
                <Button variant="ghost">Send</Button>
              </Link>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Center>
    </Flex>
  );
};

export default theme;
export { Banner };

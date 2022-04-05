import { Button, Flex, Box, Spacer } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
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

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex w="100%" p="4">
      <Box>
        <Box p="4">
          <Image
            boxSize="60px"
            objectFit="cover"
            src="assets/logo1.png"
            alt="logo"
          />
        </Box>
        <Spacer />
      </Box>
      <Spacer />
      <Box>
        <Button onClick={onOpen} colorScheme="teal" variant="outline">
          Sign in
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Form for Sign In</ModalHeader>
            <ModalCloseButton />
            <ModalBody>A mettre</ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Button onClick={onOpen} colorScheme="teal" variant="outline">
          Log in
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Form for log in</ModalHeader>
            <ModalCloseButton />
            <ModalBody>A mettre</ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Flex>
  );
};
export default Header;

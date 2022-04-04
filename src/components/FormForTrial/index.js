import { FormControl, FormLabel, Input, Container } from "@chakra-ui/react";

const Formfortrial = () => {
  return (
    <Container bg="black" p="8">
      <FormControl isRequired w="80%" color="white">
        <FormLabel htmlFor="first-name">First name</FormLabel>
        <Input id="first-name" placeholder="First name" />
        <FormLabel htmlFor="Last-name">Last name</FormLabel>
        <Input id="last-name" placeholder="Last name" />
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input id="email" type="email" />
        <FormLabel htmlFor="phone-number">Phone number</FormLabel>
        <Input id="phone-number" type="number" />
      </FormControl>
    </Container>
  );
};

export default Formfortrial;

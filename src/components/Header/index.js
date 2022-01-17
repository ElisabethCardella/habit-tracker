import { Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Heading
      mb="8"
      fontWeight="extrabold"
      size="2xl"
      bgGradient="linear(to-l, #4FD1C5, #B83280)"
      bgClip="text"
    >
      Habit Tracker
    </Heading>
  );
};

export default Header;

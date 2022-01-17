import {
  Button,
  Editable,
  EditableInput,
  HStack,
  Input,
} from "@chakra-ui/react";

function AddHabit() {
  function handleSubmit(event) {}
  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input variant="filled" placeholder="Write your next habit" />
        <Button backgroundColor="#B83280" width="sl" type="submit">
          {" "}
          Add a habit
        </Button>
      </HStack>
    </form>
  );
}

export default AddHabit;

import {
  InputGroup,
  InputRightElement,
  Input,
  Button,
  Center,
} from "@chakra-ui/react";
function EmailSubs() {
  return (
    <Center h="60px" borderWidth="2px" borderColor="red" color="white">
      <InputGroup size="md" align-item="center" width="60%">
        <Input pr="4.5rem" type="text" placeholder="Subscribe for emails" />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm">
            Submit
          </Button>
        </InputRightElement>
      </InputGroup>
    </Center>
  );
}
export default EmailSubs;

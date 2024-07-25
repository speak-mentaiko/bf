import { Link as ReactRouterLink } from "react-router-dom";
import {
  Button,
  Link as ChakraLink,
  HStack,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { MdCreate } from "react-icons/md";

export const Header = () => {
  return (
    <>
      <HStack mx="3rem" mt="1rem">
        <ChakraLink as={ReactRouterLink} to="/">
          <Text fontSize="4xl">Blog</Text>
        </ChakraLink>
        <Spacer />
        <ChakraLink as={ReactRouterLink} to="/new">
          <Button bgColor="green.300">
            <MdCreate />
            New
          </Button>
        </ChakraLink>
      </HStack>
    </>
  );
};

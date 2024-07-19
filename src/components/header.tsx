import { Link as ReactRouterLink } from "react-router-dom";
import { Button, Link as ChakraLink, HStack } from "@chakra-ui/react";
import { MdCreate } from "react-icons/md";

export const Header = () => {
  return (
    <>
      <HStack>
        <ChakraLink as={ReactRouterLink} to="/">
          Blog
        </ChakraLink>
        <ChakraLink as={ReactRouterLink} to="/new">
          <Button>
            <MdCreate />
            New
          </Button>
        </ChakraLink>
      </HStack>
    </>
  );
};

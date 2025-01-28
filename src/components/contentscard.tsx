import { HStack, Spacer, Text, Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

import { ContentsData } from "../types/contentsdata";

export const ContentsCard = (props: { data: ContentsData }) => {
  const link = `/contents/${props.data.id}`;
  return (
    <>
      <ChakraLink as={ReactRouterLink} to={link}>
        <HStack w="45rem" h="4rem" mx="3rem" my="0.5rem" bgColor="gray.100">
          <Text mx="1rem" as="b">
            {props.data.title}
          </Text>
          <Spacer />
          <Text mx="1rem">{props.data.name}</Text>
        </HStack>
      </ChakraLink>
    </>
  );
};

import { useEffect, useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Heading,
  HStack,
  Spacer,
  Text,
  VStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { contentsdata } from "../types/contentsdata";

const ContentsCard = (props: { data: contentsdata }) => {
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

export const Home = () => {
  const [data, setData] = useState<contentsdata[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/contents/list`, { method: "GET" })
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      <VStack>
        <Heading size="lg">記事一覧</Heading>
        {!data ? (
          <Text>記事はありません</Text>
        ) : (
          data.map((list) => {
            return (
              <>
                <ContentsCard data={list} />
              </>
            );
          })
        )}
      </VStack>
    </>
  );
};

import { useEffect, useState } from "react";
import { useParams, Link as ReactRouterLink } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  VStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import { contentsdata } from "../types/contentsdata";
import { newTheme } from "./styles/markdown";

const isData = (data: contentsdata | undefined) => {
  if (data === undefined) return false;
  else return true;
};

const timedata = (data: contentsdata | undefined) => {
  let time = `${data?.createdAt.slice(0, 4)}年${data?.createdAt.slice(
    5,
    7
  )}月${data?.createdAt.slice(8, 10)}日`;
  return time;
};

export const Contents = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<contentsdata | undefined>(undefined);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/contents/list/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  let createTime = timedata(data);
  return (
    <>
      {isData(data) ? (
        <>
          <VStack>
            <Text>投稿者：{data?.name}</Text>
            <Heading>{data?.title}</Heading>
            <Text>{createTime}</Text>
          </VStack>
          <VStack className="markdown">
            <Box maxW="85vw">
              <ReactMarkdown
                components={ChakraUIRenderer(newTheme)}
                rehypePlugins={[rehypeRaw, rehypeSanitize]}
                remarkPlugins={[remarkGfm]}
              >
                {data?.body}
              </ReactMarkdown>
            </Box>
          </VStack>
        </>
      ) : (
        <>
          <VStack my="7rem">
            <Heading>記事が見つかりません</Heading>
            <ChakraLink as={ReactRouterLink} to="/">
              <Text fontSize="xl">戻る</Text>
            </ChakraLink>
          </VStack>
        </>
      )}
    </>
  );
};

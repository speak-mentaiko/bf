import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import { contentsdata } from "../types/contentsdata";
import "../pages/styles/markdown.css";

const isData = (data: contentsdata | undefined) => {
  if (data === undefined) return false;
  else return true;
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

  return (
    <>
      {isData(data) ? (
        <>
          <VStack className="markdown">
            <Heading>{data?.title}</Heading>
            <Box maxW="85vw">
              <ReactMarkdown
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
          <Text>記事が見つかりません</Text>
        </>
      )}
    </>
  );
};

import { useState } from "react";
import { Input, Text, Box, VStack, HStack } from "@chakra-ui/react";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";

export const New = () => {
  const [markdownString, setMarkdownString] = useState<string | undefined>("");

  return (
    <>
      <HStack mx="3rem" marginTop="2rem" w="auto" spacing="20rem">
        <VStack w="50rem">
          <Text fontSize="xl" as="b">
            タイトル
          </Text>
          <Input size="lg" placeholder="タイトル" />
        </VStack>
        <VStack w="30rem">
          <Text fontSize="xl" as="b">
            投稿者名
          </Text>
          <Input placeholder="投稿者名"></Input>
        </VStack>
      </HStack>
      <Box mx="3rem" marginTop="2rem" w="auto">
        <Text fontSize="xl" as="b">
          本文
        </Text>
        <MDEditor
          value={markdownString}
          onChange={setMarkdownString}
          previewOptions={{
            rehypePlugins: [[rehypeSanitize]],
          }}
          height="30rem"
        />
      </Box>
      <MDEditor.Markdown
        source={markdownString}
        style={{ whiteSpace: "pre-wrap" }}
      />
    </>
  );
};

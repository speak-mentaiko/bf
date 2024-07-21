import { useState } from "react";
import {
  Input,
  Box,
  VStack,
  HStack,
  Button,
  Heading,
  Flex,
  Spacer,
  FormControl,
  Text,
} from "@chakra-ui/react";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";

export const New = () => {
  const [contents, setContents] = useState<string | undefined>("");
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [submit, setSubmit] = useState(false);

  const isTitleError = title === "";
  const isNameError = name === "";
  const isContentsError = contents === "";

  const isEroor = () => {
    if (!isContentsError && !isNameError && !isTitleError) {
      return true;
    }
  };

  return (
    <>
      <HStack mx="3rem" marginTop="2rem" w="auto" spacing="20rem">
        <VStack w="50rem">
          <Heading fontSize="xl" as="b">
            タイトル
          </Heading>
          <Input
            size="lg"
            placeholder="タイトル"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </VStack>
        <VStack w="30rem">
          <Heading fontSize="xl" as="b">
            投稿者名
          </Heading>
          <Input
            placeholder="投稿者名"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </VStack>
      </HStack>
      <Box mx="3rem" marginTop="2rem" w="auto" h="65vh">
        <Heading fontSize="xl" as="b">
          本文
        </Heading>
        <MDEditor
          value={contents}
          onChange={setContents}
          previewOptions={{
            rehypePlugins: [[rehypeSanitize]],
          }}
          height="100%"
        />
      </Box>
      <Flex mx="3rem" marginTop="3rem" w="auto">
        {isEroor() ? (
          <Text></Text>
        ) : (
          <Text textColor="red" as="b">
            内容が不足しています
          </Text>
        )}
        <Spacer />
        <Button onClick={() => setSubmit(!submit)}>投稿</Button>
      </Flex>
    </>
  );
};

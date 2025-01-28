import { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Input,
  Box,
  VStack,
  HStack,
  Button,
  Heading,
  Flex,
  Spacer,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";

export const New = () => {
  const [body, setBody] = useState<string | undefined>("");
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const isTitleError = title === "";
  const isNameError = name === "";
  const isBodyError = body === "";

  const isError = () => {
    if (!isBodyError && !isNameError && !isTitleError) {
      return true;
    }
  };

  const postData = () => {
    if (isError()) {
      const data = { title: title, name: name, body: body };
      fetch(`${import.meta.env.VITE_API_URL}/contents/new`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => {
          res.json();
        })
        .then((data) => {
          console.log("Success:", data);
          setIsSubmit(true);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <>
      {!isSubmit ? (
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
              value={body}
              onChange={setBody}
              previewOptions={{
                rehypePlugins: [[rehypeSanitize]],
              }}
              height="100%"
            />
          </Box>
          <Flex mx="3rem" marginTop="3rem" w="auto">
            {isError() ? (
              <Text></Text>
            ) : (
              <Text textColor="red" as="b">
                内容が不足しています
              </Text>
            )}
            <Spacer />
            <Button onClick={() => postData()}>投稿</Button>
          </Flex>
        </>
      ) : (
        <>
          <VStack mx="3rem" my="10rem" justify="center" align="center">
            <Heading>投稿完了</Heading>
            <ChakraLink as={ReactRouterLink} to="/">
              <Text fontSize="xl">戻る</Text>
            </ChakraLink>
          </VStack>
        </>
      )}
    </>
  );
};

import { useState } from "react";
import { VStack } from "@chakra-ui/react";
import MDEditor from "@uiw/react-md-editor";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";

export const New = () => {
  const [markdownString, setMarkdownString] = useState<string | undefined>("");

  return (
    <>
      <VStack h={200} justify="center">
        <MDEditor
          value={markdownString}
          onChange={(event) => setMarkdownString(event)}
        />
        <MDEditor.Markdown
          source={markdownString}
          style={{ whiteSpace: "pre-wrap" }}
        />
      </VStack>

      <ReactMarkdown
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
        remarkPlugins={[remarkGfm]}
      >
        {markdownString}
      </ReactMarkdown>
    </>
  );
};

import {
  Box,
  Heading,
  Text,
  Link,
  List,
  ListItem,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  OrderedList,
} from "@chakra-ui/react";

export const newTheme = {
  p: (props: any) => {
    const { children } = props;
    return <Text mb={2}>{children}</Text>;
  },
  h1: (props: any) => {
    const { children } = props;
    return (
      <Heading as="h1" size="xl" my={4}>
        {children}
      </Heading>
    );
  },
  h2: (props: any) => {
    const { children } = props;
    return (
      <Heading as="h2" size="lg" my={4}>
        {children}
      </Heading>
    );
  },
  h3: (props: any) => {
    const { children } = props;
    return (
      <Heading as="h3" size="md" my={4}>
        {children}
      </Heading>
    );
  },
  h4: (props: any) => {
    const { children } = props;
    return (
      <Heading as="h4" size="sm" my={4}>
        {children}
      </Heading>
    );
  },
  h5: (props: any) => {
    const { children } = props;
    return (
      <Heading as="h5" size="xs" my={4}>
        {children}
      </Heading>
    );
  },
  h6: (props: any) => {
    const { children } = props;
    return (
      <Heading as="h6" size="xs" my={4}>
        {children}
      </Heading>
    );
  },
  a: (props: any) => {
    const { children, href } = props;
    return (
      <Link href={href} color="teal.500">
        {children}
      </Link>
    );
  },
  ul: (props: any) => {
    const { children } = props;
    return (
      <List styleType="disc" pl={4} mb={2}>
        {children}
      </List>
    );
  },
  ol: (props: any) => {
    const { children } = props;
    return (
      <OrderedList pl={4} mb={2}>
        {children}
      </OrderedList>
    );
  },
  li: (props: any) => {
    const { children } = props;
    return <ListItem>{children}</ListItem>;
  },
  blockquote: (props: any) => {
    const { children } = props;
    return (
      <Box
        pl={4}
        borderLeft="4px"
        borderColor="gray.200"
        color="gray.600"
        my={4}
      >
        {children}
      </Box>
    );
  },
  table: (props: any) => {
    const { children } = props;
    return (
      <Table variant="simple" my={4}>
        {children}
      </Table>
    );
  },
  thead: Thead,
  tbody: Tbody,
  tr: Tr,
  th: Th,
  td: Td,
};

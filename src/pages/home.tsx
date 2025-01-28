import { useEffect, useState } from "react";
import { Heading, Text, VStack } from "@chakra-ui/react";

import { ContentsData } from "../types/contentsdata";
import { ContentsCard } from "../components/contentscard";

export const Home = () => {
  const [data, setData] = useState<ContentsData[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/contents/list`, { method: "GET" })
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.error(error);
        setData([]);
      });
  }, []);

  return (
    <>
      <VStack>
        <Heading size="lg">記事一覧</Heading>
        {!data.length ? (
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

import { Fragment } from 'react';
import { Box, SimpleGrid, Flex, useColorModeValue } from '@chakra-ui/react';
import { Heading } from '@components/Heading';
import { SearchbarContainer } from '@components/SearchbarContainer';

import { CurrentTopic } from './CurrentTopic';
import { TopicCard } from './TopicCard';

interface IRelatedTopics {
  name: string;
  stargazers: { totalCount: number };
  id: string;
}

export function Topics({
  topicName,
  stargazerCount,
  relatedTopics = [],
}: {
  topicName: string;
  relatedTopics: IRelatedTopics[];
  stargazerCount: number;
}) {
  return (
    <Flex w={{ base: '100%' }}>
      <Box px={{ base: 5, sm: 20, md: 30 }} w="auto" py={20} mx="auto" bg="white" shadow={{ base: 'none', md: 'xl' }}>
        <Box textAlign="center">
          <Heading />
          <SearchbarContainer />
          <CurrentTopic topicName={topicName} stargazerCount={stargazerCount} />
        </Box>
        <Box mt={10} fontSize="xl" color="gray.500">
          {relatedTopics.length > 0 ? 'Related Topics:' : 'No related Topics found. :('}
        </Box>
        <Flex columns={{ base: 2, sm: 2, md: 3, lg: 4, xl: 6 }} spacingX={{ base: 16, lg: 24 }} mt={6} wrap="wrap">
          {relatedTopics.map(({ name, stargazers, id }) => (
            <Fragment key={id}>
              <TopicCard title={name} count={stargazers.totalCount} key={id} />
            </Fragment>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
}

import {
  chakra,
  Box,
  SimpleGrid,
  InputLeftElement,
  Flex,
  useColorModeValue,
  Input,
  InputGroup,
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';
import { TopicCard } from './TopicCard';

interface IRelatedTopics {
  name: string;
  stargazers: { totalCount: number };
  id: string;
}

export function Topics({ topicName, relatedTopics = [] }: { topicName: string; relatedTopics: IRelatedTopics[] }) {
  return (
    <Flex p={{ base: 5, sm: 10, md: 20 }} w="auto" justifyContent="center" alignItems="center">
      <Box
        px={{ base: 5, sm: 20, md: 30 }}
        py={20}
        mx="auto"
        bg={useColorModeValue('white', 'gray.800')}
        shadow={{ base: 'none', sm: 'xl' }}
      >
        <Box textAlign="center">
          <chakra.p
            m={2}
            fontSize={{ base: '3xl', sm: '4xl' }}
            lineHeight="8"
            fontWeight="extrabold"
            letterSpacing="tight"
            color="gray.900"
          >
            GitHub Topics
          </chakra.p>
          <InputGroup m="auto" w={{ base: '80', sm: '96' }}>
            <InputLeftElement color="gray.500">
              <FiSearch />
            </InputLeftElement>
            <Input placeholder="Search for Topics..." />
          </InputGroup>{' '}
          <chakra.p
            my={4}
            maxW="2xl"
            fontSize="xl"
            mx={{ lg: 'auto' }}
            color={useColorModeValue('gray.500', 'gray.400')}
          >
            Find any topic.{topicName}
          </chakra.p>{' '}
        </Box>

        <SimpleGrid columns={{ base: 2, sm: 2, md: 3, lg: 4, xl: 6 }} spacingX={{ base: 16, lg: 24 }} mt={6}>
          {relatedTopics.map(({ name, stargazers, id }) => (
            <TopicCard title={name} count={stargazers.totalCount} key={id} />
          ))}
        </SimpleGrid>
      </Box>
    </Flex>
  );
}

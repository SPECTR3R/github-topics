import { Box } from '@chakra-ui/react';
import { StarIcon } from '@components/StarIcon';

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function CurrentTopic({ topicName = '', stargazerCount = 0 }: { topicName: string; stargazerCount: number }) {
  return (
    <>
      {topicName && (
        <Box my={4} maxW="2xl" fontSize="xl" mx={{ lg: 'auto' }} color="gray.500">
          Current Topic is: {capitalize(topicName)} with {stargazerCount} <StarIcon />
        </Box>
      )}
    </>
  );
}

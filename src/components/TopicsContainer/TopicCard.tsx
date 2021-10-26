import { Text, Box, Flex } from '@chakra-ui/react';
import { StarIcon } from '@components/StarIcon';
import { useRouter } from 'next/router';

export const TopicCard = ({ title, count }: { title: string; count: number }) => {
  const router = useRouter();

  return (
    <Box m={4}>
      <Box
        onClick={() => router.push(`/${title}`)}
        mb={2}
        cursor="pointer"
        fontWeight="semibold"
        lineHeight="shorter"
        _hover={{ textDecor: 'underline' }}
        color="gray.900"
      >
        {title}
      </Box>
      <Flex direction="row">
        <Text fontSize="sm" color="gray.500">
          {count}
        </Text>
        <StarIcon />
      </Flex>
    </Box>
  );
};

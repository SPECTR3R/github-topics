import React from 'react';
import { Text } from '@chakra-ui/react';

export const Heading = () => (
  <>
    <Text
      m={2}
      as="h1"
      fontSize={{ base: '3xl', sm: '4xl' }}
      lineHeight="8"
      fontWeight="extrabold"
      letterSpacing="tight"
      color="gray.900"
    >
      GitHub Topics
    </Text>
    <Text my={4} maxW="2xl" fontSize="xl" mx={{ lg: 'auto' }} color="gray.500">
      Find any topic you want on GitHub.
    </Text>
  </>
);

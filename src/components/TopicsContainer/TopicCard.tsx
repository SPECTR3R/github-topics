import { chakra, Box, Flex, useColorModeValue, Center, Icon } from '@chakra-ui/react';

export const TopicCard = ({ title, count }: { title: string; count: number }) => (
  <Box m={4}>
    <chakra.h3 mb={2} fontWeight="semibold" lineHeight="shorter" color="gray.900">
      {title}
    </chakra.h3>

    <Flex direction="row">
      <chakra.p fontSize="sm" color={useColorModeValue('gray.500', 'gray.400')}>
        {count}
      </chakra.p>
      <Center
        w={5}
        h={5}
        mx={1}
        rounded="full"
        color={useColorModeValue('yellow.600', 'yellow.100')}
        bg={useColorModeValue('yellow.100', 'yellow.600')}
      >
        <Icon boxSize={3} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </Icon>
      </Center>
    </Flex>
  </Box>
);

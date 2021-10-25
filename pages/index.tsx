import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Center } from '@chakra-ui/react';

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/react');
  });

  return <Center>Loading...</Center>;
};
export default Index;

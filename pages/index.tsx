import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Loading } from '@components/Loading';

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/react');
  });
  return <Loading />;
};
export default Index;

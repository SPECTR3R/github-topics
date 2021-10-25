// index.tsx
import React, { FC } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { TopicsContainer } from '@components/TopicsContainer';

const Home: FC = () => {
  const router = useRouter();
  const { query } = router;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopicsContainer topicName={query.topicName as string} />
    </>
  );
};

export default Home;

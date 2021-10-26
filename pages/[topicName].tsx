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
        <title>GitHub Topics Explorer</title>
        <link rel="shortcut icon" href="/GitHub.ico" />
      </Head>
      <TopicsContainer topicName={query.topicName as string} />
    </>
  );
};

export default Home;

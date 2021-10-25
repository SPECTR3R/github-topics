// index.tsx
import React, { FC } from 'react';
import Head from 'next/head';
import { useQuery, gql } from '@apollo/client';

const GET_TOPICS_QUERY = gql`
  query Topic($name: String!) {
    topic(name: $name) {
      id
      name
      stargazerCount
      relatedTopics {
        name
        stargazers {
          totalCount
        }
      }
    }
  }
`;

function TopicsContainer() {
  const { data, loading, error } = useQuery(GET_TOPICS_QUERY, {
    variables: {
      name: 'react',
    },
  });

  if (loading) return <p>Loadking...</p>;
  if (error) return <p>Error :(</p>;

  console.log({ data });

  return <>holi</>;
}

const Home: FC = () => (
  <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <TopicsContainer />
  </>
);

export default Home;

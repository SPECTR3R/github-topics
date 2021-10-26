import { GET_TOPICS_QUERY } from '@graphql/queries';
import { useQuery } from '@apollo/client';
import { Error } from '@components/Error';
import { Loading } from '@components/Loading';
import { Topics } from './Topics';

export function TopicsContainer({ topicName }: { topicName: string }) {
  const { data, loading, error } = useQuery(GET_TOPICS_QUERY, {
    variables: {
      name: topicName ?? 'react',
    },
  });

  if (loading) return <Loading />;
  if (error) return <Error />;

  const { name, relatedTopics, stargazerCount } = data.topic;

  return <Topics topicName={name} relatedTopics={relatedTopics} stargazerCount={stargazerCount} />;
}

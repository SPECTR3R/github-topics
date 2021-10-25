import { GET_TOPICS_QUERY } from '@graphql/queries';
import { useQuery } from '@apollo/client';
import { Topics } from './Topics';

export function TopicsContainer({ topicName }: { topicName: string }) {
  const { data, loading, error } = useQuery(GET_TOPICS_QUERY, {
    variables: {
      name: topicName ?? 'react',
    },
  });

  if (loading) return <p>Loadking...</p>;
  if (error) return <p>Error :(</p>;

  const { name, relatedTopics } = data.topic;

  return <Topics topicName={name} relatedTopics={relatedTopics} />;
}

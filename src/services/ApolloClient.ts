import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GITHUB_API_URL, GITHUB_API_TOKEN } from '@utils/constants';

export const client = new ApolloClient({
  uri: GITHUB_API_URL,
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${GITHUB_API_TOKEN}`,
  },
});

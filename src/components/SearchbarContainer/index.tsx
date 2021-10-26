import React from 'react';
import { useRouter } from 'next/router';
import { Searchbar } from './Searchbar';

export const SearchbarContainer = () => {
  const router = useRouter();

  const handleSearchEnter = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      router.push(event.currentTarget.value);
    }
  };
  return <Searchbar handleSearchEnter={handleSearchEnter} />;
};

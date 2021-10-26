import { InputLeftElement, Input, InputGroup } from '@chakra-ui/react';

import { FiSearch } from 'react-icons/fi';

interface IKeyHandler {
  handleSearchEnter: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
export const Searchbar = (props: IKeyHandler) => (
  <InputGroup m="auto" w={{ base: '80', sm: '96' }}>
    <InputLeftElement color="gray.500">
      <FiSearch />
    </InputLeftElement>
    <Input placeholder="Search for Topics..." onKeyDown={props.handleSearchEnter} />
  </InputGroup>
);

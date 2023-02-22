import React, { useState } from 'react';

export const SearchContext = React.createContext<{
  query: string;
  updateQuery: (updatedQuery: string) => void;
}>({
  query: '',
  updateQuery: (updatedQuery: string) => {},
});

export const SearchContextProvider: React.FC<React.PropsWithChildren> = (props) => {
  const [query, setQuery] = useState('');

  const updateQuery = (updatedQuery: string) => {
    setQuery(updatedQuery);
  };

  return (
    <SearchContext.Provider
      value={{
        query: query,
        updateQuery: updateQuery,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

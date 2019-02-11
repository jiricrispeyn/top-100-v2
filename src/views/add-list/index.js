import React, { useState, useEffect } from 'react';
import { get } from 'lodash';
import { search } from '../../api/queries';
import useDebounce from '../../hooks/use-debounce';
import { BaseCard, IntegrationCard } from '../../components/card';
import { H3 } from '../../components/headings';
import { MediumButton } from '../../components/buttons';
import { StyledLink, ResultsContainer } from './style';
import { SearchInput } from './components/search-input';

const AddList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState({});
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      search(debouncedSearchTerm, 'track').then(results => {
        console.log(results);
        setIsSearching(false);
        setResults(results);
      });
    } else {
      setResults({});
    }
  }, [debouncedSearchTerm]);

  return (
    <>
      <H3>Add top 10</H3>
      <BaseCard style={{ marginTop: '1.5rem' }}>
        <SearchInput
          type="text"
          placeholder="Search track"
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
        />
        <ResultsContainer>
          {isSearching && 'Searching...'}
          {get(results, 'tracks.items', []).map(item => (
            <IntegrationCard
              key={item.id}
              src={item.album.images[1].url}
              alt={item.album.name}
              title={item.name}
              subtitle={item.artists[0].name}
            />
          ))}
        </ResultsContainer>
        <div style={{ marginTop: '1.875rem' }}>
          <MediumButton>Add top 10</MediumButton>
          <StyledLink to="/">Cancel</StyledLink>
        </div>
      </BaseCard>
    </>
  );
};

export default AddList;

import React, { FC, useState, useEffect } from 'react';
import { get } from 'lodash';
import useDebounce from '../../hooks/use-debounce';
import { BaseCard, IntegrationCard } from '../../components/card';
import { H3 } from '../../components/headings';
import { MediumButton } from '../../components/buttons';
import { StyledLink, ResultsContainer } from './style';
import { SearchInput } from './components/search-input';
import { AddListProps } from '.';

const AddList: FC<AddListProps> = ({ search, add }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      search(debouncedSearchTerm, 'track');
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
          onChange={(event: any) => setSearchTerm(event.target.value)}
        />
        {/* <ResultsContainer>
          {get(results, 'tracks.items', []).map((item: any) => (
            <IntegrationCard
              key={item.id}
              src={item.album.images[1].url}
              alt={item.album.name}
              title={item.name}
              subtitle={item.artists[0].name}
            />
          ))}
        </ResultsContainer> */}
        <div style={{ marginTop: '1.875rem' }}>
          <MediumButton onClick={() => add([])}>Add top 10</MediumButton>
          <StyledLink to="/">Cancel</StyledLink>
        </div>
      </BaseCard>
    </>
  );
};

export default AddList;

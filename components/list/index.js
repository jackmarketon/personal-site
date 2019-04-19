import React from 'react';
import styled from 'styled-components';

import ListTitle from '../listTitle';

const ListWrapper = styled.ul`
  list-style: none;
  margin: 0 0 0 0.5rem;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 0 0 0 0.5rem;
`;

const SingleList = ({ listItems }) => (
  <ListWrapper>
    {listItems.map(item => (
      <ListItem key={item}>{item}</ListItem>
    ))}
  </ListWrapper>
);

const MultiListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const MultiListTitle = styled.h4`
  color: ${({ theme }) => theme.color.secondary};
  font-family: ${({ theme }) => theme.font.fontFamily.sansSerif};
  font-size: 1.25rem;
  font-weight: 800;
  margin: 0 0 0.5rem;
`;

const MultiList = ({ listItems, listDict }) => (
  <MultiListWrapper>
    {Object.keys(listDict).map(key => (
      <div key={key}>
        <MultiListTitle>{listDict[key]}</MultiListTitle>
        <ListWrapper>
          {listItems[key].map(item => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </ListWrapper>
      </div>
    ))}
  </MultiListWrapper>
);

const List = ({ title, listItems, listDict = false }) => (
  <>
    <ListTitle>{title}</ListTitle>
    {listDict ? (
      <MultiList listItems={listItems} listDict={listDict} />
    ) : (
      <SingleList listItems={listItems} />
    )}
  </>
);

export default List;

import React from 'react';
import styled from 'styled-components';

import ListTitle from '../listTitle';

const List = styled.dl`
  align-content: flex-start;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  max-height: 32rem;
  margin: -1rem 0;
  width: 100%;
`;

const ListItem = styled.div`
  margin: 1rem 0;
  width: 33.3333333%;
`;

const RoleOrganization = styled.dt`
  font-size: 1.5rem;
  font-weight: 800;
`;

const RoleInfo = styled.dd`
  border-left: 2px solid ${({ theme }) => theme.color.ternary};
  margin: 0.5rem 0 0 1rem;
  padding: 0 0 0 1rem;

  * {
    margin: 0;
    padding: 0.25rem 0;

    &:first-child {
      padding-top: 0;
    }
    &:last-child {
      padding-bottom: 0;
    }
  }
`;

const RoleTitle = styled.h3`
  font-weight: 500;
  font-size: 1.2rem;
`;

const RoleTeam = styled.p`
  font-size: 0.8rem;
  padding: 0 0 1rem 1rem;
`;

const RoleDuration = styled.p`
  font-style: italic;
`;

const RoleLocation = styled.p`
  font-style: italic;
`;

const RoleDescription = styled.p``;

const RoleListItem = ({
  organization,
  title,
  startDate,
  endDate = false,
  team = '',
  location,
  description = '',
}) => {
  const key = `${organization}+${title}+${startDate}`;
  const duration = endDate
    ? `${startDate} - ${endDate}`
    : `${startDate} - Present`;

  return (
    <ListItem key={key}>
      <RoleOrganization>{organization}</RoleOrganization>
      <RoleInfo>
        <RoleTitle>{title}</RoleTitle>
        {team && <RoleTeam>{team}</RoleTeam>}
        <RoleDuration>{duration}</RoleDuration>
        <RoleLocation>{location}</RoleLocation>
        {description && <RoleDescription>{description}</RoleDescription>}
      </RoleInfo>
    </ListItem>
  );
};

const RoleList = ({ title, roles }) => (
  <>
    <ListTitle>{title}</ListTitle>
    <List>{roles.map(RoleListItem)}</List>
  </>
);

export default RoleList;

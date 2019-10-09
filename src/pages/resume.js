import React from 'react';
import Hero from '../components/hero';
import Body from '../components/body';
import RoleList from '../components/roleList';
import List from '../components/list';
import resume from '../config/resume';

export default () => (
  <>
    <Hero image="street" tagline="Development Culture Evangelist" />
    <Body>
      <List
        title="Proficiencies"
        listItems={resume.proficiencies}
        listDict={{
          expert: 'Expert',
          advanced: 'Advanced',
          experienced: 'Experienced',
          interest: 'Interested In',
          former: 'Past Experience',
        }}
      />
      <RoleList title="Experience" roles={resume.experiences} />
      <RoleList title="Education" roles={resume.education} />
    </Body>
  </>
);

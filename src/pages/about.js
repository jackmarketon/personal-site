import React from 'react';
import styled from 'styled-components';
import Hero from '../components/hero';
import Body from '../components/body';

const Title = styled.h1`
  color: ${({ theme }) => theme.color.ternary};
  font-family: ${({ theme }) => theme.font.fontFamily.serif};
  font-size: 2.5rem;
  margin: 1rem 0;
`;

const P = styled.p`
  border-left: 2px solid ${({ theme }) => theme.color.ternary};
  font-size: 1.2rem;
  margin: 0;
  padding: 0.5rem 0 0.5rem 2rem;

  a {
    text-decoration: none;
  }

  &:first-of-type {
    padding-top: 2rem;
  }
  &:last-of-type {
    padding-bottom: 2rem;
  }
`;

export default () => {
  return (
    <>
      <Hero image="sd" tagline="Minnesota Born, South Dakota Raised" />
      <Body>
        <Title>Hello and Welcome!</Title>
        <P>
          First, a little about me. You can call me Jack, Jackson, or
          even Wedge. I&apos;m a product engineer living in San Francisco,
          California with Kyrie, my wife, and Mandy, our basset hound. While we
          are located in San Francisco, my wife is from the cold white north (
          <strike>Canada</strike> Minnesota), and I hail from the state of
          &quot;Great Faces, Great Places&quot; (South Dakota).
        </P>
        <P>
          Thanks to Cal Newport&apos;s{' '}
          <a
            className="bookTitle"
            href="https://www.amazon.com/Good-They-Cant-Ignore-You/"
            rel="noopener noreferrer"
            target="_blank"
          >
            So Good They Can&apos;t Ignore You
          </a>
          , I live to find passion in being an expert at my craft, which happens
          to be software and product engineering.I firmly believe that the
          success of a development team depends on having a strong mindset of
          perfecting the craft of building software. Of which I think of myself
          as a code and development cultural evangelist.
        </P>
        <P>
          When I&apos;m not working, I can be found most often in my kitchen
          perfecting my artistic passions related to everything food and drink.
          From, perfecting my BBQ recipe, creating craft cocktails, or
          attempting to conquer bread, I&apos;m hopelessly in love with the
          culinary arts.
        </P>
        <P>
          Other cooking, my hobbies include, video and board games, losing
          myself in books of all kinds, and being outdoorsy. Since I hail from
          the Midwest, for the last few years, I&apos;ve also competed in
          pistol, rifle, and shotgun competitions.
        </P>
      </Body>
    </>
  );
};

import React from 'react';
import styled from 'styled-components';

import Fact from './Fact';

const CATEGORIES = [
  { name: 'technology', color: '#3b82f6' },
  { name: 'science', color: '#16a34a' },
  { name: 'finance', color: '#ef4444' },
  { name: 'society', color: '#eab308' },
  { name: 'entertainment', color: '#db2777' },
  { name: 'health', color: '#14b8a6' },
  { name: 'history', color: '#f97316' },
  { name: 'news', color: '#8b5cf6' },
];

const initialFacts = [
  {
    id: 1,
    text: 'React is being developed by Meta (formerly facebook)',
    source: 'https://opensource.fb.com/',
    category: 'technology',
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: 'Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%',
    source:
      'https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids',
    category: 'society',
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: 'Lisbon is the capital of Portugal',
    source: 'https://en.wikipedia.org/wiki/Lisbon',
    category: 'society',
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const FactList = () => {
  // Temporary
  const facts = initialFacts;
  return (
    <Wrapper>
      <ul className='facts-list'>
        {facts.map((fact) => {
          return (
            <Fact key={fact.id} {...fact} Categories={CATEGORIES}/>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default FactList;

const Wrapper = styled.section`
  .fact {
    background-color: #44403c;
    font-size: 2rem;
    line-height: 1.4;
    margin-bottom: 1.6rem;
    padding: 1.6rem 2.4rem;
    letter-spacing: -0.1rem;
    border-radius: 1.6rem;

    display: flex;
    align-items: center;
    gap: 2.4rem;
  }

  @media (max-width: 75em) {
    .fact {
      flex-direction: column;
      align-items: flex-end;
      gap: 1.2rem;
    }
  }

  .tag {
    text-transform: uppercase;
    font-size: 1.4rem;
    font-family: 'Coiny', sans-serif;
    padding: 0.3rem 1rem 0 1rem;
    border-radius: 10rem;
  }

  .vote-buttons {
    margin-left: auto;
    flex-shrink: 0;

    display: flex;
    gap: 0.8rem;
  }

  .vote-buttons button {
    border: none;
    background-color: #78716c;
    font-size: 1.8rem;
    padding: 0.6rem 1.2rem;
    border-radius: 10rem;
    color: inherit;
    font-family: inherit;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
  }

  .vote-buttons button:hover {
    background-color: #292524;
  }

  .source:link,
  .source:visited {
    color: #a8a29e;
    text-decoration: none;
    margin-left: 1.2rem;
    transition: 0.3s;
  }

  .source:hover,
  .source:active {
    color: #3b82f6;
  }
`;

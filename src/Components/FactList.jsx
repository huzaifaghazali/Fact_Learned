import React from 'react';
import styled from 'styled-components';

import Fact from './Fact';

const FactList = ({ facts, CATEGORIES }) => {
  console.log(facts);
  if (facts.length === 0) {
    return (
      <p className='message'>
        No facts for this category yet! Create the first one ✌️
      </p>
    );
  }

  return (
    <Wrapper>
      <ul className='facts-list'>
        {facts.map((fact) => {
          return <Fact key={fact.id} {...fact} Categories={CATEGORIES} />;
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

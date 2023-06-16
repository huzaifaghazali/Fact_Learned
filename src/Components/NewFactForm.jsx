import React from 'react';
import styled from 'styled-components';
const NewFactForm = () => {
  return (
    <Wrapper>
      <form className='fact-form'>NewFactForm</form>
    </Wrapper>
  );
};

export default NewFactForm;

const Wrapper = styled.section`
  .fact-form {
    background-color: #44403c;
    margin-bottom: 4rem;
    padding: 1.6rem 3.2rem;
    display: flex;
    align-items: center;
    gap: 1.6rem;
    border-radius: 1.6rem;
  }

  .fact-form input,
  .fact-form select {
    width: 22rem;
    background-color: #78716c;
    border: none;
    border-radius: 10rem;
    padding: 1.6rem;
    font-size: 1.8rem;
    color: inherit;
    font-family: inherit;
  }

  .fact-form input::placeholder {
    color: #a8a29e;
  }

  .fact-form input:first-child {
    flex-grow: 1;
  }

  .fact-form span {
    font-weight: 600;
    font-size: 1.8rem;
    margin-right: 1.8rem;
  }

  @media (max-width: 62.5em) {
    .fact-form {
      flex-direction: column;
      align-items: stretch;
    }

    .fact-form input,
    .fact-form select {
      width: auto;
    }
  }
`;
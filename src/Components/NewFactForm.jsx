import React, { useState } from 'react';
import styled from 'styled-components';

function isValidHttpUrl(string) {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === 'http:' || url.protocol === 'https:';
}

const NewFactForm = ({ handleShowForm, CATEGORIES }) => {
  const [text, setText] = useState('');
  const [source, setSource] = useState('http://example.com');
  const [category, setCategory] = useState('');

  const textLength = text.length;

  const handleSubmit = (e) => {
    // 1. Prevent browse reload
    e.preventDefault();

    // 2. Check if data is valid. If so, create a new fact
    if (text && isValidHttpUrl(source) && category && textLength <= 200) {
      //  3. Create a new fact object
      const newFact = {
        id: Math.round(Math.random() * 10000000),
        text,
        source,
        category,
        votesInteresting: 0,
        votesMindblowing: 0,
        votesFalse: 0,
        createdIn: new Date().getFullYear(),
      };

      // 4. Add the new fact to the UI: add the fact to state

      // 5. Reset input fields
      setText('');
      setSource('');
      setCategory('');

      // 6. Close the form
      handleShowForm();
    }
  };

  return (
    <Wrapper>
      <form className='fact-form' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Share a fact with the world...'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <span>{200 - textLength}</span>
        <input
          type='text'
          placeholder='Trustworthy source....'
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value=''>Choose category:</option>
          {CATEGORIES.map((category) => {
            return (
              <option key={category.name} value={category.name}>
                {category.name.toUpperCase()}
              </option>
            );
          })}
        </select>
        <button className='btn btn-large'>Post</button>
      </form>
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

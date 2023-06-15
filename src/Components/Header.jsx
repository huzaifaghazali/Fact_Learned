import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Wrapper>
      <div className='logo'>
        <img src='logo.png' alt='logo Image' height={68} width={68} />
        <h1>Today I Learned</h1>
      </div>
      <button className='btn btn-large btn-open'>Share a fact</button>
    </Wrapper>
  );
}

// const Wrapper = styled.section`
//   padding: 4em;
//   background: papayawhip;
// `;

export default Header;

const Wrapper = styled.header`
  margin-bottom: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }

  .logo img {
    width: 6.8rem;
    height: 6.8rem;
  }
`;

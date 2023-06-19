import React from 'react';
import styled from 'styled-components';

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

const CategoryFilter = ({ setCurrentCategory }) => {
  return (
    <Wrapper>
      <ul>
        <li className='category'>
          <button
            className='btn btn-all-categories'
            onClick={() => setCurrentCategory('all')}
          >
            All
          </button>
        </li>

        {CATEGORIES.map((category) => {
          return (
            <li key={category.name} className='category'>
              <button
                className='btn btn-category'
                onClick={() => setCurrentCategory(category.name)}
                style={{ backgroundColor: category.color }}
              >
                {category.name}
              </button>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default CategoryFilter;

const Wrapper = styled.aside`
  .category {
    margin-bottom: 1.6rem;
  }
`;

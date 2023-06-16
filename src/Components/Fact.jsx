import React from 'react';

const Fact = ({
  id,
  text,
  source,
  category,
  votesInteresting,
  votesMindblowing,
  votesFalse,
  Categories,
}) => {
  return (
    <li  className='fact'>
      <p>
        {text}
        <a className='source' href={source} target='_blank'>
          (Source)
        </a>
      </p>
      <span
        className='tag'
        style={{
          backgroundColor: Categories.find((cat) => cat.name === category)
            .color,
        }}
      >
        {category}
      </span>
      <div className='vote-buttons'>
        <button>👍 {votesInteresting}</button>
        <button>🤯 {votesMindblowing}</button>
        <button>⛔️ {votesFalse}</button>
      </div>
    </li>
  );
};

export default Fact;

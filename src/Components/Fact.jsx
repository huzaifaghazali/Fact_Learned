import React, { useState } from 'react';
import supabase from '../supabase';

const Fact = ({ fact, setFacts, Categories }) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const isDisputed = fact.votesInteresting + fact.votesMindblowing < fact.votesFalse;

  const {
    id,
    text,
    source,
    category,
    votesInteresting,
    votesMindblowing,
    votesFalse,
  } = fact;

  const handleVote = async (columnName) => {
    setIsUpdating(true);
    const { data: updatedFact, error } = await supabase
      .from('facts')
      .update({ [columnName]: fact[columnName] + 1 })
      .eq('id', fact.id)
      .select();
    setIsUpdating(false);

    if (!error)
      setFacts((facts) =>
        facts.map((f) => (f.id === fact.id ? updatedFact[0] : f))
      );
  };

  return (
    <li className='fact'>
      <p>
        {isDisputed ? <span className='disputed'>[⛔️ DISPUTED]</span> : null}
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
        <button
          onClick={() => handleVote('votesInteresting')}
          disabled={isUpdating}
        >
          👍 {votesInteresting}
        </button>
        <button
          onClick={() => handleVote('votesMindblowing')}
          disabled={isUpdating}
        >
          🤯 {votesMindblowing}
        </button>
        <button onClick={() => handleVote('votesFalse')} disabled={isUpdating}>
          ⛔️ {votesFalse}
        </button>
      </div>
    </li>
  );
};

export default Fact;

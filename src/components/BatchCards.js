import React from 'react';
import CardList from './CardList';

const BatchCards = ({ persons }) => {
  return (
    <div>
      <CardList persons={persons}/>
    </div>
  )
}

export default BatchCards;
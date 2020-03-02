import React from 'react';
import Card from './Card';

const CardList = ({ persons }) => {
  return(
    <React.Fragment>
      {
        persons.map((user, i) => (
          <Card key={i} user={user} />
        ))
      }
    </React.Fragment>
  )
}

export default CardList;
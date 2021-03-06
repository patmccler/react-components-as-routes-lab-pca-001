import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(({name, movies}) => {
      return(
        <div>
          <h3>{name}</h3>
          <ul>
            {movies.map(movie => movie)}
          </ul>
        </div>
      )})}
    </div>
  );
}

export default Directors

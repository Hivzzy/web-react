// person.js
import React from 'react';

function Person(props) {
  const { width, height } = props;
  
  return (
    <img
      src={`${process.env.PUBLIC_URL}/assets/people.svg`}
      alt="People Icon"
      width={width}
      height={height}
    />
  );
}

export default Person;

import React from "react";
import { useParams } from 'react-router-dom';
function DogDetails({ dogs }) {
  const { name } = useParams();
  const dog = dogs.find(d => d.name === name);

  if (!dog) {
    return <h2>Dog not found!</h2>;
  }

  return (
    <div>
      <p>Name: {dog.name} </p>
      <p>Age: {dog.age} </p>
      <p>Facts: {dog.facts.map(fact => (
        <li>
          {fact}
        </li>
      ))} </p>
    </div>
  );
}

export default DogDetails;

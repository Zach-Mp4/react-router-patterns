import React from "react";
import { Link } from "react-router-dom";

function Nav({ names }) {
  return (
    <ul>
    {names.map(name => (
      <li key={name}>
        <Link to={`/dogs/${name}`}>Show me the {name}!</Link>
      </li>
    ))}
  </ul>
  );
}



export default Nav;

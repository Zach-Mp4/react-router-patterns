import React from "react";
import { Link } from "react-router-dom";

function Colors({list}) {
  return (
    <ul>
      Colors!:
    {list.map(color => (
      <li key={color}>
        <Link to={`/colors/${color}`}>{color}!</Link>
      </li>
    ))}
      <Link to={`/colors/add`}>add color!</Link>
  </ul>
  );
}



export default Colors;

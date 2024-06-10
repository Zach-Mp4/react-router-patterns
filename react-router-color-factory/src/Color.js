import React from "react";
import { useParams, Link } from 'react-router-dom';

function Color({ colors }) {
  const { name } = useParams();
  const color = colors.find(c => c.name === name);

  if (!color) {
    return (
        <div>
        <h2>Color not found!</h2>
        <Link to="/colors">Back to Colors List</Link>
        </div>
    )
  }

  const appStyle = {
    backgroundColor: color.code,
    height: '100vh',
    width: '100%'
  };

  return (
    <div style={appStyle}>
      <h1>{color.name}!!</h1>
    </div>
  );
}

export default Color;
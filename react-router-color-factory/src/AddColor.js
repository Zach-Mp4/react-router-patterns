import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function AddColor({ addColor }) {
  const [name, setName] = useState('');
  const [hexCode, setHexCode] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new color to the color list
    addColor({ name, code: hexCode });
    // Redirect to the colors list page
    navigate('/colors');
  };

  return (
    <div>
      <h2>Add a New Color</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Color Name:
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </label>
        </div>
        <div>
          <label>
            Hex Code:
            <input 
              type="text" 
              value={hexCode} 
              onChange={(e) => setHexCode(e.target.value)} 
              required 
            />
          </label>
        </div>
        <button type="submit">Add Color</button>
      </form>
      <Link to="/colors">Back to Colors List</Link>
    </div>
  );
}

export default AddColor;
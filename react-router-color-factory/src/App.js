import './App.css';
import React, { useState } from 'react';
import Colors from './Colors'
import Color from './Color'
import AddColor from './AddColor'
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";

function App() {
  const [colors, setColors] = useState([
    { name: 'red', code: '#FF0000' },
    { name: 'green', code: '#00FF00' },
    { name: 'blue', code: '#0000FF' },
  ]);

  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  let colorNames = colors.map(color => color.name);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/colors/" element={<Colors list={colorNames} />} />
          <Route exact path="/colors/:name" element={<Color colors={colors} />} />
          <Route exact path="/colors/add" element={<AddColor addColor={addColor} />} />
          <Route path="*" element={<Navigate to="/colors" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

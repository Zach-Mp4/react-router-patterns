import './App.css';
import Nav from './Nav'
import DogDetails from './DogDetails'
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App({ dogs }) {
  const names = dogs.map(dog => dog.name);
  return (
    <div className="App">
      <BrowserRouter>
        <Nav names={names} />
        <Routes>
        <Route exact path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}



export default App;
